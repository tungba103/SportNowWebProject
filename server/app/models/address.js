const db = require('../common/connection');

exports.getAllAddress = (result) => {
  db.query('SELECT * from address', (err, address) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(address);
      return;
    }
  });
};

exports.getAddressByUsername = (username, result) => {
  db.query(`SELECT * from address where username = ?`, [username], (err, address) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(address);
      return;
    }
  });
};

exports.deleteAddressByUsername = (ac, result) => {
  db.query(`DELETE from address where username = ?`, [ac.username], (err, address) => {
    if (err) console.log('err: ' + err);
    else {
      result(address);
      return;
    }
  });
};
exports.deleteAddressByUsername = (ac, result) => {
  db.query(`DELETE from address where username = ?`, [ac.username], (err, address) => {
    if (err) console.log('err: ' + err);
    else {
      result(address);
      return;
    }
  });
};

exports.createAddress = (ac, result) => {
  db.query(`INSERT INTO address (username, password) VALUES (?,?)`, [ac.username, ac.password], (err, address) => {
    if (err) console.log('err: ' + err);
    else {
      result(address);
      return;
    }
  });
};

exports.updateAddress = (ac, result) => {
  db.query(
    'UPDATE address SET password=?, name=?,image=?, email=?, phoneNumber=?, gender=?, dob=? where username = ?',
    [ac.password, ac.name, ac.image, ac.email, ac.phoneNumber, ac.gender, ac.dob, ac.username],
    (err, address) => {
      if (err) console.log('err: ' + err);
      else {
        result(address);
        return;
      }
    },
  );
};
