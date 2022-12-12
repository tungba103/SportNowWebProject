module.exports = (router) => {
  var AccountController = require('../controllers/accountController');
  router.get('/api/account', AccountController.getAllAccount);
  router.get('/api/account/:username', AccountController.getAccountByUsername);
  router.delete('/api/account/delete_by_username', AccountController.deleteAccountByUsername);
  router.post('/api/account/create', AccountController.createAccount);
  router.put('/api/account/update_by_username', AccountController.updateAccountByUsername);

  router.get('/api/category_user', AccountController.getAllCategoryUser);
  router.get('/api/category_user/:username', AccountController.getCategoryUserByUsername);
  router.delete('/api/category_user/delete_by_username', AccountController.deleteCategoryUserByUsername);
  router.delete('/api/category_user/delete_by_username_and_cu_name', AccountController.deleteCategoryUserItemByUsernameAndCuName);
  router.post('/api/category_user/create', AccountController.createCategoryUserItem);

  router.get('/api/cart', AccountController.getAllCart);
  router.get('/api/cart/:username', AccountController.getCartByUsername);
  router.get('/api/cart/:id_cart', AccountController.getCartByIdCart);
  router.delete('/api/cart/delete_by_username', AccountController.deleteCartByUsername);
  router.delete('/api/cart/delete_by_id_cart', AccountController.deleteCartByIdCart);
  router.delete('/api/cart/delete_by_username_and_id_product', AccountController.deleteCartItemByUsernameAndIdProduct);
  router.post('/api/cart/create', AccountController.createCart);
  router.put('/api/cart/update_by_username_and_id_product', AccountController.updateQuantityByUsernameAndIdProduct);
};
