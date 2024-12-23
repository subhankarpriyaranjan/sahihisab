import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from './menuItems';

export function SidebarMenu({ onItemClick, currentPath }) {
  return (
    <nav>
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={`flex items-center p-3 mb-2 rounded transition-colors duration-200 ${
            currentPath === item.path
              ? 'bg-blue-600'
              : 'hover:bg-gray-700'
          }`}
        >
          <span className="mr-3">{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}