var Product = require('../models/product');
var ProductCategory = require('../models/categoryProduct');

// Product
exports.getAllProduct = (req, res) => {
  Product.getAllProduct((data) => {
    res.send(data);
  });
};
exports.getProductByIdProduct = (req, res) => {
  Product.getProductByIdProduct(req.params.id_product, (data) => {
    res.send(data);
  });
};
exports.deleteProductByIdProduct = (req, res) => {
  Product.deleteProductByIdProduct(req.body, (data) => {
    res.send(data);
  });
};
exports.createProduct = (req, res) => {
  var ac = req.body;
  Product.createProduct(ac, (data) => {
    res.send(data);
  });
};
exports.updateProductInfo = (req, res) => {
  var ac = req.body;
  Product.updateProductInfo(ac, (data) => {
    res.send(data);
  });
};
exports.updateProductStorage = (req, res) => {
  var ac = req.body;
  Product.updateProductStorage(ac, (data) => {
    res.send(data);
  });
};

// Category
exports.getAllCategoryProduct = (req, res) => {
  ProductCategory.getAllCategoryProduct((data) => {
    res.send(data);
  });
};

exports.getCategoryProductByIdProduct = (req, res) => {
  ProductCategory.getCategoryProductByIdProduct(req.params.id_product, (data) => {
    res.send(data);
  });
};

exports.deleteCategoryProductByCName = (req, res) => {
  ProductCategory.deleteCategoryProductByCName(req.body, (data) => {
    res.send(data);
  });
};
exports.deleteCategoryProductByIdProduct = (req, res) => {
  ProductCategory.deleteCategoryProductByIdProduct(req.body, (data) => {
    res.send(data);
  });
};
exports.createCategoryProduct = (req, res) => {
  var ac = req.body;
  ProductCategory.createCategoryProduct(ac, (data) => {
    res.send(data);
  });
};
