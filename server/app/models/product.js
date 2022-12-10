const db = require('../common/connection');

exports.getAllProduct = (result) => {
  db.query('SELECT * from product', (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};

exports.getAllShirtProduct = (result) => {
  db.query('SELECT * from product', (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getAllShortProduct = (result) => {
  db.query('SELECT * from product', (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getAllSocksProduct = (result) => {
  db.query('SELECT * from product', (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};
exports.getAllBallProduct = (result) => {
  db.query('SELECT * from product', (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};

exports.getProductByIdProduct = (idProduct, result) => {
  db.query(`SELECT * from product where idProduct = '${idProduct}'`, (err, product) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(product);
      return;
    }
  });
};

exports.deleteProductByIdProduct = (ac, result) => {
  db.query(`DELETE from product where idProduct = '${ac.idProduct}'`, (err, product) => {
    if (err) console.log('err: ' + err);
    else {
      result(product);
      return;
    }
  });
};

exports.createProduct = (ac, result) => {
  db.query(`INSERT INTO product (title,price,image,description,storage,sold) VALUES (?,?,?,?,?,?)`, [ac.title, ac.price, ac.image, ac.description, ac.storage, ac.sold], (err, product) => {
    if (err) console.log('err: ' + err);
    else {
      result(product);
      return;
    }
  });
};

exports.updateProductInfoByIdProduct = (ac, result) => {
  db.query('UPDATE product SET title=?, price=?,image=?,description=? where idProduct = ?', [ac.title, ac.price, ac.image, ac.description, ac.idProduct], (err, product) => {
    if (err) console.log('err: ' + err);
    else {
      result(product);
      return;
    }
  });
};
exports.updateProductStorageByIdProduct = (ac, result) => {
  db.query('UPDATE product SET storage=?, sold=? where idProduct = ?', [ac.storage, ac.sold, ac.idProduct], (err, product) => {
    if (err) console.log('err: ' + err);
    else {
      result(product);
      return;
    }
  });
};
