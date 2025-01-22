import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from './menuItems';

export function SidebarMenu({ onItemClick, currentPath }) {
  return (
    <nav className="space-y-1">
      {menuItems.map((item) => {
        const isActive = currentPath === item.path;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={onItemClick}
            className={`
              group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
              ${isActive 
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30' 
                : 'text-gray-300 hover:bg-gray-700/50'
              }
            `}
          >
            <Icon 
              className={`
                mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200
                ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}
              `}
              aria-hidden="true"
            />
            <div>
              <span className="truncate">{item.label}</span>
              {item.description && (
                <p 
                  className={`
                    text-xs mt-0.5 truncate transition-colors duration-200
                    ${isActive ? 'text-primary-100' : 'text-gray-500 group-hover:text-gray-400'}
                  `}
                >
                  {item.description}
                </p>
              )}
            </div>
            {isActive && (
              <span className="absolute right-2 w-1.5 h-8 bg-primary-300 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
