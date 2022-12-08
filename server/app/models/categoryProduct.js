const db = require('../common/connection');

exports.getAllCategoryProduct = (result) => {
  db.query('SELECT * from category_product', (err, category) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(category);
      return;
    }
  });
};

exports.getCategoryProductByIdProduct = (idProduct, result) => {
  db.query(`SELECT * from category_product where idProduct = ?`, [idProduct], (err, category) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(category);
      return;
    }
  });
};

exports.deleteCategoryProductByCName = (ac, result) => {
  db.query(`DELETE from category_product where cName = ?`, [ac.cName], (err, category) => {
    if (err) console.log('err: ' + err);
    else {
      result(category);
      return;
    }
  });
};
exports.deleteCategoryProductByIdProduct = (ac, result) => {
  db.query(`DELETE from category_product where idProduct = ?`, [ac.idProduct], (err, category) => {
    if (err) console.log('err: ' + err);
    else {
      result(category);
      return;
    }
  });
};

exports.createCategoryProduct = (ac, result) => {
  db.query(`INSERT INTO category_product (idProduct,Cname) VALUES (?,?)`, [ac.idProduct, ac.cName], (err, category) => {
    if (err) console.log('err: ' + err);
    else {
      result(category);
      return;
    }
  });
};
