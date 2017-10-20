
const path = require('path')
const dirs = require('./base/dirs.config.js')
const pages = require('./base/pages.config.js')

const pagesDir = dirs.pagesDir
const routesArr = pages.routes
const scriptArr = pages.scripts

const entryConfig = {}
// const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'

routesArr.forEach((route, index) => {
	entryConfig[route] = path.resolve(pagesDir, scriptArr[index])
})

module.exports = entryConfig