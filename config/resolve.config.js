
const path = require('path')

const resolveConfig = {
  extensions: ['.js', '.jsx'],
  alias: {
    node_modules: path.join(__dirname, '../node_modules/'),
    pages: path.join(__dirname, '../src/pages/'),
    public: path.join(__dirname, '../src/public/') 
  }
}

module.exports = resolveConfig