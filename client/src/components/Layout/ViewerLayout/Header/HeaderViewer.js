import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../Nav/Nav';

function HeaderViewer(props) {
  const [userNav, setUserNav] = useState('invisible');
  return (
    <div className=" bg-orange-600 text-white ">
      <div id="laptop-icon" className="flex justify-between py-2 sm:py-6">
        <div className="ml-2 sm:ml-10 text-2xl">
          <FontAwesomeIcon onClick={() => props.onSearch()} className="cursor-pointer" icon={faMagnifyingGlass} />
        </div>
        <p className="ml-10 sm:ml-40 cursor-pointer text-2xl sm:text-5xl font-bold">
          <Link to="/">Sport Now</Link>
        </p>
        <div className="mr-2 sm:mr-10 flex items-center text-2xl">
          <FontAwesomeIcon
            onClick={() => {
              props.onCart();
              setUserNav('invisible');
            }}
            className="mr-4 xl:mr-10 cursor-pointer"
            icon={faCartShopping}
          />
          <div>
            <p className="cursor-pointer rounded-3xl border border-white text-sm sm:text-base px-2 py-1 sm:px-4 sm:py-2 font-bold hover:bg-white hover:text-black">
              <Link to="/signin">Sign in</Link>
            </p>
          </div>
          {/* <div className="relative">
            <img
              onClick={() => {
                setUserNav('visible');
              }}
              src={require('../../../../assets/image/avatar.jpg')}
              className="w-10 h-10 cursor-pointer rounded-full border border-orange-600 hover:border-white"
              alt=""
            />
            <div className={`${userNav} absolute top-10 -left-12 bg-white text-black text-base w-28 z-10 rounded-md`}>
              <p className="p-2 pl-4 rounded-t-md cursor-pointer hover:bg-orange-200">
                <Link to="/profile">My account</Link>
              </p>
              <p className="p-2 pl-4 cursor-pointer hover:bg-orange-200" onClick={() => setUserNav('invisible')}>
                Cancel
              </p>
              <p className="p-2 pl-4 rounded-b-md cursor-pointer hover:bg-orange-200">Sign out</p>
            </div>
          </div> */}
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default HeaderViewer;
