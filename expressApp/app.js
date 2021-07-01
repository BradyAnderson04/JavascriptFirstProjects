var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fetch = require('node-fetch')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var https = require('https');
var url = require('url');
var querystring = require('querystring');
var testAPIRouter = require("./routes/testAPI");
var cors = require("cors");

var app = express();

app.set('view engine', 'jade');

app.use(cors());

app.get('/products/:search', async function (req, res) {
  data = [];
  for(i=0; i< 20 ; i++){
    res.header("Content-Type",'application/json');
    searchParameters = req.params.search;
    const response = await fetch('https://api.wegmans.io/products/search?query='+searchParameters+'&api-version=2018-10-18&subscription-key=65acb501589d4116859501e7bb190443')
    .then()
    .catch((err) => {res.status(200); res.send("Nothing matches your search");});
    products = await response.json();
    if(Boolean(products['results'][i]['sku'])){
    pNum = products['results'][i]['sku']
    }
    const price = await fetch('https://api.wegmans.io/products/'+pNum+'/prices?api-version=2018-10-18&subscription-key=65acb501589d4116859501e7bb190443')
    .then()
    .catch((err) => {res.status(200); res.send("Nothing matches your search");});
    prices = await price.json();
    console.log((price) !== 'undefined')
    try{
    if(typeof(price) != "undefined"){
      console.log(prices['stores'][i]['price'])
      value = { item_name : products['results'][i]['name'], cost: prices['stores'][i]['price']};
      data.push(value)
    }
    }catch(e){
      console.log("undefined")
    }
  }
  res.status(200)
  res.send(data)
  console.log('Out of loop')
})


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use("/testAPI", testAPIRouter);
app.use(cors())

module.exports = app;
