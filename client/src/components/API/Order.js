const getAllOrder = (result) => {
  fetch('/order')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getOrderByUsername = (result, username) => {
  fetch(`/order/${username}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createOrder = (username, orderDate, status) => {
  fetch('/order/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, orderDate: orderDate, status: status }),
  }).then(() => {
    console.log('new Order added');
  });
};
const updateOrderByUsername = (idOrder, username, orderDate, status) => {
  fetch('/order/update_by_username', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username, idOrder: idOrder, orderDate: orderDate, status: status }),
  }).then(() => {
    console.log('New Order updated');
  });
};
const deleteOrderByIdOrder = (idOrder) => {
  fetch('/order/delete_by_id_order', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idOrder: idOrder }),
  }).then(() => {
    console.log('delete Order');
  });
};

// Order Item
const getAllOrderItem = (result) => {
  fetch('/order_item')
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const getOrderItemByIdOrder = (result, idOrder) => {
  fetch(`/order_item/${idOrder}`)
    .then((response) => response.json())
    .then((data) => {
      result(data);
    });
};
const createOrderItem = (idOrder, idProduct, quantity) => {
  fetch('/order_item/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idOrder: idOrder, idProduct: idProduct, quantity: quantity }),
  }).then(() => {
    console.log('new OrderItem added');
  });
};
const updateOrderItemQuantityByIdOrderAndIdProduct = (idOrder, idProduct, quantity) => {
  fetch('/order_item/update_by_id_order_and_id_product', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idOrder: idOrder, idProduct: idProduct, quantity: quantity }),
  }).then(() => {
    console.log('New OrderItem updated');
  });
};
const deleteOrderItemByIdOrderAndIdProduct = (idOrder, idProduct) => {
  fetch('/order_item/delete_by_id_order_and_id_product', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idOrder: idOrder, idProduct: idProduct }),
  }).then(() => {
    console.log('delete OrderItem');
  });
};

export { getAllOrder, getOrderByUsername, createOrder, updateOrderByUsername, deleteOrderByIdOrder };
export { getAllOrderItem, getOrderItemByIdOrder, createOrderItem, updateOrderItemQuantityByIdOrderAndIdProduct, deleteOrderItemByIdOrderAndIdProduct };
