import OrderItem from '../OrderItem/OrderItem';

function Order() {
  return (
    <div className="bg-white py-2 my-4 px-2 sm:py-4 sm:px-8 sm:my-4 border rounded-xl text-sm sm:text-lg">
      <div className="flex justify-between py-2">
        <p className="ml-2  font-bold">Order Date 26/10/2022</p>
        <p className=" font-bold text-orange-600">SHIPPING</p>
      </div>
      <OrderItem />
      <OrderItem />
      <div>
        <p className="flex justify-end font-bold mr-10  mt-4">Total: 200,000 đồng</p>
      </div>
    </div>
  );
}

export default Order;
