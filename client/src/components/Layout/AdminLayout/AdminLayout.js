import { Navigate } from 'react-router-dom';
import AdminHeader from './AdminHeader/AdminHeader';
import AdminSidebar from './AdminSidebar/AdminSidebar';

function AdminLayout({ children }) {
  if (sessionStorage.getItem('permission') === 'admin') {
    return (
      <>
        <AdminHeader />
        <div className="pt-20 sm:pt-20 flex justify-start">
          <AdminSidebar />
          {children}
        </div>
      </>
    );
  } else return <Navigate to={'/signin'} />;
}

export default AdminLayout;
