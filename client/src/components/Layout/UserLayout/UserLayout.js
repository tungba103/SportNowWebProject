import HeaderUser from './Header/HeaderUser';
import { HomePage } from '../../../pages';

function UserLayout({ children }) {
  return (
    <>
      <HeaderUser />
      {children}
    </>
  );
}

export default UserLayout;
