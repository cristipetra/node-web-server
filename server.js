const express = require('express')

var app = express()


app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  //res.send('Hello express')
  res.send({
    name: "cristian"
  })
})


app.get('/about', function(req, res){
  res.send("about info")
})

app.get('/bad', function(req, res) {
  res.send({
    code: 404,
    errorMessage: "Page not found"
  })
})

app.listen(3000, function() {
  console.log("server is up on port 3000")
});
