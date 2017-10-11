
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const moduleConfig = {
  rules: [
    {
      test: /\.js|.jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
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
            options: { minimize: process.env.NODE_ENV === 'dev' ? false : true }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('postcss-smart-import'),
                require('autoprefixer')
              ]
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
            name: 'images/[name].[ext]'
          }
        }
      ]
    }
  ]
}

module.exports = moduleConfig