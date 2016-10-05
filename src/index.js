import ProductRepository from './productRepository';

var express = require('express');
var app = express();
var repo = new ProductRepository();

app.get('/products', function(request, response) {
  repo.list().then(data => { response.send(data); }).catch(() => { response.send('errori');});
});

app.get('/products/:productId', (request, response) => {
  response.send('Hello products!' + request.params.productId);
});

module.exports = app;