/// <reference types="jest" />
import os from 'os';
import path from 'path';

import fs from 'fs-extra';

import {
  defaultConfig,
  loadUserConfig,
  saveUserConfig,
  getConfig,
  setConfig,
  getRegistry
} from '../../utils/config';

// Mock fs-extra
jest.mock('fs-extra');

describe('Config Module', () => {
  const mockUserConfigPath = path.join(os.homedir(), '.cya', 'config.json');
  const mockUserConfig = {
    registry: {
      npm: 'https://mock-npm-registry.org',
      taobao: 'https://mock-taobao-registry.com'
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('loadUserConfig', () => {
    it('should return default config when user config does not exist', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(false);

      const config = loadUserConfig();

      expect(config).toEqual(defaultConfig);
      expect(fs.existsSync).toHaveBeenCalledWith(mockUserConfigPath);
    });

    it('should merge user config with default config when user config exists', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readJsonSync as jest.Mock).mockReturnValue(mockUserConfig);

      const config = loadUserConfig();

      expect(config).toEqual({
        ...defaultConfig,
        ...mockUserConfig
      });
      expect(fs.existsSync).toHaveBeenCalledWith(mockUserConfigPath);
      expect(fs.readJsonSync).toHaveBeenCalledWith(mockUserConfigPath);
    });

    it('should return default config when reading user config fails', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readJsonSync as jest.Mock).mockImplementation(() => {
        throw new Error('Mock error');
      });

      const config = loadUserConfig();

      expect(config).toEqual(defaultConfig);
    });
  });

  describe('saveUserConfig', () => {
    it('should create directory if it does not exist', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(false);
      (fs.readJsonSync as jest.Mock).mockReturnValue({});

      saveUserConfig(mockUserConfig);

      expect(fs.mkdirSync).toHaveBeenCalledWith(
        path.dirname(mockUserConfigPath),
        { recursive: true }
      );
    });

    it('should write merged config to file', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readJsonSync as jest.Mock).mockReturnValue({});

      saveUserConfig(mockUserConfig);

      expect(fs.writeJsonSync).toHaveBeenCalledWith(
        mockUserConfigPath,
        expect.objectContaining(mockUserConfig),
        { spaces: 2 }
      );
    });
  });

  describe('getConfig', () => {
    it('should return config value for given key', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readJsonSync as jest.Mock).mockReturnValue(mockUserConfig);

      const registry = getConfig('registry');

      expect(registry).toEqual(mockUserConfig.registry);
    });
  });

  describe('setConfig', () => {
    it('should save config with given key and value', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readJsonSync as jest.Mock).mockReturnValue({});

      setConfig('registry', mockUserConfig.registry);

      expect(fs.writeJsonSync).toHaveBeenCalledWith(
        mockUserConfigPath,
        expect.objectContaining({ registry: mockUserConfig.registry }),
        { spaces: 2 }
      );
    });
  });

  describe('getRegistry', () => {
    it('should return npm registry when useTaobao is false', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readJsonSync as jest.Mock).mockReturnValue(mockUserConfig);

      const registry = getRegistry(false);

      expect(registry).toBe(mockUserConfig.registry.npm);
    });

    it('should return taobao registry when useTaobao is true', () => {
      (fs.existsSync as jest.Mock).mockReturnValue(true);
      (fs.readJsonSync as jest.Mock).mockReturnValue(mockUserConfig);

      const registry = getRegistry(true);

      expect(registry).toBe(mockUserConfig.registry.taobao);
    });
  });
});
