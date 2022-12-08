const db = require('../common/connection');

exports.getAllOrderItem = (result) => {
  db.query('SELECT * from order_item', (err, orderItem) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(orderItem);
      return;
    }
  });
};

exports.getOrderItemByIdOrder = (idOrder, result) => {
  db.query(`SELECT * from order_item where idOrder = '${idOrder}'`, (err, orderItem) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(orderItem);
      return;
    }
  });
};

exports.deleteOrderItemByIdOrder = (ac, result) => {
  db.query(`DELETE from order_item where idOrder = ?`, [ac.idOrder], (err, orderItem) => {
    if (err) console.log('err: ' + err);
    else {
      result(orderItem);
      return;
    }
  });
};
exports.deleteOrderItemByIdOrderAndIdProduct = (ac, result) => {
  db.query(`DELETE from order_item where idOrder = ? AND idProduct= ?`, [ac.idOrder, ac.idProduct], (err, orderItem) => {
    if (err) console.log('err: ' + err);
    else {
      result(orderItem);
      return;
    }
  });
};

exports.createOrderItem = (ac, result) => {
  db.query(`INSERT INTO order_item (idOrder,idProduct,quantity) VALUES ('${ac.idOrder}','${ac.idProduct}','${ac.quantity}')`, (err, orderItem) => {
    if (err) console.log('err: ' + err);
    else {
      result(orderItem);
      return;
    }
  });
};

exports.updateOrderItemQuantity = (ac, result) => {
  db.query('UPDATE order_item SET quantity=? where idOrder = ? AND idProduct =?', [ac.quantity, ac.idOrder, ac.idProduct], (err, orderItem) => {
    if (err) console.log('err: ' + err);
    else {
      result(orderItem);
      return;
    }
  });
};
