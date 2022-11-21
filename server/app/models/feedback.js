const db = require('../common/connection');

exports.getAll = (result) => {
  db.query('SELECT * from feedback', (err, feedback) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(feedback);
      return;
    }
  });
};

exports.getByUsername = (username, result) => {
  db.query(`SELECT * from feedback where username = '${username}'`, (err, feedback) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(feedback);
      return;
    }
  });
};

exports.delete = (username, result) => {
  db.query(`DELETE from feedback where username = '${username}'`, (err, feedback) => {
    if (err) console.log('err: ' + err);
    else {
      result(feedback);
      return;
    }
  });
};

exports.create = (ac, result) => {
  db.query(`INSERT INTO feedback (username, content) VALUES ('${ac.username}','${ac.content}')`, (err, feedback) => {
    if (err) console.log('err: ' + err);
    else {
      result(feedback);
      return;
    }
  });
};
