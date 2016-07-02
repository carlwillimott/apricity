'use strict';

var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {

  entry: __dirname + '/src/apricity.js',

  devtool: 'source-map',

  output: {
    path: __dirname + '/lib',
    filename: 'apricity.js',
    library: 'Apricity',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['babel-plugin-add-module-exports']
        }
      }
    ]
  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },

  plugins: [
    // new UglifyJsPlugin({ minimize: true })
  ]

};
