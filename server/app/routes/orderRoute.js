module.exports = (router) => {
  var OrderController = require('../controllers/orderController');
  router.get('/api/order', OrderController.getAllOrder);
  router.get('/api/order/username/:username', OrderController.getOrderByUsername);
  router.get('/api/order/status/:status', OrderController.getOrderByStatus);
  router.delete('/api/order/delete_by_id_order', OrderController.deleteOrderByIdOrder);
  router.post('/api/order/create', OrderController.createOrderItem);
  router.put('/api/order/update_by_username', OrderController.updateOrderByUsername);

  router.get('/api/order_item', OrderController.getAllOrderItem);
  router.get('/api/order_item/:id_order', OrderController.getOrderItemByIdOrder);
  router.delete('/api/order_item/delete_by_id_order', OrderController.deleteOrderItemByIdOrder);
  router.delete('/api/order_item/delete_by_id_order_and_id_product', OrderController.deleteOrderItemByIdOrderAndIdProduct);
  router.post('/api/order_item/create', OrderController.createOrderItem);
  router.put('/api/order_item/update_by_id_order_and_id_product', OrderController.updateOrderItemQuantityByIdOrderAndIdProduct);
};
