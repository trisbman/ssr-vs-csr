const express = require('express')
const ejs = require('ejs')
const port = process.env.PORT || 3000
const fs = require("fs")
const cors = require("cors")

const app = express()
app.use(express.static('public'))
app.use(cors())

// API
app.get('/asiancountries', allItems)

function allItems(request, response) {
  response.send(items)
}

app.get('/asiancountries/:asiancountry/', search);

function search(request, response) {
  let term = request.params.asiancountry;
  let reply = null;
  term = term.charAt(0).toUpperCase() + term.slice(1).toLowerCase();

  if (items[term])
    reply = items[term]
  else
    reply = { status: "Not Found" }

  response.send(reply);
}

// View
app.get('/', function (req, res) {
  let data = fs.readFileSync('asian-countries.json')
  let items = JSON.parse(data)
  ejs.renderFile('views/home.ejs', { items }, {}, (err, template) => {
    if (err) throw err
    res.end(template)
  })
})

app.listen(port, function (err) {
  if (err) throw err
  console.log('Server running on port ' + port)
})