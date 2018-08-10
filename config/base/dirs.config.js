
const path = require('path')
const dirs = {}

dirs.rootDir = path.resolve(__dirname, '../../')           // 项目根目录
dirs.srcRootDir = path.resolve(dirs.rootDir, './src')      // 项目业务代码根目录
dirs.dllDir = path.resolve(dirs.srcRootDir, './dll')       // 存放由各种不常改变的js/css打包而来的dll
dirs.pagesDir = path.resolve(dirs.srcRootDir, './pages')   // 存放各个页面独有的部分，如入口文件，该页面css,html等 

module.exports = dirs

