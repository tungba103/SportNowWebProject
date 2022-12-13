import { Button, Label, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { getAccountByUsername, updateAccountByUsername } from '../../components/API/Account';
function PasswordCon() {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [retypeNewPassword, setRetypeNewPassword] = useState();
  const [account, setAccount] = useState();
  useEffect(() => {
    getAccountByUsername((data) => setAccount(data), sessionStorage.getItem('username'));
  }, []);
  const changePassword = () => {
    if (newPassword !== retypeNewPassword || oldPassword !== account[0].password) {
      alert('Your information is incorrect, please try again!');
    } else {
      updateAccountByUsername(account[0].username, newPassword, account[0].name, account[0].image, account[0].email, account[0].phoneNumber, account[0].gender, account[0].dob);
      alert('Change password successfully!');
    }
  };
  return (
    <div className="col-span-9 sm:col-span-10 pl-1 ">
      <div className="flex flex-col bg-white p-2 sm:p-10 sm:border rounded-xl text-sm sm:text-xl">
        <div className="space-y-3 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Change Password</h3>
          <div className="flex flex-col mx-80">
            <div className="px-20">
              <div className="block">
                <Label htmlFor="oldPassword" value="Old password" />
              </div>
              <TextInput id="oldPassword" type={'password'} onChange={(e) => setOldPassword(e.target.value)} required={true} defaultValue={''} />
            </div>
            <div className="px-20">
              <div className="block">
                <Label htmlFor="newPassword" value="New password" />
              </div>
              <TextInput id="newPassword" type={'password'} onChange={(e) => setNewPassword(e.target.value)} required={true} defaultValue={''} />
            </div>
            <div className="px-20">
              <div className="block">
                <Label htmlFor="retypeNewPassword" value="Retype new password" />
              </div>
              <TextInput id="retypeNewPassword" type={'password'} onChange={(e) => setRetypeNewPassword(e.target.value)} required={true} defaultValue={''} />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              className="mt-10 px-2"
              onClick={() => {
                changePassword();
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

export default PasswordCon;
