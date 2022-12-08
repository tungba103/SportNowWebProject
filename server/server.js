const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routes/accountRoute')(app);
require('./app/routes/feedbackRoute')(app);
require('./app/routes/orderRoute')(app);
require('./app/routes/productRoute')(app);
require('./app/routes/storageHistoryRoute')(app);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
