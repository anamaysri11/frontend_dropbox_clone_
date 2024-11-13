// src/components/Sidebar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  PhotoIcon,
  ShareIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const navLinks = [
    { name: 'All Files', path: '/', icon: HomeIcon },
    { name: 'Photos', path: '/photos', icon: PhotoIcon },
    { name: 'Shared', path: '/shared', icon: ShareIcon },
    { name: 'Documents', path: '/documents', icon: DocumentTextIcon },
    
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <h2 className="text-2xl font-bold p-4">Dropbox Clone</h2>
      <nav className="mt-10">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center py-2.5 px-4 rounded transition duration-200 ${
                isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`
            }
          >
            <link.icon className="w-5 h-5 mr-3" />
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
