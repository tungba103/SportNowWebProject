import { Button, Label, TextInput } from 'flowbite-react';
import { InputText } from '../../components';

function ProfileCon() {
  return (
    <div className="flex flex-col bg-white p-2 sm:p-10 sm:border rounded-xl text-sm sm:text-xl">
      <div className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Account</h3>
        <div className="grid grid-cols-2">
          <div className="px-20">
            <div className="block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput id="username" required={true} defaultValue={''} />
          </div>
          <div className="px-20">
            <div className="block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput id="name" required={true} defaultValue={''} />
          </div>
          <div className="px-20">
            <div className="block">
              <Label htmlFor="image" value="Image" />
            </div>
            <TextInput id="image" required={true} defaultValue={''} />
          </div>
          <div className="px-20">
            <div className="block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput id="email" required={true} defaultValue={''} />
          </div>
          <div className="px-20">
            <div className="block">
              <Label htmlFor="phoneNumber" value="Phone Number" />
            </div>
            <TextInput id="phoneNumber" required={true} defaultValue={''} />
          </div>
          <div className="px-20">
            <div className="block">
              <Label htmlFor="gender" value="Gender" />
            </div>
            <TextInput id="gender" required={true} defaultValue={''} />
          </div>
          <div className="px-20">
            <div className="block">
              <Label htmlFor="dob" value="Date of Birth" />
            </div>
            <TextInput id="dob" required={true} defaultValue={''} />
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

export default ProfileCon;
