import { faClipboard, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChangeAvatar from '../../../Modals/ChangeAvatar';
import { getAccountByUsername } from '../../../API/Account';

function ProfileSidebar() {
  const [showChangeAvatar, setShowChangeAvatar] = useState(false);
  const [account, setAccount] = useState();
  useEffect(() => {
    getAccountByUsername((data) => setAccount(data), sessionStorage.getItem('username'));
  });
  return (
    <div className="col-span-3 sm:col-span-2  px-4">
      {typeof account === 'undefined' ? (
        <div className="flex justify-start py-4 flex-col sm:flex-row">
          <img src={require(`../../../../assets/web_image/user.png`)} className="h-12 w-12 sm:h-14 ml-3 mb-2 sm:mb-0 sm:ml-0 sm:w-14 rounded-full" alt="" />
          <div className="sm:ml-4 flex-col items-center">
            <p className="font-bold ml-1">username</p>
            <p className="text-sm ml-1 text-gray-900 cursor-pointer" onClick={() => setShowChangeAvatar(true)}>
              Change avatar
            </p>
            <ChangeAvatar show={showChangeAvatar} onClose={() => setShowChangeAvatar(false)} />
          </div>
        </div>
      ) : (
        <div className="flex justify-start py-4 flex-col sm:flex-row">
          <img src={account[0].image} className="h-12 w-12 sm:h-14 ml-3 mb-2 sm:mb-0 sm:ml-0 sm:w-14 rounded-full" alt="" />
          <div className="sm:ml-4 flex-col items-center">
            <p className="font-bold ml-1">{account[0].name}</p>
            <p className="text-sm ml-1 text-gray-900 cursor-pointer" onClick={() => setShowChangeAvatar(true)}>
              Change avatar
            </p>
            <ChangeAvatar show={showChangeAvatar} onClose={() => setShowChangeAvatar(false)} />
          </div>
        </div>
      )}
      <div>
        <div>
          <div className="flex justify-start items-center sm:p-2 cursor-pointer text-gray-900 pb-2 sm:pb-0">
            <FontAwesomeIcon icon={faUserLarge} className="text-xl w-10" />
            <p className="ml-2 font-bold ">Account</p>
          </div>
          <div className="sm:ml-14 flex flex-col  text-gray-900 ">
            <p className="my-2 hover:text-orange-600 cursor-pointer">
              <Link to={'/profile_con'}>Profile</Link>
            </p>
            <p className="my-2 hover:text-orange-600 cursor-pointer">
              <Link to={'/address_con'}>Address</Link>
            </p>
            <p className="my-2 hover:text-orange-600 cursor-pointer">
              <Link to={'/category_con'}>Category</Link>
            </p>
            <p className="my-2 hover:text-orange-600 cursor-pointer">
              <Link to={'/change_password_con'}>Change password</Link>
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-start items-center sm:p-2 cursor-pointer text-gray-900 mt-2 sm:mt-0 pb-2 sm:pb-0">
            <FontAwesomeIcon icon={faClipboard} className="text-xl w-10" />
            <p className="ml-2  font-bold">Orders</p>
          </div>
          <div className="sm:ml-14 flex flex-col  text-gray-900 ">
            <p className="my-2 hover:text-orange-600 cursor-pointer">
              <Link to={'/order_con'}>All</Link>
            </p>
            <p className="my-2 hover:text-orange-600 cursor-pointer">Shipping</p>
            <p className="my-2 hover:text-orange-600 cursor-pointer">Shipped</p>
            <p className="my-2 hover:text-orange-600 cursor-pointer">Canceled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
