
const path = require('path')

const outputConfig = {
  filename: 'scripts/[name].[hash:6].js',
  path: path.resolve(__dirname, '../dist'),
  publicPath: '/'
}

module.exports = outputConfig