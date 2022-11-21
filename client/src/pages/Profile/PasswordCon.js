import { InputText } from '../../components';

function PasswordCon() {
  return (
    <div className="flex flex-col bg-white p-2 sm:p-10 sm:border rounded-xl text-sm sm:text-xl">
      <p className="flex justify-center  text-3xl font-bold mb-10">Change password</p>
      <div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
        <InputText name="Old password" />
        <InputText name="New password" />
        <InputText name="Confirm new password" />
      </div>
      <div className="flex justify-center mt-20">
        <button className="px-4 py-2 rounded-3xl bg-orange-400 w-32 text-white opacity-90 hover:opacity-100 hover:bg-orange-600">Save</button>
      </div>
    </div>
  );
}

export default PasswordCon;
