import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function HeaderAdmin(props) {
  const [userNav, setUserNav] = useState('invisible');
  return (
    <div id="header">
      <div id="laptop-header" className="sr-only bg-orange-600 text-white sm:not-sr-only">
        <div id="laptop-icon" className="flex justify-between py-6">
          <div className="ml-10 text-2xl">
            <FontAwesomeIcon onClick={() => props.onSearch()} className="cursor-pointer" icon={faMagnifyingGlass} />
          </div>
          <p className="ml-40 cursor-pointer text-5xl font-bold">
            <Link to="/">Sport Now</Link>
          </p>
          <div className="mr-10 flex items-center text-2xl">
            <FontAwesomeIcon
              onClick={() => {
                props.onCart();
                setUserNav('invisible');
              }}
              className="mr-10 cursor-pointer"
              icon={faCartShopping}
            />
            <div>
              <p className="cursor-pointer rounded-3xl border border-white px-4 py-2 font-bold hover:bg-white hover:text-black">
                <Link to="/signin">Sign in</Link>
              </p>
            </div>
            <div className="relative">
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
            </div>
          </div>
        </div>
        <div id="laptop-nav" className="flex justify-center pb-4">
          <div className="nav-item mx-3 cursor-pointer border-b border-orange-600 text-gray-100 hover:border-white hover:font-bold hover:text-white">
            <p>
              <Link to="/shirt">Shirt</Link>
            </p>
          </div>
          <div className="nav-item mx-3 cursor-pointer border-b border-orange-600 text-gray-100 hover:border-white hover:font-bold hover:text-white">
            <p>
              <Link to="/shorts">Shorts</Link>
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
        </div>
      </div>

      <div id="mobile-header" className="relative sm:sr-only">
        <div id="mobile-icon" className="flex h-16 items-center justify-between bg-orange-600 text-2xl text-white">
          <div className="pl-2">
            <FontAwesomeIcon className="cursor-pointer" icon={faBars}></FontAwesomeIcon>
            {/* <FontAwesomeIcon
                  className="cursor-pointer text-3xl"
                  icon={faXmark}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="cursor-pointer pl-4"
                  icon={faMagnifyingGlass}
                ></FontAwesomeIcon> */}
          </div>
          <p className="cursor-pointer">Sport Now</p>
          <div className="flex pr-2">
            <FontAwesomeIcon id="mobile-search-btn" className="cursor-pointer pr-4" icon={faMagnifyingGlass}></FontAwesomeIcon>
            <FontAwesomeIcon className="cursor-pointer pr-4" icon={faCartShopping}></FontAwesomeIcon>
            <div>
              <p className="cursor-pointer rounded-3xl border border-white px-2 py-1 text-xs font-bold hover:bg-white hover:text-black">
                <Link to="/signin">Sign in</Link>
              </p>
            </div>
          </div>
        </div>

        <div id="mobile-nav" className="invisible absolute top-16 left-0 z-10 h-screen bg-orange-600 w-40">
          <div className="px-8 pt-4 text-xl text-white">
            <p className="cursor-pointer p-2 hover:font-bold">Shirt</p>
            <p className="cursor-pointer p-2 hover:font-bold">Shorts</p>
            <p className="cursor-pointer p-2 hover:font-bold">Socks</p>
            <p className="cursor-pointer p-2 hover:font-bold">Ball</p>
            <p className="cursor-pointer p-2 hover:font-bold">About</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;
