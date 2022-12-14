const db = require('../common/connection');

exports.getAllCart = (result) => {
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

exports.getCartByUsername = (username, result) => {
  db.query(`SELECT * from cart where username = ?`, username, (err, cart) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(cart);
      return;
    }
  });
};
exports.getCartByIdCart = (IdCart, result) => {
  db.query(`SELECT * from cart where IdCart = ?`, IdCart, (err, cart) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(cart);
      return;
    }
  });
};

exports.deleteCartByUsername = (ac, result) => {
  db.query(`DELETE from cart where username = ?`, [ac.username], (err, cart) => {
    if (err) console.log('err: ' + err);
    else {
      result(cart);
      return;
    }
  });
};
exports.deleteCartByIdCart = (ac, result) => {
  db.query(`DELETE from cart where idCart = ?`, [ac.idCart], (err, cart) => {
    if (err) console.log('err: ' + err);
    else {
      result(cart);
      return;
    }
  });
};

exports.deleteCartItemByUsernameAndIdProduct = (ac, result) => {
  db.query(`DELETE from cart where username = ? AND idProduct = ?`, [ac.username, ac.idProduct], (err, cart) => {
    if (err) console.log('err: ' + err);
    else {
      result(cart);
      return;
    }
  });
};

exports.createProductToCart = (ac, result) => {
  db.query('SELECT * from cart where username = ? AND idProduct = ?', [ac.username, ac.idProduct], (err, cart) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      if (cart.length > 0) {
        db.query('UPDATE cart SET quantity=?, total=? where username = ? AND idProduct=?', [ac.quantity, ac.total, ac.username, ac.idProduct], (errUpdate, cartUpdate) => {
          if (errUpdate) console.log('errUpdate: ' + errUpdate);
          else {
            result(cartUpdate);
            return;
          }
        });
      } else {
        db.query(`INSERT INTO cart (username, idProduct,quantity,total) VALUES (?,?,?,?)`, [ac.username, ac.idProduct, ac.quantity, ac.total], (errInsert, cartInsert) => {
          if (errInsert) console.log('errInsert: ' + errInsert);
          else {
            result(cartInsert);
            return;
          }
        });
      }
    }
  });
};

exports.updateQuantityByUsernameAndIdProduct = (ac, result) => {
  db.query('UPDATE cart SET quantity=?, total=? where username = ? AND idProduct=?', [ac.quantity, ac.total, ac.username, ac.idProduct], (err, cart) => {
    if (err) console.log('err: ' + err);
    else {
      result(cart);
      return;
    }
  });
};

exports.getTotal = (username, result) => {
  db.query('SELECT SUM(total) as total from sportnow.cart where username = ?', [username], (err, total) => {
    if (err) console.log('err: ' + err);
    else {
      result(total);
      return;
    }
  });
};
