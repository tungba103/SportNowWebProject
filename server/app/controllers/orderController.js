var Order = require('../models/order');
var OrderItem = require('../models/orderItem');

exports.getAllOrder = (req, res) => {
  Order.getAllOrder((data) => {
    res.send(data);
  });
};
exports.getOrderByUsername = (req, res) => {
  Order.getOrderByUsername(req.params.username, (data) => {
    res.send(data);
  });
};
// exports.getOrderByStatus = (req, res) => {
//   Order.getOrderByStatus(req.params.status, (data) => {
//     res.send(data);
//   });
// };
// exports.getOrderByUsernameAndStatus = (req, res) => {
//   Order.getOrderByUsernameAndStatus(req.params.username, req.params.status, (data) => {
//     res.send(data);
//   });
// };
exports.deleteOrderByIdOrder = (req, res) => {
  Order.deleteOrderByIdOrder(req.body, (data) => {
    res.send(data);
  });
};
exports.createOrder = (req, res) => {
  var ac = req.body;
  Order.createOrder(ac, (data) => {
    res.send(data);
  });
};
exports.updateOrderByUsername = (req, res) => {
  var ac = req.body;
  Order.updateOrderByUsername(ac, (data) => {
    res.send(data);
  });
};

// Order Item
exports.getAllOrderItem = (req, res) => {
  OrderItem.getAllOrderItem((data) => {
    res.send(data);
  });
};
exports.getOrderItemByIdOrder = (req, res) => {
  OrderItem.getOrderItemByIdOrder(req.params.id_order, (data) => {
    res.send(data);
  });
};
exports.deleteOrderItemByIdOrder = (req, res) => {
  OrderItem.deleteOrderItemByIdOrder(req.body, (data) => {
    res.send(data);
  });
};
exports.deleteOrderItemByIdOrderAndIdProduct = (req, res) => {
  OrderItem.deleteOrderItemByIdOrderAndIdProduct(req.body, (data) => {
    res.send(data);
  });
};
exports.createOrderItem = (req, res) => {
  var ac = req.body;
  OrderItem.createOrderItem(ac, (data) => {
    res.send(data);
  });
};
exports.updateOrderItemQuantityByIdOrderAndIdProduct = (req, res) => {
  var ac = req.body;
  OrderItem.updateOrderItemQuantityByIdOrderAndIdProduct(ac, (data) => {
    res.send(data);
  });
};
