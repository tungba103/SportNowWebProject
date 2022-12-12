const express = require('express');
const app = express();
// const path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
require('./app/routes/accountRoute')(app);
require('./app/routes/addressRoute')(app);
require('./app/routes/feedbackRoute')(app);
require('./app/routes/orderRoute')(app);
require('./app/routes/productRoute')(app);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
