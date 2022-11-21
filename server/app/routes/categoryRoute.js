module.exports = (router) => {
  var CategoryController = require('../controllers/categoryController');
  var CategoryUserController = require('../controllers/CategoryUserController');
  router.get('/category', CategoryController.getAllCategory);
  router.delete('/category/delete/:name', CategoryController.deleteCategory);
  router.post('/category/create', CategoryController.createCategory);

  router.get('/categoryUser', CategoryUserController.getAllCategoryUser);
  router.get('/categoryUser/detail/:username', CategoryUserController.getCategoryUserByUsername);
  router.delete('/categoryUser/delete/:username', CategoryUserController.deleteCategoryUser);
  router.delete('/categoryUser/delete/:username/:cuName', CategoryUserController.deleteCategoryUserItem);
  router.post('/categoryUser/create', CategoryUserController.createCategoryUser);
};
