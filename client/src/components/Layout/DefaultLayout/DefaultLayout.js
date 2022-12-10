import { useState } from 'react';
import Cart from '../../Cart/Cart';
import Search from '../../Search/Search';
import DefaultHeader from './DefaultHeader/DefaultHeader';

function DefaultLayout({ children }) {
  const [displayCart, setDisplayCart] = useState('hidden');
  const [displaySearch, setDisplaySearch] = useState('hidden');
  return (
    <>
      <DefaultHeader setDisplaySearch={(value) => setDisplaySearch(value)} setDisplayCart={(value) => setDisplayCart(value)} />
      <Search visibility={displaySearch} setDisplaySearch={(value) => setDisplaySearch(value)} />
      <Cart visibility={displayCart} setDisplayCart={(value) => setDisplayCart(value)} />
      {children}
    </>
  );
}

export default DefaultLayout;
