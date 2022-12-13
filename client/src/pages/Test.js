import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { createAccount, deleteAccountByUsername, getAllAccount, updateAccountByUsername } from '../components/API/Account';
import { getProductByIdProduct } from '../components/API/Product';
import AddAddress from '../components/Modals/AddAddress';
function Test() {
  const [showAddAddress, setShowAddAddress] = useState(false);
  return (
    <div className="mt-40">
      <Button onClick={() => setShowAddAddress(true)}>Open</Button>
      <AddAddress show={showAddAddress} onClose={() => setShowAddAddress(false)} />
    </div>
  );
}

export default Test;
