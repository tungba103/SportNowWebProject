var Account = require('../models/account');
// var CategoryUser = require('../models/categoryUser');
var Cart = require('../models/cart');

// Account
exports.getAllAccount = (req, res) => {
  Account.getAllAccount((data) => {
    res.send(data);
  });
};
exports.getAccountByUsername = (req, res) => {
  Account.getAccountByUsername(req.params.username, (data) => {
    res.send(data);
  });
};
exports.deleteAccountByUsername = (req, res) => {
  var ac = req.body;
  Account.deleteAccountByUsername(ac, (data) => {
    res.send(data);
  });
  // CategoryUser.deleteCategoryUserByUsername(ac, (data) => {
  //   res.send(data);
  // });
  // Cart.deleteCartByUsername(req.params.username, (data) => {
  //   res.send(data);
  // });
};
exports.createAccount = (req, res) => {
  var ac = req.body;
  Account.createAccount(ac, (data) => {
    res.send(data);
  });
};
exports.updateAccountByUsername = (req, res) => {
  var ac = req.body;
  Account.updateAccountByUsername(ac, (data) => {
    res.send(data);
  });
};

// Category User
exports.getAllCategoryUser = (req, res) => {
  CategoryUser.getAllCategoryUser((data) => {
    res.send(data);
  });
};
exports.getCategoryUserByUsername = (req, res) => {
  CategoryUser.getCategoryUserByUsername(req.params.username, (data) => {
    res.send(data);
  });
};
exports.deleteCategoryUserByUsername = (req, res) => {
  var ac = req.body;
  CategoryUser.deleteCategoryUserByUsername(ac, (data) => {
    res.send(data);
  });
};
exports.deleteCategoryUserItemByUsernameAndCuName = (req, res) => {
  var ac = req.body;
  CategoryUser.deleteCategoryUserItemByUsernameAndCuName(ac, (data) => {
    res.send(data);
  });
};
exports.createCategoryUserItem = (req, res) => {
  var ac = req.body;
  CategoryUser.createCategoryUserItem(ac, (data) => {
    res.send(data);
  });
};

// Cart
exports.getAllCart = (req, res) => {
  Cart.getAllCart((data) => {
    res.send(data);
  });
};
exports.getCartByUsername = (req, res) => {
  Cart.getCartByUsername(req.params.username, (data) => {
    res.send(data);
  });
};
exports.getCartByIdCart = (req, res) => {
  Cart.getCartByIdCart(req.params.id_cart, (data) => {
    res.send(data);
  });
};
exports.deleteCartByUsername = (req, res) => {
  var ac = req.body;
  Cart.deleteCartByUsername(ac, (data) => {
    res.send(data);
  });
};
exports.deleteCartByIdCart = (req, res) => {
  var ac = req.body;
  Cart.deleteCartByIdCart(ac, (data) => {
    res.send(data);
  });
};
exports.deleteCartItemByUsernameAndIdProduct = (req, res) => {
  var ac = req.body;
  Cart.deleteCartItemByUsernameAndIdProduct(ac, (data) => {
    res.send(data);
  });
};
exports.createCart = (req, res) => {
  var ac = req.body;
  Cart.createProductToCart(ac, (data) => {
    res.send(data);
  });
};
exports.updateQuantityByUsernameAndIdProduct = (req, res) => {
  var ac = req.body;
  Cart.updateQuantityByUsernameAndIdProduct(ac, (data) => {
    res.send(data);
  });
};
exports.getTotalOnCart = (req, res) => {
  Cart.getTotal(req.params.username, (data) => {
    res.send(data);
  });
};
