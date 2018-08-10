
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const PostcssSmartImpot = require('postcss-smart-import')
const autoprefixer = require('autoprefixer')

const moduleConfig = {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    },
    {
      test: /\.(css|scss)$/,
      exclude: /(node_modules)/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: { minimize: process.env.NODE_ENV === 'production' ? true : false }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [ PostcssSmartImpot, autoprefixer ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      })
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name].[hash:6].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/, 
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: ['img:src'],
          minimize: process.env.NODE_ENV === 'production' ? true : false
        }
      }
    }
  ]
}

module.exports = moduleConfig