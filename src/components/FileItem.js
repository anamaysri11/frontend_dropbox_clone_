// src/components/FileItem.js

import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteFile } from '../actions/fileActions';
import { Menu, Transition } from '@headlessui/react';
import {
  ArrowDownTrayIcon,    
  TrashIcon,
  EllipsisVerticalIcon 
} from '@heroicons/react/24/outline'; 
import ReactTooltip from 'react-tooltip';

const FileItem = ({ file }) => {
  const dispatch = useDispatch();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${file.filename}"?`);
    if (confirmDelete) {
      setDeleting(true);
      await dispatch(deleteFile(file.id));
      setDeleting(false);
    }
  };

  const getFileIcon = (contentType) => {
    const type = contentType.split('/')[1];
    return `/icons/${type}.svg`;
  };

  return (
    <tr className="hover:bg-gray-100 transition duration-200 ease-in-out">
      {/* Filename and Icon */}
      <td className="py-2 px-4 flex items-center">
        {/* File Type Icon with Tooltip */}
        <img
          src={getFileIcon(file.content_type)}
          alt={`${file.content_type.split('/')[1]} icon`}
          className="w-6 h-6 mr-2"
          data-tip={file.content_type}
        />
        <ReactTooltip place="top" type="dark" effect="solid" />
        {/* Clickable File Name */}
        <Link
          to={`/view/${file.id}`}
          className="text-blue-500 hover:underline transition duration-200 ease-in-out"
        >
          {file.filename}
        </Link>
      </td>

      {/* Uploaded At */}
      <td className="py-2 px-4 text-center">
        {new Date(file.uploaded_at).toLocaleString()}
      </td>

      {/* Actions Dropdown */}
      <td className="py-2 px-4 text-center">
        <Menu as="div" className="relative inline-block text-left">
          {/* Menu Button */}
          <Menu.Button className="flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out focus:outline-none">
            <EllipsisVerticalIcon className="w-5 h-5" /> {/* Updated Icon */}
          </Menu.Button>

          {/* Menu Items with Transition */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none z-10">
              {/* Download Option */}
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={`http://localhost:8000/api/download/${file.id}/`}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } flex items-center px-4 py-2 text-sm text-gray-700 transition duration-200 ease-in-out`}
                    data-tip="Download File"
                  >
                    <ArrowDownTrayIcon className="w-5 h-5 mr-2" /> {/* Updated Icon */}
                    Download
                  </a>
                )}
              </Menu.Item>

              {/* Delete Option */}
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleDelete}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } flex items-center w-full px-4 py-2 text-sm text-red-600 transition duration-200 ease-in-out`}
                    disabled={deleting}
                    data-tip={deleting ? "Deleting..." : "Delete File"}
                  >
                    <TrashIcon className="w-5 h-5 mr-2" />
                    {deleting ? 'Deleting...' : 'Delete'}
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <ReactTooltip place="top" type="dark" effect="solid" />
      </td>
    </tr>
  );
};

export default FileItem;
