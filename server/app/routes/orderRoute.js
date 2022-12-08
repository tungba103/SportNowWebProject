module.exports = (router) => {
  var OrderController = require('../controllers/orderController');
  router.get('/order', OrderController.getAllOrder);
  router.get('/order/:username', OrderController.getOrderByUsername);
  router.delete('/order/delete', OrderController.deleteOrderByIdOrder);
  router.post('/order/create', OrderController.createOrderItem);
  router.put('/order/update', OrderController.updateOrder);

  router.get('/order_item', OrderController.getAllOrderItem);
  router.get('/order_item/:id_order', OrderController.getOrderItemByIdOrder);
  router.delete('/order_item/delete_by_id_order', OrderController.deleteOrderItemByIdOrder);
  router.delete('/order_item/delete_by_id_order_and_id_product', OrderController.deleteOrderItemByIdOrderAndIdProduct);
  router.post('/order_item/create', OrderController.createOrderItem);
  router.put('/order_item/update', OrderController.updateOrderItemQuantity);
};
