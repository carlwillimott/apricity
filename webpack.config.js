'use strict';

var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {

  entry: __dirname + '/src/apricity.js',

  output: {
    path: __dirname + '/lib',
    filename: 'apricity.min.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  plugins: [
    new UglifyJsPlugin({ minimize: true })
  ]

};
