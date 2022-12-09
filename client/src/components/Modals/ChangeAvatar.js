import { Button, Label, Modal, TextInput } from 'flowbite-react';

function ChangeAvatar(props) {
  return (
    <Modal show={props.show} size="md" popup={true} onClose={() => props.onClose()}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Change Avatar</h3>
          <div className="flex justify-start py-4 flex-col sm:flex-row">
            <img src="https://cf.shopee.vn/file/96114923d9a24822867c0c0fdc5f23bc_tn" className="h-12 w-12 sm:h-14 ml-3 mb-2 sm:mb-0 sm:ml-0 sm:w-14 rounded-full" alt="" />
            <div className="sm:ml-4 flex-col items-center">
              <p className="font-bold ml-1">tungba103</p>
              Change avatar
            </div>
          </div>
          <input type={'file'}></input>
          <div className="flex justify-center pt-10">
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

export default ChangeAvatar;
