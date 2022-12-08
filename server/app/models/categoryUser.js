const db = require('../common/connection');

exports.getAllCategoryUser = (result) => {
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

exports.getCategoryUserByUsername = (username, result) => {
  db.query(`SELECT * from category_user where username = ?`, [username], (err, categoryUser) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(categoryUser);
      return;
    }
  });
};

exports.deleteCategoryUserByUsername = (ac, result) => {
  db.query(`DELETE from category_user where username = ?`, [ac.username], (err, categoryUser) => {
    if (err) console.log('err: ' + err);
    else {
      result(categoryUser);
      return;
    }
  });
};
exports.deleteCategoryUserItem = (ac, result) => {
  db.query(`DELETE from category_user where username = ? AND cuName = ?`, [ac.username, ac.cuName], (err, categoryUser) => {
    if (err) console.log('err: ' + err);
    else {
      result(categoryUser);
      return;
    }
  });
};

exports.createCategoryUserItem = (ac, result) => {
  db.query(`INSERT INTO category_user(username,cuName) VALUES (?,?)`, [ac.username, ac.cuName], (err, categoryUser) => {
    if (err) console.log('err: ' + err);
    else {
      result(categoryUser);
      return;
    }
  });
};
