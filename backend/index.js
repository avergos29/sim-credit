const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const data = require('./data.json');
const fs = require('fs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',  (req, res) => {
  res.send(data);
})

app.post('/', (req, res) => {
  console.log("request:", req.body);
  data.push(req.body);
  console.log(data);
  fs.writeFile("data.json", JSON.stringify(data), function(err) {
      if(err) {
          return console.log(err);
      }
  });
  res.end('ok');

})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
