const db = require('../common/connection');

exports.getAllOrder = (result) => {
  db.query('SELECT * from orderr', (err, order) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(order);
      return;
    }
  });
};

exports.getOrderByUsername = (username, result) => {
  db.query(`SELECT * from orderr where username = ?`, [username], (err, order) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(order);
      return;
    }
  });
};

exports.deleteOrderByIdOrder = (ac, result) => {
  db.query(`DELETE from orderr where idOrder = ?`, [ac.idOrder], (err, order) => {
    if (err) console.log('err: ' + err);
    else {
      result(order);
      return;
    }
  });
};
// exports.deleteOrderByUsername = (ac, result) => {
//   db.query(`DELETE from orderr where username = ?`, [ac.username], (err, order) => {
//     if (err) console.log('err: ' + err);
//     else {
//       result(order);
//       return;
//     }
//   });
// };

exports.createOrder = (ac, result) => {
  db.query(`INSERT INTO order (username, orderDate,status) VALUES (?,?,?)`, [ac.username, ac.orderDate, ac.status], (err, order) => {
    if (err) console.log('err: ' + err);
    else {
      result(order);
      return;
    }
  });
};

exports.updateOrderByUsername = (ac, result) => {
  db.query('UPDATE order SET orderDate=?, status=? where username = ?', [ac.orderDate, ac.status, ac.username], (err, order) => {
    if (err) console.log('err: ' + err);
    else {
      result(order);
      return;
    }
  });
};
