import { Label, Radio, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../../components';
import { deleteCartItemByUsernameAndIdProduct, getCartByUsername, updateQuantityByUsernameAndIdProduct } from '../../components/API/Account';

function CheckoutPage() {
  const [carts, setCarts] = useState();
  const [cartHandle, setCartHandle] = useState();
  useEffect(() => {
    getCartByUsername((data) => setCarts(data), sessionStorage.getItem('username'));
  }, [cartHandle]);
  return (
    <div className="pt-24 sm:pt-40 border flex-col justify-center items-center px-4 sm:px-96 bg-gray-50">
      <p className="pb-2 text-xl font-bold">Your address</p>
      <div className="grid grid-cols-2 mb-10">
        <div className="px-10">
          <Label htmlFor="name" value="Name" />
          <TextInput id="name" defaultValue={'hello'} />
        </div>
        <div className="px-10">
          <Label htmlFor="phone" value="Phone Number" />
          <TextInput id="phone" defaultValue={'hello'} />
        </div>
        <div className="px-10">
          <Label htmlFor="province" value="Province" />
          <TextInput id="province" defaultValue={'hello'} />
        </div>
        <div className="px-10">
          <Label htmlFor="district" value="District" />
          <TextInput id="district" defaultValue={'hello'} />
        </div>
        <div className="px-10">
          <Label htmlFor="subDistrict" value="Sub District" />
          <TextInput id="subDistrict" defaultValue={'hello'} />
        </div>
        <div className="px-10">
          <Label htmlFor="detail" value="Detail Address" />
          <TextInput id="detail" defaultValue={'hello'} />
        </div>
      </div>
      <p className="pb-2 text-xl font-bold">Your order</p>
      <div className="flex justify-between border-b py-2 text-xs text-gray-400">
        <p>PRODUCT</p>
        <p>TOTAL</p>
      </div>
      {typeof carts !== 'undefined' &&
        carts.map((cartItem, index) => {
          return (
            <CartItem
              key={index}
              username={cartItem.username}
              idProduct={cartItem.idProduct}
              quantity={cartItem.quantity}
              deleteCartItem={() => {
                deleteCartItemByUsernameAndIdProduct(cartItem.username, cartItem.idProduct);
              }}
              updateQuantity={(quantity) => {
                updateQuantityByUsernameAndIdProduct(cartItem.username, cartItem.idProduct, quantity);
              }}
              updateCart={(quantity) => setCartHandle(quantity)}
            ></CartItem>
          );
        })}

      <p className="pb-2 text-xl font-bold">Your payment</p>
      <p className="text-lg ml-4">Choose your payment method:</p>
      <div className="flex justify-around">
        <div className="">
          <Label className="text-lg" value="When arrived" htmlFor="arrived" />
          <Radio className="ml-4" id="arrived" name="payment" />
        </div>
        <div className="">
          <Label className="text-lg" value="Momo" htmlFor="momo" />
          <Radio className="ml-4" id="momo" name="payment" />
        </div>
        <div className="">
          <Label className="text-lg" value="Smart Banking" htmlFor="banking" />
          <Radio className="ml-4" id="banking" name="payment" />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-6 py-2 rounded-3xl bg-orange-500 font-bold text-xl text-white opacity-80 hover:opacity-100 mt-10">
          <Link to="/profile">Confirm order</Link>
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
