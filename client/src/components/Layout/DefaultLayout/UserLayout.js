import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cart from '../../Cart/Cart';
import Search from '../../Search/Search';
import UserHeader from './UserHeader/UserHeader';

function UserLayout({ children }) {
  const [displayCart, setDisplayCart] = useState('hidden');
  const [displaySearch, setDisplaySearch] = useState('hidden');
  if (sessionStorage.getItem('permission') === 'user') {
    return (
      <>
        <UserHeader setDisplaySearch={(value) => setDisplaySearch(value)} setDisplayCart={(value) => setDisplayCart(value)} />
        <Search visibility={displaySearch} setDisplaySearch={(value) => setDisplaySearch(value)} />
        <Cart visibility={displayCart} setDisplayCart={(value) => setDisplayCart(value)} />
        {children}
      </>
    );
  } else return <Navigate to={'/home'} />;
}

export default UserLayout;
