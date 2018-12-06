'use strict';
const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');


const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env');

const webpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  module: {

  },
  devtool: false,
  optimization: {
    minimize: false
  },
  output: {
    path: config.build.dist,
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
  ]
});
module.exports = webpackConfig;
