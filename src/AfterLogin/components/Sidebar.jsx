import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarMenu } from './sidebar/SidebarMenu';
import { CloseButton } from '../common/CloseButton';

function Sidebar({ onClose }) {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-800 text-white h-full">
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <div className="text-xl font-bold">Admin Panel</div>
          <CloseButton onClick={onClose} className="lg:hidden" />
        </div>
        <SidebarMenu onItemClick={onClose} currentPath={location.pathname} />
      </div>
    </aside>
  );
}

export default Sidebar;
