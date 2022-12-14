import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cart from '../../Cart/Cart';
import Search from '../../Search/Search';
import UserHeader from './UserHeader/UserHeader';
import ViewerHeader from './ViewerHeader/ViewerHeader';

function DefaultLayout({ children }) {
  const [displayCart, setDisplayCart] = useState('hidden');
  const [displaySearch, setDisplaySearch] = useState('hidden');
  if (sessionStorage.getItem('permission') === 'viewer' || sessionStorage.getItem('permission') === null) {
    return (
      <>
        <ViewerHeader setDisplaySearch={(value) => setDisplaySearch(value)} />
        <Search visibility={displaySearch} setDisplaySearch={(value) => setDisplaySearch(value)} />
        {children}
      </>
    );
  } else if (sessionStorage.getItem('permission') === 'user') {
    return (
      <>
        <UserHeader setDisplaySearch={(value) => setDisplaySearch(value)} setDisplayCart={(value) => setDisplayCart(value)} />
        <Search visibility={displaySearch} setDisplaySearch={(value) => setDisplaySearch(value)} />
        <Cart visibility={displayCart} setDisplayCart={(value) => setDisplayCart(value)} />
        {children}
      </>
    );
  } else return <Navigate to={'/signin'} />;
}

export default DefaultLayout;
