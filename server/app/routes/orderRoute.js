module.exports = (router) => {
  var OrderController = require('../controllers/orderController');
  router.get('/order', OrderController.getAllOrder);
  router.get('/order/username/:username', OrderController.getOrderByUsername);
  router.get('/order/status/:status', OrderController.getOrderByStatus);
  router.delete('/order/delete_by_id_order', OrderController.deleteOrderByIdOrder);
  router.post('/order/create', OrderController.createOrderItem);
  router.put('/order/update_by_username', OrderController.updateOrderByUsername);

  router.get('/order_item', OrderController.getAllOrderItem);
  router.get('/order_item/:id_order', OrderController.getOrderItemByIdOrder);
  router.delete('/order_item/delete_by_id_order', OrderController.deleteOrderItemByIdOrder);
  router.delete('/order_item/delete_by_id_order_and_id_product', OrderController.deleteOrderItemByIdOrderAndIdProduct);
  router.post('/order_item/create', OrderController.createOrderItem);
  router.put('/order_item/update_by_id_order_and_id_product', OrderController.updateOrderItemQuantityByIdOrderAndIdProduct);
};
