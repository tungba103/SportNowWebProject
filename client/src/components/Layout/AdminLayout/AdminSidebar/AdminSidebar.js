import { Sidebar } from 'flowbite-react';
import { ArchiveBoxIcon, ChartBarSquareIcon, ChatBubbleOvalLeftIcon, UsersIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <Sidebar className="sr-only sm:not-sr-only">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={ChartBarSquareIcon} className="cursor-pointer">
            <Link to={'/manage_revenue'}>Manage Revenue</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={ChatBubbleOvalLeftIcon} className="cursor-pointer">
            <Link to={'/manage_feedback'}>Manage Feedback</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={ArchiveBoxIcon} className="cursor-pointer">
            <Link to={'/manage_storage'}>Manage Storage</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={UsersIcon} className="cursor-pointer">
            <Link to={'/manage_account'}>Manage Account</Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default AdminSidebar;
