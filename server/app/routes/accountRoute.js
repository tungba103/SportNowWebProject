module.exports = (router) => {
  var AccountController = require('../controllers/accountController');
  router.get('/account', AccountController.getAllAccount);
  router.get('/account/:username', AccountController.getAccountByUsername);
  router.delete('/account/delete_by_username', AccountController.deleteAccountByUsername);
  router.post('/account/create', AccountController.createAccount);
  router.put('/account/update_by_username', AccountController.updateAccountByUsername);

  router.get('/category_user', AccountController.getAllCategoryUser);
  router.get('/category_user/:username', AccountController.getCategoryUserByUsername);
  router.delete('/category_user/delete_by_username', AccountController.deleteCategoryUserByUsername);
  router.delete('/category_user/delete_by_username_and_cu_name', AccountController.deleteCategoryUserItemByUsernameAndCuName);
  router.post('/category_user/create', AccountController.createCategoryUserItem);

  router.get('/cart', AccountController.getAllCart);
  router.get('/cart/:username', AccountController.getCartByUsername);
  router.get('/cart/:id_cart', AccountController.getCartByIdCart);
  router.delete('/cart/delete_by_username', AccountController.deleteCartByUsername);
  router.delete('/cart/delete_by_id_cart', AccountController.deleteCartByIdCart);
  router.delete('/cart/delete_by_username_and_id_product', AccountController.deleteCartItemByUsernameAndIdProduct);
  router.post('/cart/create', AccountController.createCart);
  router.put('/cart/update_by_username_and_id_product', AccountController.updateQuantityByUsernameAndIdProduct);
};
