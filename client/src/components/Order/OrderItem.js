function OrderItem() {
  return (
    <div className="flex justify-between items-center p-1 sm:p-4 border">
      <div className="flex justify-start">
        <img src={require('../../assets/image/arsenal_shirt.png')} className="w-16 h-16 sm:w-20  sm:h-20" />
        <div className="flex flex-col ml-4 ">
          <p>Arsenal Shirt</p>
          <p className="text-gray-600">Type: Shirt</p>
        </div>
        <p className="ml-20 ">x1</p>
      </div>
      <div>200,000 đồng</div>
    </div>
  );
}

export default OrderItem;
