var Category = require('../models/category');
var CategoryUser = require('../models/categoryUser');

// Category
exports.getAllCategory = (req, res) => {
  Category.getAll((data) => {
    res.send(data);
  });
};

exports.deleteCategory = (req, res) => {
  Category.delete(req.params.name, (data) => {
    res.send(data);
  });
};
exports.createCategory = (req, res) => {
  var ac = req.body;
  Category.create(ac, (data) => {
    res.send(data);
  });
};

// Category User
exports.getAllCategoryUser = (req, res) => {
  CategoryUser.getAll((data) => {
    res.send(data);
  });
};
exports.getCategoryUserByUsername = (req, res) => {
  CategoryUser.getByUsername(req.params.username, (data) => {
    res.send(data);
  });
};

exports.deleteCategoryUser = (req, res) => {
  CategoryUser.deleteCategoryUser(req.params.username, (data) => {
    res.send(data);
  });
};
exports.deleteCategoryUserItem = (req, res) => {
  CategoryUser.deleteCategoryUserItem(req.params.username, req.params.cuName, (data) => {
    res.send(data);
  });
};
exports.createCategoryUser = (req, res) => {
  var ac = req.body;
  CategoryUser.create(ac, (data) => {
    res.send(data);
  });
};
