const db = require('../common/connection');

exports.getAllAccount = (result) => {
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

exports.getAccountByUsername = (username, result) => {
  db.query(`SELECT * from account where username = ?`, [username], (err, account) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(account);
      return;
    }
  });
};

exports.deleteAccountByUsername = (ac, result) => {
  db.query(`DELETE from account where username = ?`, [ac.username], (err, account) => {
    if (err) console.log('err: ' + err);
    else {
      result(account);
      return;
    }
  });
};

exports.createAccount = (ac, result) => {
  db.query(`INSERT INTO account (username, password) VALUES (?,?)`, [ac.username, ac.password], (err, account) => {
    if (err) console.log('err: ' + err);
    else {
      result(account);
      return;
    }
  });
};

exports.updateAccount = (ac, result) => {
  db.query(
    'UPDATE account SET password=?, name=?,image=?, email=?, phoneNumber=?, gender=?, dob=? where username = ?',
    [ac.password, ac.name, ac.image, ac.email, ac.phoneNumber, ac.gender, ac.dob, ac.username],
    (err, account) => {
      if (err) console.log('err: ' + err);
      else {
        result(account);
        return;
      }
    },
  );
};
