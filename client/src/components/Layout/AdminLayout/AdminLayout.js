import Header from './AdminHeader/AdminHeader';
import AdminSidebar from './AdminSidebar/AdminSidebar';

function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="pt-20 sm:pt-20 flex justify-start">
        <AdminSidebar />
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
