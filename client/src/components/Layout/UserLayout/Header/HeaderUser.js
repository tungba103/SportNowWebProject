import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../Nav/Nav';
import Search from '../../../Search/Search';
import { CartPage } from '../../../../pages';
import { Avatar, Dropdown } from 'flowbite-react';

function HeaderUser(props) {
  const [cartDisplay, setCartDisplay] = useState('invisible');
  const [searchDisplay, setSearchDisplay] = useState('invisible');
  return (
    <div className=" bg-orange-600 text-white ">
      <div className="flex justify-between py-3 sm:py-6">
        <div className="ml-2 sm:ml-10 text-2xl">
          <FontAwesomeIcon onClick={() => setSearchDisplay('visible')} className="cursor-pointer" icon={faMagnifyingGlass} />
        </div>
        <p className="ml-10 sm:ml-24 cursor-pointer text-2xl sm:text-5xl font-bold">
          <Link to="/">Sport Now</Link>
        </p>
        <div className="mr-2 sm:mr-10 flex items-center text-2xl">
          <FontAwesomeIcon
            onClick={() => {
              setCartDisplay('visible');
            }}
            className="mr-4 xl:mr-10 cursor-pointer"
            icon={faCartShopping}
          />
          {/* <div>
            <p className="cursor-pointer rounded-3xl border border-white px-4 py-2 font-bold hover:bg-white hover:text-black">
              <Link to="/signin">Sign in</Link>
            </p>
          </div> */}
          <Dropdown inline label={<Avatar img={require('../../../../assets/image/avatar.jpg')} rounded={true} />} dismissOnClick={true}>
            <Dropdown.Item>
              <Link to="/account">My Account</Link>
            </Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <Nav />
      <CartPage visibility={cartDisplay} onHide={() => setCartDisplay('invisible')} />
      <Search visibility={searchDisplay} onHide={() => setSearchDisplay('invisible')} />
    </div>
  );
}

export default HeaderUser;
