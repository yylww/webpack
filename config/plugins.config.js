
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const dirs = require('./base/dirs.config.js')
const pages = require('./base/pages.config.js')

const pagesDir = dirs.pagesDir
const routes = pages.routes
const templates = pages.templates

const pluginsConfig = [
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../')
  }),
  new ExtractTextWebpackPlugin('[name]/style.css')
]

templates.forEach((html, index) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: html,
    template: path.resolve(pagesDir, html),
    chunks: [routes[index]]
  })
  pluginsConfig.push(htmlPlugin)
})

if (process.env.NODE_ENV === 'production') {
  pluginsConfig.push(
    new webpack.optimize.UglifyJsPlugin({
      warnings: false,
      comments: false
    })
  )
}

module.exports = pluginsConfig