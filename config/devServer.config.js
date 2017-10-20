
const devServerConfig = {
  compress: true,
  contentBase: false,
  historyApiFallback: true,
  inline: true,
  open: true,
  port: 9000,
  proxy: {
    '/api/*': {
      target: 'http://127.0.0.1:9001/db',
      secure: false
    }
  }
}

module.exports = devServerConfig