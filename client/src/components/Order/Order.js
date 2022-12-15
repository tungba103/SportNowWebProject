import OrderItem from './OrderItem';
import { getOrderItemByIdOrder } from '../API/Order';
import { useEffect, useState } from 'react';
function Order({ idOrder, orderDate, status, total }) {
  const [orderItems, setOrderItems] = useState();
  useEffect(() => {
    getOrderItemByIdOrder((data) => setOrderItems(data), idOrder);
  }, []);
  return (
    <div className="bg-white py-2 my-4 px-2 sm:py-4 sm:px-8 sm:my-4 border rounded-xl text-sm sm:text-lg">
      <div className="flex justify-between py-2">
        <p className="ml-2  font-bold">Order Date {orderDate}</p>
      </div>
      <div className="ml-4 mb-4">Address: {status}</div>
      {typeof orderItems === 'undefined' ? (
        <h1>Loading...</h1>
      ) : (
        orderItems.map((orderItem, i) => {
          return <OrderItem key={i} idProduct={orderItem.idProduct} quantity={orderItem.quantity} addToTotal={(value) => (total = total + value)} />;
        })
      )}
      <div>
        <p className="flex justify-end font-bold mr-10  mt-4">Total: ${total}</p>
      </div>
    </div>
  );
}

export default Order;
