import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { createProduct } from '../API/Product';
import { useForm } from 'react-hook-form';
function AddProduct(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createProduct(data.title, data.type, data.price, 'demo.jpg', data.description, data.storage, data.sold);
    props.hook();
    alert('Add product successfully!');
    props.onClose();
  };
  return (
    <Modal show={props.show} size="md" popup={true} onClose={() => props.onClose()}>
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add new product</h3>
          <div>
            <div className="block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput id="title" {...register('title')} required={true} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="type" value="Type " />
            </div>
            <TextInput id="type" {...register('type')} required={true} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput id="price" {...register('price')} required={true} />
          </div>
          {/* <div>
            <div className="block">
              <Label htmlFor="image" value="Image" />
            </div>
            <TextInput id="image" {...register('image')} required={true} />
          </div> */}
          <div>
            <div className="block">
              <Label htmlFor="description" value="Description" />
            </div>
            <TextInput id="description" {...register('description')} required={true} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="storage" value="Storage" />
            </div>
            <TextInput id="storage" {...register('storage')} required={true} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="sold" value="Sold" />
            </div>
            <TextInput id="sold" {...register('sold')} required={true} />
          </div>
          <div className="w-full">
            <Button type="submit">Add product</Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AddProduct;
