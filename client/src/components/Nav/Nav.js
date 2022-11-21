import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div id="laptop-nav" className="flex justify-center pb-1 sm:pb-4">
      <div className="nav-item mx-3 cursor-pointer border-b border-orange-600 text-gray-100 hover:border-white hover:font-bold hover:text-white">
        <p>
          <Link to="/shirt">Shirt</Link>
        </p>
      </div>
      <div className="nav-item mx-3 cursor-pointer border-b border-orange-600 text-gray-100 hover:border-white hover:font-bold hover:text-white">
        <p>
          <Link to="/short">Shorts</Link>
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
  );
}

export default Nav;
