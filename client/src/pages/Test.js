import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { createAccount, deleteAccountByUsername, getAllAccount, updateAccountByUsername } from '../components/API/Account';
import { createOrder } from '../components/API/Order';
import { getProductByIdProduct } from '../components/API/Product';
import AddAddress from '../components/Modals/AddAddress';
function Test() {
  const submitOrder = () => {
    createOrder('tungba4', 'getTime()', 'TungBa - Son La', 1);
    // getOrderByUsername((data) => setOrder(data), sessionStorage.getItem('username'));
    // for (let i = 0; i < carts.length; i++) {
    //   createOrderItem(order[0].idOrder, carts[i].idProduct, carts[i].quantity, carts[i].total);
    //   getProductByIdProduct((data) => setProduct(data), carts[i].idProduct);
    //   updateProductStorageByIdProduct(carts[i].idProduct, product[0].storage - carts[i].quantity, product[0].sold + carts[i].quantity);
    // }
    alert('Order successfully!');
  };
  return (
    <div className="mt-40">
      <Button onClick={() => submitOrder()}>Submit</Button>
    </div>
  );
}

export default Test;
