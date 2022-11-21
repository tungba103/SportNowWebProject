var Cart = require('../models/cart');

exports.getAllCart = (req, res) => {
  Cart.getAll((data) => {
    res.send(data);
  });
};
exports.getCartByUsername = (req, res) => {
  Cart.getCart(req.params.username, (data) => {
    res.send(data);
  });
};
exports.getCartItemByUsername = (req, res) => {
  Cart.getCartItem(req.params.username, req.params.idProduct, (data) => {
    res.send(data);
  });
};
exports.deleteCart = (req, res) => {
  Cart.deleteCart(req.params.username, (data) => {
    res.send(data);
  });
};
exports.deleteCartItem = (req, res) => {
  Cart.deleteCartItem(req.params.username, req.params.idProduct, (data) => {
    res.send(data);
  });
};
exports.createCart = (req, res) => {
  var ac = req.body;
  Cart.create(ac, (data) => {
    res.send(data);
  });
};
exports.updateCart = (req, res) => {
  var ac = req.body;
  Cart.update(ac, (data) => {
    res.send(data);
  });
};
