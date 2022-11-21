const db = require('../common/connection');
const username = 'tungba';
const password = 'tungba';
const Example = (example) => {};

Example.getAll = (result) => {
  db.query('SELECT * from example', (err, example) => {
    if (err) {
      console.log('error: ' + err);
      result(err);
      return;
    } else result(example);
  });
};
module.exports = Example;

exports.getAll = (result) => {
  db.query('SELECT * from example', (err, example) => {
    if (err) {
      console.log('error: ' + err);
      result(err);
      return;
    } else result(example);
  });
};

db.query(`SELECT * from example where username = ${username}`);
db.query(`Delete from example where username = ${username}`);
db.query(`INSERT INTO example (username, password) VALUES ('${username}', '${password}')`);
db.query(`UPDATE account SET password=? where username = ${username}`);
