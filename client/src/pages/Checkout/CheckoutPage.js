import { Button, Label, Radio, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../../components';
import { deleteCartItemByUsernameAndIdProduct, getCartByUsername, getTotalOnCart, updateQuantityByUsernameAndIdProduct } from '../../components/API/Account';
import { getAddressByUsername } from '../../components/API/Address';
import { createOrder, createOrderItem, getOrderByUsername } from '../../components/API/Order';
import { getProductByIdProduct, updateProductStorageByIdProduct } from '../../components/API/Product';
function CheckoutPage() {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState();
  const [carts, setCarts] = useState();
  const [cartHandle, setCartHandle] = useState();

  const [total, setTotal] = useState();
  useEffect(() => {
    getTotalOnCart((data) => setTotal(data), sessionStorage.getItem('username'));
  }, [cartHandle]);

  const [product, setProduct] = useState();
  const [order, setOrder] = useState();
  const [address, setAddress] = useState('');
  useEffect(() => {
    getCartByUsername((data) => setCarts(data), sessionStorage.getItem('username'));
  }, [cartHandle]);
  useEffect(() => {
    getAddressByUsername((data) => setAddresses(data), sessionStorage.getItem('username'));
  }, []);
  const getTime = () => {
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    return day + '-' + month + '-' + year;
  };
  const submitOrder = () => {
    createOrder(sessionStorage.getItem('username'), getTime(), address, 50);
    getOrderByUsername((data) => setOrder(data), sessionStorage.getItem('username'));
    for (let i = 0; i < carts.length; i++) {
      createOrderItem(order[0].idOrder, carts[i].idProduct, carts[i].quantity, carts[i].total);
      getProductByIdProduct((data) => setProduct(data), carts[i].idProduct);
      updateProductStorageByIdProduct(carts[i].idProduct, product[0].storage - carts[i].quantity, product[0].sold + carts[i].quantity);
    }
    alert('Order successfully!');
    navigate('/order_con');
  };
  return (
    <div className="pt-24 sm:pt-40 border flex-col justify-center items-center px-4 sm:px-96 bg-gray-50">
      <p className="pb-2 text-xl font-bold">Your address</p>
      <p>Choose your address:</p>
      {typeof addresses === 'undefined' ? (
        <div>
          <Radio id="1" name="address" />
          <Label className="ml-4" value="Address" htmlFor="1"></Label>
        </div>
      ) : addresses.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-xl mb-4">You don't have any address! Please add your address</p>
          <Button>
            <Link to={'/address_con'}>Add address</Link>
          </Button>
        </div>
      ) : (
        addresses.map((address, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setAddress(address.name + ' - ' + address.phone + ' - ' + address.province + ' - ' + address.district + ' - ' + address.subDistrict + ' - ' + address.detail);
              }}
            >
              <Radio id={address.idAddress} name="address" />
              <Label
                className="ml-4"
                value={address.name + ' - ' + address.phone + ' - ' + address.province + ' - ' + address.district + ' - ' + address.subDistrict + ' - ' + address.detail}
                htmlFor={address.idAddress}
              ></Label>
            </div>
          );
        })
      )}
      {/* <div>
        <Radio id="other" name="address" />
        <Label className="ml-4" value="Other" htmlFor="1"></Label>
      </div>
      <div className="grid grid-cols-2 mb-10">
        <div className="px-10">
          <Label htmlFor="name" value="Name" />
          <TextInput id="name" defaultValue={''} />
        </div>
        <div className="px-10">
          <Label htmlFor="phone" value="Phone Number" />
          <TextInput id="phone" defaultValue={''} />
        </div>
        <div className="px-10">
          <Label htmlFor="province" value="Province" />
          <TextInput id="province" defaultValue={''} />
        </div>
        <div className="px-10">
          <Label htmlFor="district" value="District" />
          <TextInput id="district" defaultValue={''} />
        </div>
        <div className="px-10">
          <Label htmlFor="subDistrict" value="Sub District" />
          <TextInput id="subDistrict" defaultValue={''} />
        </div>
        <div className="px-10">
          <Label htmlFor="detail" value="Detail Address" />
          <TextInput id="detail" defaultValue={''} />
        </div>
      </div> */}
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
              totalCI={cartItem.total}
              deleteCartItem={() => {
                deleteCartItemByUsernameAndIdProduct(cartItem.username, cartItem.idProduct);
              }}
              updateQuantity={(quantity, total) => {
                updateQuantityByUsernameAndIdProduct(cartItem.username, cartItem.idProduct, quantity, total);
              }}
              updateCart={(quantity) => setCartHandle(quantity)}
            ></CartItem>
          );
        })}
      <div className="font-bold flex justify-end">{typeof total === 'undefined' ? <p>Total: $0</p> : <p>Total: ${total[0].total}</p>}</div>

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
        <button onClick={() => submitOrder()} className="px-6 py-2 rounded-3xl bg-orange-500 font-bold text-xl text-white opacity-80 hover:opacity-100 mt-10">
          {/* <Link to="/profile"></Link> */}
          Confirm order
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
