import 'public/components/alert.js'

console.log('index111')

fetch('/api/posts').then((res) => {
  return res.json()
}).then((res) => {
  console.log(res)
})
