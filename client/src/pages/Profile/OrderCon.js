import { useEffect, useState } from 'react';
import { Order } from '../../components';
import { getOrderByUsername, getOrderByUsernameAndStatus } from '../../components/API/Order';
function OrderCon() {
  const [orders, setOrders] = useState();
  useEffect(() => {
    getOrderByUsername((data) => setOrders(data), sessionStorage.getItem('username'));
  }, []);
  return (
    <div className="col-span-9 sm:col-span-10 pl-1 ">
      {typeof orders === 'undefined' ? (
        <h1>Loading...</h1>
      ) : (
        orders.map((order, i) => {
          return <Order key={i} idOrder={order.idOrder} orderDate={order.orderDate} status={order.address} total={order.total} />;
        })
      )}
    </div>
  );
}

export default OrderCon;
