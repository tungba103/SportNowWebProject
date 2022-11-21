function inputSelect(props) {
  return (
    <div className="flex justify-start items-center">
      <label for={props.name} className={`w-${props.labelSpace}`}>
        {props.name}
      </label>
      <input id={props.name} className="p-1 my- w-96 border rounded-md bg-orange-50" type="text" placeholder=""></input>
    </div>
  );
}

export default inputSelect;
