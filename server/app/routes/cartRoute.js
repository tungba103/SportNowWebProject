module.exports = (router) => {
  var CartController = require('../controllers/cartController');
  router.get('/cart', CartController.getAllCart);
  router.get('/cart/detail/:username', CartController.getCartByUsername);
  router.get('/cart/detail/:username/:idProduct', CartController.getCartItemByUsername);
  router.delete('/cart/delete/:username', CartController.deleteCart);
  router.delete('/cart/delete/:username/:idProduct', CartController.deleteCartItem);
  router.post('/cart/create', CartController.createCart);
  router.put('/cart/update', CartController.updateCart);
};
