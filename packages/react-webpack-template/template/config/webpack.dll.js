const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    react: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].dll.js',
    library: '[name]_[hash]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DllPlugin({
      // 确保更 output.library 一样
      name: '[name]_[hash]',
      path: path.join(__dirname, '../dist', '[name]-manifest.json')
    })
  ]
};
