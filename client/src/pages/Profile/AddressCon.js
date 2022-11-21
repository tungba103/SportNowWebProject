import { InputText, InputSelect } from '../../components';

function AddressCon() {
  return (
    <div className="flex flex-col bg-white p-2 sm:p-10 sm:border rounded-xl text-sm sm:text-xl">
      <p className="flex justify-center text-3xl font-bold mb-10">Address</p>
      <div className="sm:grid sm:grid-cols-2">
        <InputText name="Name" />
        <InputText name="Phone" />
        <InputText name="Province/City" />
        <InputText name="District" />
        <InputText name="Sub-district" />
        <InputText name="Detail Address" />
      </div>
      <div className="flex justify-center mt-20">
        <button className="px-4 py-2 rounded-3xl bg-orange-400 w-32 text-white opacity-90 hover:opacity-100 hover:bg-orange-600">Save</button>
      </div>
    </div>
  );
}

export default AddressCon;