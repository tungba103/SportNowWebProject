import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'flowbite-react';
function Search(props) {
  return (
    <div className={`${props.visibility} absolute top-0 left-0 z-10 flex h-20 w-full items-center justify-center bg-orange-600 sm:h-36`}>
      <div className="flex h-12 items-center justify-between rounded-3xl border px-4">
        <input className="w-60 bg-orange-600  py-1 border-none text-xs text-white  sm:w-96 sm:text-base " type="text" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer pl-3 text-white"></FontAwesomeIcon>
      </div>
      <FontAwesomeIcon onClick={() => props.setDisplaySearch('hidden')} className="ml-4 cursor-pointer text-3xl text-white" icon={faXmark}></FontAwesomeIcon>
    </div>
  );
}

export default Search;
