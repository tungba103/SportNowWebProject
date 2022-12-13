import { faClipboard, faPen, faSearch, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Order } from '../../components';
import { getOrderByUsername } from '../../components/API/Order';
function OrderCon() {
  const [orders, setOrders] = useState();
  useEffect(() => {
    getOrderByUsername((data) => setOrders(data), sessionStorage.getItem('username'));
  }, []);
  return (
    <div className="col-span-9 sm:col-span-10 pl-1 ">
      <div className="px-2 py-3 w-full flex justify-start items-center bg-gray-100">
        <FontAwesomeIcon icon={faSearch} className="pl-2 pr-4 bg-gray-100 text-xl" />
        <div className="flex-1 bg-gray-100">
          <input placeholder="Find Con" type="text" className="w-full bg-gray-100 focus:outline-none text-sm sm:text-lg " />
        </div>
      </div>
      {typeof orders === 'undefined' ? (
        <h1>Loading...</h1>
      ) : (
        orders.map((order, i) => {
          return <Order key={i} idOrder={order.idOrder} orderDate={order.orderDate} status={order.status} />;
        })
      )}
    </div>
  );
}

export default OrderCon;
