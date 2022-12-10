import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

function ViewerHeader(props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-orange-600 text-white">
      <div id="laptop-icon" className="flex justify-between py-2 sm:py-6">
        <div className="ml-2 sm:ml-10 text-2xl">
          <FontAwesomeIcon onClick={() => props.setDisplaySearch('visible')} className="cursor-pointer" icon={faMagnifyingGlass} />
        </div>
        <p className="ml-10 sm:ml-16 cursor-pointer text-2xl sm:text-5xl font-bold">
          <Link to="/">Sport Now</Link>
        </p>
        <div className="mr-2 sm:mr-12 flex items-center text-2xl">
          <Button color="gray" pill={true} size="xs">
            <Link className="text-lg" to="/signin">
              Sign in
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex justify-center pb-1 sm:pb-4">
        <div className="nav-item mx-3 cursor-pointer border-b border-orange-600 text-gray-100 hover:border-white hover:font-bold hover:text-white">
          <p>
            <Link to="/shirt">Shirt</Link>
          </p>
        </div>
        <div className="nav-item mx-3 cursor-pointer border-b border-orange-600 text-gray-100 hover:border-white hover:font-bold hover:text-white">
          <p>
            <Link to="/short">Shorts</Link>
          </p>
        </div>
        <div className="nav-item mx-3 cursor-pointer border-b border-orange-600 text-gray-100 hover:border-white hover:font-bold hover:text-white">
          <p>
            <Link to="/socks">Socks</Link>
          </p>
        </div>
        <div className="nav-item mx-3 cursor-pointer border-b border-orange-600 text-gray-100 hover:border-white hover:font-bold hover:text-white">
          <p>
            <Link to="/ball">Ball</Link>
          </p>
        </div>
        <div className="nav-item mx-3 cursor-pointer border-b border-orange-600 text-gray-100 hover:border-white hover:font-bold hover:text-white">
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewerHeader;
