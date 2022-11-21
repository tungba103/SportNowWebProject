const db = require('../common/connection');

exports.getAll = (result) => {
  db.query('SELECT * from category_user', (err, categoryUser) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(categoryUser);
      return;
    }
  });
};

exports.getByUsername = (username, result) => {
  db.query(`SELECT * from category_user where username = '${username}'`, (err, categoryUser) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(categoryUser);
      return;
    }
  });
};

exports.deleteCategoryUser = (username, result) => {
  db.query(`DELETE from category_user where username = '${username}'`, (err, categoryUser) => {
    if (err) console.log('err: ' + err);
    else {
      result(categoryUser);
      return;
    }
  });
};
exports.deleteCategoryUserItem = (username, cuName, result) => {
  db.query(`DELETE from category_user where username = '${username}' AND cuName = '${cuName}'`, (err, categoryUser) => {
    if (err) console.log('err: ' + err);
    else {
      result(categoryUser);
      return;
    }
  });
};

exports.create = (ac, result) => {
  db.query(`INSERT INTO category_user (username,cuName) VALUES ('${ac.username}','${ac.cuName}')`, (err, categoryUser) => {
    if (err) console.log('err: ' + err);
    else {
      result(categoryUser);
      return;
    }
  });
};
