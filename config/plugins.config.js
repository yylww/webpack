
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let pluginsConfig = [
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../')
  }),
  new ExtractTextWebpackPlugin('[name]/index.css'),
  new CopyWebpackPlugin([
    { from: './src/libs', to: 'libs' },       // 把第三方插件复制到dist目录
    { from: './src/images', to: 'images' }    // 把公共图片复制到dist目录
  ])
];

if (process.env.NODE_ENV === 'production') {
  pluginsConfig.push(
    new webpack.optimize.UglifyJsPlugin({
      warnings: false,
      comments: false
    })
  )
}

module.exports = pluginsConfig;