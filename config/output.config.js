
const path = require('path')

const outputConfig = {
  filename: '[name]/bundle.[chunkhash:6].js',
  path: path.resolve(__dirname, '../dist'),
  publicPath: '/'
}

module.exports = outputConfig