import { Button, Label, Modal, TextInput } from 'flowbite-react';

function AddAddress(props) {
  return (
    <Modal show={props.show} size="md" popup={true} onClose={() => props.onClose()}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Address</h3>
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

export default AddAddress;
