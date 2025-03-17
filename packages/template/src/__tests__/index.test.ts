import pkg, { version } from '../index';

describe('Template Package', () => {
  it('should export version', () => {
    expect(version).toBe('0.1.0');
  });

  it('should export default object with name and version', () => {
    expect(pkg.name).toBe('template');
    expect(pkg.version).toBe('0.1.0');
  });
});
