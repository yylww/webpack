
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dirs = require('./base/dirs.config.js')
const pages = require('./base/pages.config.js')

const pagesDir = dirs.pagesDir
const routes = pages.routes
const templates = pages.templates

const pluginsConfig = [
  new webpack.HotModuleReplacementPlugin(),
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../')
  }),
  new ExtractTextWebpackPlugin('styles/[name].[hash:6].css')
]

templates.forEach((html, index) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: `html/${routes[index]}.html`,
    template: path.resolve(pagesDir, html),
    chunks: ['webpack-runtime', 'commons', routes[index]]
  })
  pluginsConfig.push(htmlPlugin)
})

module.exports = pluginsConfig