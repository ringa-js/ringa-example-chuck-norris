const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(process.env.PWD);
const baseConfig = require('./webpack.config.base.js');

module.exports = Object.assign({
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.join(ROOT_PATH, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: "0.0.0.0",
    port: 8080,
    disableHostCheck: true
  },
  plugins: [
    new webpack.DefinePlugin({__DEV__: true}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      title: 'iControl',
      template: path.resolve(ROOT_PATH, 'app/src/templates/index.ejs'),
      filename: 'index.html',
      inject: false,
      cache: true
    })
  ]
}, baseConfig);
