function InputText(props) {
  return (
    <div className="flex justify-start items-center">
      <label htmlFor={props.name} className="w-28 sm:w-32">
        {props.name}
      </label>
      <input id={props.name} className="p-1 my-1 sm:p-2 sm:my-4 w-40 sm:w-96 border rounded-md bg-orange-50 text-sm sm:text-base" type="text" placeholder={props.name}></input>
    </div>
  );
}

export default InputText;
