import ChannelRepository from './src/channelRepository';

var express = require('express');
var app = express();
var repo = new ChannelRepository();

app.set('port', (process.env.PORT || 5000));

app.get('/channels', function(request, response) {
  repo.list().then(data => { response.send(data); }).catch(() => { response.send('errori');});
});

app.get('/channels/:channelId', (request, response) => {
  response.send('Hello channels!' + request.params.channelId);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
