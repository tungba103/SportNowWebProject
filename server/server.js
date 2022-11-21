const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routes/account.route')(app);
require('./app/routes/cart.route')(app);
require('./app/routes/category.route')(app);
require('./app/routes/categoryUser.route')(app);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
