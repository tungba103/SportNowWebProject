import { Avatar, Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

function AdminHeader(props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 py-4 bg-orange-600 text-white">
      <p className="flex justify-center cursor-pointer text-2xl sm:text-5xl font-bold">
        <Link to={'/admin'}>Sport Now</Link>
      </p>
      <div className="absolute top-4 right-0 flex items-center w-24 sm:w-28 text-2xl">
        <Dropdown floatingArrow inline label={<Avatar img={require('../../../../assets/web_image/admin.png')} rounded={true} />}>
          <Dropdown.Item>
            <Link to={'/manage_revenue'}>Manage Revenue</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={'/manage_feedback'}>Manage Feedback</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={'/manage_storage'}>Manage Storage</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={'/manage_account'}>Manage Account</Link>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              sessionStorage.removeItem('username');
              sessionStorage.removeItem('permission');
            }}
          >
            <Link to={'/signin'}>Sign out</Link>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}

export default AdminHeader;
