import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
function CartItem(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  const updateQuantity = (value) => {
    setQuantity(quantity + value);
  };
  return (
    <div className="pt-6">
      <div className="flex justify-between">
        <img width="60px" height="60px" src={require(`../../assets/image/${props.image}`)} alt="" />
        <div className="mx-4">
          <p className="w-24 text-sm font-bold">{props.name}</p>
          <p className="text-sm text-gray-500">${props.price}</p>
        </div>
        <p>${props.price}</p>
      </div>
      <div className="mt-2 flex items-center justify-center">
        <div className="mr-4 flex items-center rounded-3xl border border-gray-800 px-4 py-2">
          <FontAwesomeIcon
            icon={faMinus}
            onClick={() => {
              updateQuantity(-1);
            }}
            className="cursor-pointer"
          ></FontAwesomeIcon>
          <p className="mx-8">{quantity}</p>
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => {
              updateQuantity(1);
            }}
            className="cursor-pointer"
          ></FontAwesomeIcon>
        </div>
        <div>
          <FontAwesomeIcon onClick={() => props.onDelete(props.name)} icon={faTrash} className="cursor-pointer"></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
