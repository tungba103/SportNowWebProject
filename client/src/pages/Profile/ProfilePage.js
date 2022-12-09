import { faClipboard, faPen, faSearch, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ChangeAvatar } from '../../components';
import AddressCon from './AddressCon';
import CategoryCon from './CategoryCon';
import OrderCon from './OrderCon';
import PasswordCon from './PasswordCon';
import ProfileCon from './ProfileCon';
function ProfilePage() {
  const [showChangeAvatar, setShowChangeAvatar] = useState(false);
  const [page, setPage] = useState('ProfileCon');
  let PageOption = page;
  return (
    <div className="bg-gray-50 text-sm sm:text-lg mt-32">
      <div className=" sm:mx-32 grid grid-cols-12 sm:pt-10">
        <div id="nav-left" className="col-span-3 sm:col-span-2  px-4">
          <div className="flex justify-start py-4 flex-col sm:flex-row">
            <img src="https://cf.shopee.vn/file/96114923d9a24822867c0c0fdc5f23bc_tn" className="h-12 w-12 sm:h-14 ml-3 mb-2 sm:mb-0 sm:ml-0 sm:w-14 rounded-full" alt="" />
            <div className="sm:ml-4 flex-col items-center">
              <p className="font-bold ml-1">tungba103</p>
              <p className="text-sm ml-1 text-gray-900 cursor-pointer" onClick={() => setShowChangeAvatar(true)}>
                Change avatar
              </p>
              <ChangeAvatar show={showChangeAvatar} onClose={() => setShowChangeAvatar(false)} />
            </div>
          </div>
          <div>
            <div>
              <div className="flex justify-start items-center sm:p-2 cursor-pointer text-gray-900 pb-2 sm:pb-0">
                <FontAwesomeIcon icon={faUserLarge} className="text-xl w-10" />
                <p className="ml-2 font-bold ">Account</p>
              </div>
              <div className="sm:ml-14 flex flex-col  text-gray-900 ">
                <p className="my-2 hover:text-orange-600 cursor-pointer" onClick={() => setPage('ProfileCon')}>
                  Profile
                </p>
                <p className="my-2 hover:text-orange-600 cursor-pointer" onClick={() => setPage('AddressCon')}>
                  Address
                </p>
                <p className="my-2 hover:text-orange-600 cursor-pointer" onClick={() => setPage('CategoryCon')}>
                  Category
                </p>
                <p className="my-2 hover:text-orange-600 cursor-pointer" onClick={() => setPage('PasswordCon')}>
                  Change password
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-start items-center sm:p-2 cursor-pointer text-gray-900 mt-2 sm:mt-0 pb-2 sm:pb-0">
                <FontAwesomeIcon icon={faClipboard} className="text-xl w-10" />
                <p className="ml-2  font-bold">Orders</p>
              </div>
              <div className="sm:ml-14 flex flex-col  text-gray-900 ">
                <p className="my-2 hover:text-orange-600 cursor-pointer" onClick={() => setPage('OrderCon')}>
                  All
                </p>
                <p className="my-2 hover:text-orange-600 cursor-pointer">Shipping</p>
                <p className="my-2 hover:text-orange-600 cursor-pointer">Shipped</p>
                <p className="my-2 hover:text-orange-600 cursor-pointer">Canceled</p>
              </div>
            </div>
          </div>
        </div>
        <div id="container" className="col-span-9 sm:col-span-10 pl-1 ">
          {page === 'OrderCon' && <OrderCon />}
          {page === 'AddressCon' && <AddressCon />}
          {page === 'ProfileCon' && <ProfileCon />}
          {page === 'PasswordCon' && <PasswordCon />}
          {page === 'CategoryCon' && <CategoryCon />}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
