const path = require('path');
const ROOT_PATH = path.resolve(process.env.PWD);

require('babel-polyfill');

module.exports = {
  name: 'Ringa Hello World',
  entry: {
    app: path.resolve(ROOT_PATH, 'app/src/index.js')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, '../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            compact: false
          }
        }
      }
    ]
  }
};
