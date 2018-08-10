const express = require('express')
const app = express()

app.use(express.static('dist'))

app.listen(9000, () => {
  console.log('App listening at port 9000')
})