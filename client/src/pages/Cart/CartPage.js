import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import CartItem from '../../components/CartItem/CartItem';
import { Link } from 'react-router-dom';

function Cart(props) {
  const array = [
    { image: 'arsenal_ball.png', name: 'Arsenal Ball', price: '10', quantity: 2 },
    { image: 'arsenal_ball.png', name: 'Arsenal Ball', price: '10', quantity: 2 },
    { image: 'arsenal_ball.png', name: 'Arsenal Ball', price: '10', quantity: 2 },
    { image: 'arsenal_ball.png', name: 'Arsenal Ball', price: '10', quantity: 2 },
  ];
  const [cartItem, setCartItem] = useState(array);
  // useEffect(() => {
  //   setCartItem(array);
  // }, array);

  return (
    <div>
      <div className={`${props.visibility} fixed top-0 right-0 z-10 h-full w-full bg-orange-200 bg-opacity-40 text-gray-900`}>
        <div id="cart" className="absolute top-0 right-0 h-full w-80 bg-gray-50">
          <div className="absolute top-4 right-4 text-2xl">
            <FontAwesomeIcon onClick={() => props.onHide()} icon={faXmark} className="cursor-pointer"></FontAwesomeIcon>
          </div>

          <div className="m-4">
            <p className="pb-2 text-xl font-bold">Your cart</p>
            <div className="flex justify-between border-b py-2 text-xs text-gray-400">
              <p>PRODUCT</p>
              <p>TOTAL</p>
            </div>
            {cartItem.length === 0 && (
              <div className="flex flex-col justify-center items-center mt-60">
                <p className="text-xl font-bold">Your cart is empty</p>
                <p className="mt-4 cursor-pointer rounded-3xl bg-orange-600 py-2 px-5 text-white hover:bg-orange-700">Continue shopping</p>
              </div>
            )}
            {cartItem.map((cartItem, index) => {
              return <CartItem key={index} image={cartItem.image} name={cartItem.name} price={cartItem.price} quantity={cartItem.quantity} onDelete={(name) => props.removeCartItem(name)}></CartItem>;
            })}
            <div className="flex justify-center">
              <button
                className="px-6 py-2 rounded-3xl bg-orange-500 font-bold text-xl text-white opacity-80 hover:opacity-100 mt-10"
                onClick={() => {
                  props.onHide();
                }}
              >
                <Link to="/checkout">Check out</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
