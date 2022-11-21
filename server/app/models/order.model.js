const db = require('../common/connection');

exports.getAll = (result) => {
  db.query('SELECT * from account', (err, account) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(account);
      return;
    }
  });
};

exports.getByUsername = (username, result) => {
  db.query(`SELECT * from account where username = '${username}'`, (err, account) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(account);
      return;
    }
  });
};

exports.delete = (username, result) => {
  db.query(`DELETE from account where username = '${username}'`, (err, account) => {
    if (err) console.log('err: ' + err);
    else {
      result(account);
      return;
    }
  });
};

exports.create = (ac, result) => {
  db.query(`INSERT INTO account (username, password,name) VALUES ('${ac.username}','${ac.password}','${ac.name}')`, (err, account) => {
    if (err) console.log('err: ' + err);
    else {
      result(account);
      return;
    }
  });
};

exports.update = (ac, result) => {
  db.query(
    'UPDATE account SET password=?, name=?, email=?, phoneNumber=?, gender=?, dob=? where username = ?',
    [ac.password, ac.name, ac.email, ac.phoneNumber, ac.gender, ac.dob, ac.username],
    (err, account) => {
      if (err) console.log('err: ' + err);
      else {
        result(account);
        return;
      }
    },
  );
};
