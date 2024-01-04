const express = require('express'),
  server = express(),
  fs = require('fs'),
  orderData = require('./orders');

server.set('port', process.env.PORT || 3000);

server.get('/', (request, response) => {
  response.send('Welcome to our simple online order managing web app!');
});

//Add the /orders code here!
server.get('/orders', (request, response) => {
  response.json(orderData);
});

//Add the /neworder code here!
server.post('/neworder', express.json(), (request, response) => {
  orderData.orders.push(request.body);
  const newOrder = request.body;
  fs.writeFileSync('orders.json', JSON.stringify(orderData));
  response.send('Success');
  console.log('Success');
});
//Add the /update/:id code here!

//Add the /delete/:id code here!

server.listen(3000, () => {
  console.log('Express server started at port 3000');
});
