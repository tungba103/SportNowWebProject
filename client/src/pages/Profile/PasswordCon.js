import { Button, Label, TextInput } from 'flowbite-react';

function PasswordCon() {
  return (
    <div className="flex flex-col bg-white p-2 sm:p-10 sm:border rounded-xl text-sm sm:text-xl">
      <div className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Change Password</h3>
        <div className="flex flex-col mx-80">
          <div className="px-20">
            <div className="block">
              <Label htmlFor="oldPassword" value="Old password" />
            </div>
            <TextInput id="oldPassword" required={true} defaultValue={''} />
          </div>
          <div className="px-20">
            <div className="block">
              <Label htmlFor="newPassword" value="New password" />
            </div>
            <TextInput id="newPassword" required={true} defaultValue={''} />
          </div>
          <div className="px-20">
            <div className="block">
              <Label htmlFor="retypeNewPassword" value="Retype new password" />
            </div>
            <TextInput id="retypeNewPassword" required={true} defaultValue={''} />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            className="mt-10 px-2"
            onClick={() => {
              alert('Edit product successfully!');
              // props.onClose();
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PasswordCon;
