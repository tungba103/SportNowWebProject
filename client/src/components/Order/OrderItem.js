import { useEffect, useState } from 'react';
import { getProductByIdProduct } from '../API/Product';
function OrderItem({ idProduct, quantity }) {
  const [product, setProduct] = useState();
  useEffect(() => {
    getProductByIdProduct((data) => setProduct(data), idProduct);
  }, []);
  return (
    <div>
      {typeof product === 'undefined' ? (
        <div className="flex justify-between items-center p-1 sm:p-4 border">
          <div className="flex justify-start">
            <img src={require('../../assets/image/arsenal_shirt.png')} className="w-16 h-16 sm:w-20  sm:h-20" />
            <div className="flex flex-col ml-4 ">
              <p>Name</p>
              <p className="text-gray-600">Type: </p>
            </div>
            <p className="ml-20 ">x0</p>
          </div>
          <div>$0</div>
        </div>
      ) : (
        <div className="flex justify-between items-center p-1 sm:p-4 border">
          <div className="flex justify-start">
            <img src={require('../../assets/image/arsenal_shirt.png')} className="w-16 h-16 sm:w-20  sm:h-20" />
            <div className="flex flex-col ml-4 ">
              <p>{product[0].title}</p>
              <p className="text-gray-600">Type: {product[0].type}</p>
            </div>
            <p className="ml-20 ">x{quantity}</p>
          </div>
          <div>${product[0].price}</div>
        </div>
      )}
    </div>
  );
}

export default OrderItem;
