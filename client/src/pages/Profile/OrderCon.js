import { faClipboard, faPen, faSearch, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Order } from '../../components';
function OrderCon() {
  return (
    <div className="col-span-9 sm:col-span-10 pl-1 ">
      <div className="px-2 py-3 w-full flex justify-start items-center bg-gray-100">
        <FontAwesomeIcon icon={faSearch} className="pl-2 pr-4 bg-gray-100 text-xl" />
        <div className="flex-1 bg-gray-100">
          <input placeholder="Find Con" type="text" className="w-full bg-gray-100 focus:outline-none text-sm sm:text-lg " />
        </div>
      </div>
      <Order />
      <Order />
    </div>
  );
}

export default OrderCon;
