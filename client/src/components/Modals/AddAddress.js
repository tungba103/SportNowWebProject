import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { createAddress } from '../API/Address';
function AddAddress({ show, onClose }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createAddress(sessionStorage.getItem('username'), data.name, data.phone, data.province, data.district, data.subDistrict, data.detail);
    alert('Add address successfully!');
    onClose();
  };
  return (
    <Modal show={show} size="md" popup={true} onClose={() => onClose()}>
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Address</h3>
          <div>
            <div className="block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput id="name" {...register('name')} required={true} defaultValue={''} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="phone" value="Phone Number" />
            </div>
            <TextInput id="phone" {...register('phone')} required={true} defaultValue={''} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="province" value="Province/City" />
            </div>
            <TextInput id="province" {...register('province')} required={true} defaultValue={''} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="district" value="District" />
            </div>
            <TextInput id="district" {...register('district')} required={true} defaultValue={''} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="subDistrict" value="Sub District" />
            </div>
            <TextInput id="subDistrict" {...register('subDistrict')} required={true} defaultValue={''} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="detail" value="Detail" />
            </div>
            <TextInput id="detail" {...register('detail')} required={true} defaultValue={''} />
          </div>
          <div className="w-full">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AddAddress;
