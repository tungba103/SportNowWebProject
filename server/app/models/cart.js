const db = require('../common/connection');

exports.getAll = (result) => {
  db.query('SELECT * from cart', (err, cart) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(cart);
      return;
    }
  });
};

exports.getCart = (username, result) => {
  db.query(`SELECT * from cart where username = '${username}'`, (err, cart) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(cart);
      return;
    }
  });
};
exports.getCartItem = (username, idProduct, result) => {
  db.query(`SELECT * from cart where username = '${username}' AND idProduct = '${idProduct}'`, (err, cart) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(cart);
      return;
    }
  });
};

exports.deleteCart = (username, result) => {
  db.query(`DELETE from cart where username = '${username}'`, (err, cart) => {
    if (err) console.log('err: ' + err);
    else {
      result(cart);
      return;
    }
  });
};

exports.deleteCartItem = (username, idProduct, result) => {
  db.query(`DELETE from cart where username = '${username}' AND idProduct = '${idProduct}'`, (err, cart) => {
    if (err) console.log('err: ' + err);
    else {
      result(cart);
      return;
    }
  });
};

exports.create = (ac, result) => {
  db.query(`INSERT INTO cart (username, idProduct,quantity) VALUES ('${ac.username}','${ac.idProduct}','${ac.quantity}')`, (err, cart) => {
    if (err) console.log('err: ' + err);
    else {
      result(cart);
      return;
    }
  });
};

exports.update = (ac, result) => {
  db.query('UPDATE cart SET idProduct=?,quantity=? where username = ?', [ac.idProduct, ac.quantity, ac.username], (err, cart) => {
    if (err) console.log('err: ' + err);
    else {
      result(cart);
      return;
    }
  });
};
