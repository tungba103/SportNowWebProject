const db = require('../common/connection');

exports.getAll = (result) => {
  db.query('SELECT * from category', (err, category) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(category);
      return;
    }
  });
};

exports.delete = (name, result) => {
  db.query(`DELETE from category where cName = '${name}'`, (err, category) => {
    if (err) console.log('err: ' + err);
    else {
      result(category);
      return;
    }
  });
};

exports.create = (ac, result) => {
  db.query(`INSERT INTO category (Cname) VALUES ('${ac.cName}')`, (err, category) => {
    if (err) console.log('err: ' + err);
    else {
      result(category);
      return;
    }
  });
};
