import { Button, Label, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from '../../components';
import { getAccountByUsername } from '../../components/API/Account';
import { updateAccountByUsername } from '../../components/API/Account';
function ProfileCon() {
  const [account, setAccount] = useState();
  const [update, setUpdate] = useState();
  useEffect(() => {
    getAccountByUsername((data) => setAccount(data), sessionStorage.getItem('username'));
  }, [update]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    updateAccountByUsername(account[0].username, account[0].password, data.name, data.image, data.email, data.phoneNumber, data.gender, data.dob);
    setUpdate(Math.random());
  };

  return (
    <div className="col-span-9 sm:col-span-10 pl-1 ">
      <div className="flex flex-col bg-white p-2 sm:p-10 sm:border rounded-xl text-sm sm:text-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Account</h3>
          {typeof account === 'undefined' ? (
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
          ) : (
            <div className="grid grid-cols-2">
              <div className="px-20">
                <div className="block">
                  <Label htmlFor="username" value="Username" />
                </div>
                <p className="px-2 py-2 border text-sm bg-gray-100 rounded-md">{account[0].username}</p>
              </div>
              <div className="px-20">
                <div className="block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <TextInput id="name" {...register('name')} required={true} defaultValue={account[0].name} />
              </div>
              <div className="px-20">
                <div className="block">
                  <Label htmlFor="image" value="Image" />
                </div>
                <TextInput id="image" {...register('image')} required={true} defaultValue={account[0].image} />
              </div>
              <div className="px-20">
                <div className="block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput id="email" {...register('email')} required={true} defaultValue={account[0].email} />
              </div>
              <div className="px-20">
                <div className="block">
                  <Label htmlFor="phoneNumber" value="Phone Number" />
                </div>
                <TextInput id="phoneNumber" {...register('phoneNumber')} required={true} defaultValue={account[0].phoneNumber} />
              </div>
              <div className="px-20">
                <div className="block">
                  <Label htmlFor="gender" value="Gender" />
                </div>
                <TextInput id="gender" {...register('gender')} required={true} defaultValue={account[0].gender} />
              </div>
              <div className="px-20">
                <div className="block">
                  <Label htmlFor="dob" value="Date of Birth" />
                </div>
                <TextInput id="dob" {...register('dob')} required={true} defaultValue={account[0].dob} />
              </div>
            </div>
          )}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="mt-10 px-2"
              onClick={() => {
                alert('Edit profile successfully!');
              }}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileCon;
