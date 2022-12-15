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
// exports.getOrderByStatus = (status, result) => {
//   db.query(`SELECT * from orderr  where statuss='${status}'`, (err, order) => {
//     if (err) {
//       console.log('err: ' + err);
//       result(null);
//     } else {
//       result(order);
//       return;
//     }
//   });
// };

exports.getOrderByUsername = (username, result) => {
  db.query(`SELECT * from orderr where username = ? order by idOrder DESC`, [username], (err, order) => {
    if (err) {
      console.log('err: ' + err);
      result(null);
    } else {
      result(order);
      return;
    }
  });
};
// exports.getOrderByUsernameAndStatus = (username, status, result) => {
//   db.query(`SELECT * from orderr where username = ? AND statuss =?`, [username, status], (err, order) => {
//     if (err) {
//       console.log('err: ' + err);
//       result(null);
//     } else {
//       result(order);
//       return;
//     }
//   });
// };

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
  db.query(`INSERT INTO orderr (username, orderDate,address,total) VALUES (?,?,?,?)`, [ac.username, ac.orderDate, ac.address, ac.total], (err, order) => {
    if (err) console.log('err: ' + err);
    else {
      result(order);
      return;
    }
  });
};

exports.updateOrderByUsername = (ac, result) => {
  db.query('UPDATE orderr SET orderDate=?, address=? total=? where username = ?', [ac.orderDate, ac.address, ac.username, ac.total], (err, order) => {
    if (err) console.log('err: ' + err);
    else {
      result(order);
      return;
    }
  });
};
