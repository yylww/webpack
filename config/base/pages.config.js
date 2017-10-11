
// 获取项目中所有页面入口文件所在的目录，以及所有入口文件js, 模板文件html

const path = require('path')
const glob = require('glob')

// 所有页面所在的目录
const pageDir = path.join(__dirname, '../../src/pages')

const options = {
  cwd: pageDir, // 在pages目录下查找
  sync: true,   // 同步
}
 
/* 导出一个对象，本例中为 
 *  { 
 *    routes: ['index', 'users/login', 'users/register'], 
 *    scripts: ['index/index.js', 'users/login/login.js', 'users/register/register.js']
 *    templates: ['index/index.html', 'users/login/login.html', 'users/register/register.html']
 *  }
 */

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

console.log(pages)

module.exports = pages  