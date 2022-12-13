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
exports.getAddressByIdAddress = (idAddress, result) => {
  db.query(`SELECT * from address where idAddress = ?`, [idAddress], (err, address) => {
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
exports.deleteAddressByIdAddress = (ac, result) => {
  db.query(`DELETE from address where idAddress = ?`, [ac.idAddress], (err, address) => {
    if (err) console.log('err: ' + err);
    else {
      result(address);
      return;
    }
  });
};

exports.createAddress = (ac, result) => {
  db.query(
    `INSERT INTO address (username, name,phone, province, district, subDistrict, detail) VALUES (?,?,?,?,?,?,?)`,
    [ac.username, ac.name, ac.phone, ac.province, ac.district, ac.subDistrict, ac.detail],
    (err, address) => {
      if (err) console.log('err: ' + err);
      else {
        result(address);
        return;
      }
    },
  );
};

exports.updateAddressByIdAddress = (ac, result) => {
  db.query(
    'UPDATE address SET username=?, name=?,phone=?, province=?, district=?, subDistrict=?, detail=? where idAddress = ?',
    [ac.username, ac.name, ac.phone, ac.province, ac.district, ac.subDistrict, ac.detail, ac.idAddress],
    (err, address) => {
      if (err) console.log('err: ' + err);
      else {
        result(address);
        return;
      }
    },
  );
};
