import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cart from '../../Cart/Cart';
import Search from '../../Search/Search';
import UserHeader from './UserHeader/UserHeader';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
function ProfileLayout({ children }) {
  const [displayCart, setDisplayCart] = useState('hidden');
  const [displaySearch, setDisplaySearch] = useState('hidden');
  if (sessionStorage.getItem('permission') === 'user') {
    return (
      <>
        <UserHeader setDisplaySearch={(value) => setDisplaySearch(value)} setDisplayCart={(value) => setDisplayCart(value)} />
        <Search visibility={displaySearch} setDisplaySearch={(value) => setDisplaySearch(value)} />
        <Cart visibility={displayCart} setDisplayCart={(value) => setDisplayCart(value)} />
        <div className="bg-gray-50 text-sm sm:text-lg mt-32">
          <div className=" sm:mx-32 grid grid-cols-12 sm:pt-10">
            <ProfileSidebar />
            {children}
          </div>
        </div>
      </>
    );
  } else return <Navigate to={'/home'} />;
}

export default ProfileLayout;
