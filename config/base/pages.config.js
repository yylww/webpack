
// 获取项目中所有页面入口文件所在的目录，以及所有入口文件js, 模板文件html

const path = require('path')
const glob = require('glob')

// 所有页面所在的目录
const pageDir = path.join(__dirname, '../../src/pages')

const options = {
  cwd: pageDir, // 在pages目录下查找
  sync: true,   // 同步
}

const pages = {
  routes: [],
  scripts: new glob.Glob('**/*.js', options).found,
  templates: new glob.Glob('**/*.html', options).found
}

pages.scripts.forEach((item) => {
  let route = item.split('.')[0]
  let pos = route.lastIndexOf('/')
  route = route.slice(0, pos)
  pages.routes.push(route)
})

module.exports = pages  