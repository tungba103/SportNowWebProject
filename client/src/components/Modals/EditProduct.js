import { Button, Label, Modal, TextInput } from 'flowbite-react';

function EditProduct(props) {
  return (
    <Modal show={props.show} size="md" popup={true} onClose={() => props.onClose()}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit product</h3>
          <div>
            <div className="block">
              <Label htmlFor="idProduct" value="ID Product" />
            </div>
            <TextInput id="idProduct" required={true} defaultValue={props.product.idProduct} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput id="title" required={true} defaultValue={props.product.title} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput id="price" required={true} defaultValue={props.product.price} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="image" value="Image" />
            </div>
            <TextInput id="image" required={true} defaultValue={props.product.image} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="description" value="Description" />
            </div>
            <TextInput id="description" required={true} defaultValue={props.product.description} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="storage" value="Storage" />
            </div>
            <TextInput id="storage" required={true} defaultValue={props.product.storage} />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="sold" value="Sold" />
            </div>
            <TextInput id="sold" required={true} defaultValue={props.product.sold} />
          </div>
          <div className="w-full">
            <Button
              onClick={() => {
                alert('Edit product successfully!');
                props.onClose();
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditProduct;
