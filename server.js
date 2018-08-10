
const express = require('express')
// const httpProxy = require('http-proxy')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)
// const apiProxy = httpProxy.createProxyServer()

// Start a webpack-dev-server
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}))

// Enables HMR
app.use(webpackHotMiddleware(compiler))

// Proxy api requests
// app.use("/api/*", function(req, res) {
//   req.url = req.baseUrl
//   apiProxy.web(req, res, {
//     target: {
//       port: 9001,
//       host: "localhost"
//     }
//   })
// })

app.listen(9000, function() {
  console.log('Example app listening on port 9000!\n')
})