
const path = require('path')

const resolveConfig = {
  extensions: ['.js', '.jsx'],
  alias: {
    node_modules: path.join(__dirname, '../node_modules/'),
    components: path.join(__dirname, '../src/components/'),
    images: path.join(__dirname, '../src/images/'),
    pages: path.join(__dirname, '../src/pages/'),
    styles: path.join(__dirname, '../src/styles/') 
  }
}

module.exports = resolveConfig