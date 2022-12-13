import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAddressByIdAddress, updateAddressByIdAddress } from '../API/Address';
function EditAddress({ idAddress, show, onClose }) {
  const [address, setAddress] = useState();
  useEffect(() => {
    getAddressByIdAddress((data) => setAddress(data), idAddress);
  }, [idAddress]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    updateAddressByIdAddress(idAddress, sessionStorage.getItem('username'), data.name, data.phone, data.province, data.district, data.subDistrict, data.detail);
    alert('Edit address successfully!');
    onClose();
  };
  return (
    <Modal show={show} size="md" popup={true} onClose={() => onClose()}>
      <Modal.Header />
      <Modal.Body>
        {typeof address === 'undefined' ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Address</h3>
            <div>
              <div className="block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput id="name" required={true} defaultValue={''} />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="phone" value="Phone Number" />
              </div>
              <TextInput id="phone" required={true} defaultValue={''} />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="province" value="Province/City" />
              </div>
              <TextInput id="province" required={true} defaultValue={''} />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="district" value="District" />
              </div>
              <TextInput id="district" required={true} defaultValue={''} />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="subDistrict" value="Sub District" />
              </div>
              <TextInput id="subDistrict" required={true} defaultValue={''} />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="detail" value="Detail" />
              </div>
              <TextInput id="detail" required={true} defaultValue={''} />
            </div>
            <div className="w-full">
              <Button
                onClick={() => {
                  // alert('Edit product successfully!');
                  // props.onClose();
                }}
              >
                Save
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Address</h3>
            <div>
              <div className="block">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput id="name" {...register('name')} required={true} defaultValue={address[0].name} />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="phone" value="Phone Number" />
              </div>
              <TextInput id="phone" {...register('phone')} required={true} defaultValue={address[0].phone} />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="province" value="Province/City" />
              </div>
              <TextInput id="province" {...register('province')} required={true} defaultValue={address[0].province} />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="district" value="District" />
              </div>
              <TextInput id="district" {...register('district')} required={true} defaultValue={address[0].district} />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="subDistrict" value="Sub District" />
              </div>
              <TextInput id="subDistrict" {...register('subDistrict')} required={true} defaultValue={address[0].subDistrict} />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="detail" value="Detail" />
              </div>
              <TextInput id="detail" {...register('detail')} required={true} defaultValue={address[0].detail} />
            </div>
            <div className="w-full">
              <Button type="submit">Save</Button>
            </div>
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default EditAddress;
