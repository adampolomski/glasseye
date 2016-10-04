import ProductRepository from './src/productRepository';

var express = require('express');
var app = express();
var repo = new ProductRepository();

app.set('port', (process.env.PORT || 5000));

app.get('/products', function(request, response) {
  repo.list().then(data => { response.send(data); }).catch(() => { response.send('errori');});
});

app.get('/products/:productId', (request, response) => {
  response.send('Hello products!' + request.params.productId);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
