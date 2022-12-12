import { Button, Label, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { InputText } from '../../components';
import { getAccountByUsername } from '../../components/API/Account';
import { updateAccountByUsername } from '../../components/API/Account';
function ProfileCon() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [account, setAccount] = useState();
  const [update, setUpdate] = useState();
  useEffect(() => {
    getAccountByUsername((data) => setAccount(data), sessionStorage.getItem('username'));
  }, [update]);
  return (
    <div className="col-span-9 sm:col-span-10 pl-1 ">
      <div className="flex flex-col bg-white p-2 sm:p-10 sm:border rounded-xl text-sm sm:text-xl">
        <div className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
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
                <TextInput
                  onClick={(e) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  required={true}
                  defaultValue={account[0].name}
                />
              </div>
              <div className="px-20">
                <div className="block">
                  <Label htmlFor="image" value="Image" />
                </div>
                <TextInput
                  onClick={(e) => {
                    setImage(e.target.value);
                  }}
                  id="image"
                  required={true}
                  defaultValue={account[0].image}
                />
              </div>
              <div className="px-20">
                <div className="block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  onClick={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  required={true}
                  defaultValue={account[0].email}
                />
              </div>
              <div className="px-20">
                <div className="block">
                  <Label htmlFor="phoneNumber" value="Phone Number" />
                </div>
                <TextInput
                  onClick={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  id="phoneNumber"
                  required={true}
                  defaultValue={account[0].phoneNumber}
                />
              </div>
              <div className="px-20">
                <div className="block">
                  <Label htmlFor="gender" value="Gender" />
                </div>
                <TextInput
                  onClick={(e) => {
                    setGender(e.target.value);
                  }}
                  id="gender"
                  required={true}
                  defaultValue={account[0].gender}
                />
              </div>
              <div className="px-20">
                <div className="block">
                  <Label htmlFor="dob" value="Date of Birth" />
                </div>
                <TextInput
                  onClick={(e) => {
                    setDob(e.target.value);
                  }}
                  id="dob"
                  required={true}
                  defaultValue={account[0].dob}
                />
              </div>
            </div>
          )}
          <div className="flex justify-center">
            <Button
              className="mt-10 px-2"
              onClick={() => {
                updateAccountByUsername(account[0].username, account[0].password, name, image, email, phoneNumber, gender, dob);
                setUpdate(Math.random());
                alert('Edit profile successfully!');
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCon;
