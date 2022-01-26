const express = require('express')
const ejs = require('ejs')
const port = process.env.PORT || 3000
const fs = require("fs")
let data = fs.readFileSync('asian-countries.json')
let items = JSON.parse(data);

const app = express()
app.use(express.static('public'))

app.get('/', function (req, res) {
  ejs.renderFile('views/home.ejs', { items }, {}, (err, template) => {
    if (err) throw err
    res.end(template)
  })
})

app.listen(port, function (err) {
  if (err) throw err
  console.log('Server running on port ' + port)
})