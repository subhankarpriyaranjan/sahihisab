import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SidebarMenu } from './sidebar/SidebarMenu';
import { CloseButton } from '../common/CloseButton';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

function Sidebar({ onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Navigate to login page
    navigate('/login');
    // Optional: Refresh the page to clear any cached data
    window.location.reload();
  };

  return (
    <aside className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 flex-grow">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xl font-bold">Admin Panel</div>
          <CloseButton onClick={onClose} className="lg:hidden" />
        </div>
        <SidebarMenu onItemClick={onClose} currentPath={location.pathname} />
      </div>
      
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center w-full p-4 text-left text-gray-300 hover:bg-gray-700 transition-colors duration-200 border-t border-gray-700"
      >
        <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;
