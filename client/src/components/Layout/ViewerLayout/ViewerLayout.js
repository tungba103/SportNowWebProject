import { useState } from 'react';
import Cart from '../../Cart/Cart';
import Search from '../../Search/Search';
import DefaultHeader from './ViewerHeader/ViewerHeader';

function ViewerLayout({ children }) {
  // const [displayCart, setDisplayCart] = useState('hidden');
  const [displaySearch, setDisplaySearch] = useState('hidden');
  return (
    <>
      <DefaultHeader setDisplaySearch={(value) => setDisplaySearch(value)} />
      <Search visibility={displaySearch} setDisplaySearch={(value) => setDisplaySearch(value)} />
      {/* <Cart visibility={displayCart} setDisplayCart={(value) => setDisplayCart(value)} /> */}
      {children}
    </>
  );
}

export default ViewerLayout;
