var Product = require('../models/product');

// Product
exports.getAllProduct = (req, res) => {
  Product.getAllProduct((data) => {
    res.send(data);
  });
};

// Filter
exports.getProductByType = (req, res) => {
  Product.getProductByType(req.params.type, (data) => {
    res.send(data);
  });
};
exports.getProductByPriceRange = (req, res) => {
  Product.getProductByPriceRange(req.params.price_from, req.params.price_to, (data) => {
    res.send(data);
  });
};
exports.getProductByTypeAndPriceRange = (req, res) => {
  Product.getProductByTypeAndPriceRange(req.params.type, req.params.price_from, req.params.price_to, (data) => {
    res.send(data);
  });
};
exports.getProductSorted = (req, res) => {
  Product.getProductSorted(req.params.value, req.params.order_type, (data) => {
    res.send(data);
  });
};
exports.getProductSortedByType = (req, res) => {
  Product.getProductSortedByType(req.params.type, req.params.value, req.params.order_type, (data) => {
    res.send(data);
  });
};
exports.getProductSortedByPriceRange = (req, res) => {
  Product.getProductSortedByPriceRange(req.params.price_from, req.params.price_to, req.params.value, req.params.order_type, (data) => {
    res.send(data);
  });
};
exports.getProductSortedByTypeAndPriceRange = (req, res) => {
  Product.getProductSortedByTypeAndPriceRange(req.params.type, req.params.price_from, req.params.price_to, req.params.value, req.params.order_type, (data) => {
    res.send(data);
  });
};
// Search
exports.getProductSearch = (req, res) => {
  Product.getProductByType(req.params.search, (data) => {
    res.send(data);
  });
};
exports.getProductSearchByType = (req, res) => {
  Product.getProductByType(req.params.search, req.params.type, (data) => {
    res.send(data);
  });
};
exports.getProductSearchByPriceRange = (req, res) => {
  Product.getProductByPriceRange(req.params.search, req.params.price_from, req.params.price_to, (data) => {
    res.send(data);
  });
};
exports.getProductSearchByTypeAndPriceRange = (req, res) => {
  Product.getProductByTypeAndPriceRange(req.params.search, req.params.type, req.params.price_from, req.params.price_to, (data) => {
    res.send(data);
  });
};
exports.getProductSearchSorted = (req, res) => {
  Product.getProductSorted(req.params.search, req.params.value, req.params.order_type, (data) => {
    res.send(data);
  });
};
exports.getProductSearchSortedByType = (req, res) => {
  Product.getProductSortedByType(req.params.search, req.params.type, req.params.value, req.params.order_type, (data) => {
    res.send(data);
  });
};
exports.getProductSearchSortedByPriceRange = (req, res) => {
  Product.getProductSortedByPriceRange(req.params.search, req.params.price_from, req.params.price_to, req.params.value, req.params.order_type, (data) => {
    res.send(data);
  });
};
exports.getProductSearchSortedByTypeAndPriceRange = (req, res) => {
  Product.getProductSortedByTypeAndPriceRange(req.params.search, req.params.type, req.params.price_from, req.params.price_to, req.params.value, req.params.order_type, (data) => {
    res.send(data);
  });
};

// CRUD
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
exports.updateProductInfoByIdProduct = (req, res) => {
  var ac = req.body;
  Product.updateProductInfoByIdProduct(ac, (data) => {
    res.send(data);
  });
};
exports.updateProductStorageByIdProduct = (req, res) => {
  var ac = req.body;
  Product.updateProductStorageByIdProduct(ac, (data) => {
    res.send(data);
  });
};
