var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'TungBa10312-',
  database: 'sportnow',
});

connection.connect((err, res) => {
  if (err) console.log('Fail to connect MySQL server');
  else console.log('Success to connect MySQL server');
});

module.exports = connection;
