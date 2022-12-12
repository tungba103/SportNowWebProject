import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getProductByIdProduct } from '../../components/API/Product';
function CartItem({ username, idProduct, quantity, deleteCartItem, updateQuantity, updateCart }) {
  const [products, setProducts] = useState();
  useEffect(() => {
    getProductByIdProduct((data) => setProducts(data), idProduct);
  }, []);
  return (
    <div className="pt-6">
      {typeof products !== 'undefined' && (
        <div className="flex justify-between">
          <img width="60px" height="60px" src={require(`../../assets/image/${products[0].image}`)} alt="" />
          <div className="mx-4">
            <p className="w-24 text-sm font-bold">{products[0].title}</p>
            <p className="text-sm text-gray-500">${products[0].price}</p>
          </div>
          <p>${products[0].price * quantity}</p>
        </div>
      )}
      <div className="mt-2 flex items-center justify-center">
        <div className="mr-4 flex items-center rounded-3xl border border-gray-800 px-4 py-2">
          <FontAwesomeIcon
            icon={faMinus}
            onClick={() => {
              updateQuantity(quantity - 1);
              updateCart(quantity - 1);
            }}
            className="cursor-pointer"
          ></FontAwesomeIcon>
          <p className="mx-8">{quantity}</p>
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => {
              updateQuantity(quantity + 1);
              updateCart(quantity + 1);
            }}
            className="cursor-pointer"
          ></FontAwesomeIcon>
        </div>
        <div>
          <FontAwesomeIcon
            onClick={() => {
              deleteCartItem();
              updateCart('cart');
            }}
            icon={faTrash}
            className="cursor-pointer"
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
