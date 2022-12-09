import { Button } from 'flowbite-react';
import { useState } from 'react';
import { InputText, InputSelect, AddAddress, EditAddress } from '../../components';

function AddressCon() {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);
  return (
    <div className="flex flex-col min-h-96 bg-white p-2 sm:p-10 sm:border rounded-xl text-sm sm:text-xl">
      <h3 className="text-xl px-8 font-medium text-gray-900 dark:text-white">Address</h3>
      <div className="flex justify-center mb-4 mt-10">
        <p className="px-4 py-2 bg-orange-400 w-fit rounded-xl">Name - Phone - Province/City - District - Sub-district - Detail Address</p>
        <Button onClick={() => setShowEditAddress(true)} className="ml-4" size={'sm'}>
          Edit
        </Button>
        <Button className="ml-4" size={'sm'} color="failure">
          Remove
        </Button>
      </div>
      <EditAddress show={showEditAddress} onClose={() => setShowEditAddress(false)} />
      <div className="flex justify-center">
        <Button onClick={() => setShowAddAddress(true)}>Add address</Button>
        <AddAddress show={showAddAddress} onClose={() => setShowAddAddress(false)} />
      </div>
    </div>
  );
}

export default AddressCon;
