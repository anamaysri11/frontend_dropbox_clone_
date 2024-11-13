// src/components/FileList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles } from '../actions/fileActions';
import Loader from './Loader';
import FileItem from './FileItem';

const FileList = () => {
  const dispatch = useDispatch();
  const { files, loading, error } = useSelector((state) => state.fileState);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-4">All Files</h2>
      {files.length > 0 ? (
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="py-3 px-4 text-left">Filename</th>
              <th className="py-3 px-4">Uploaded At</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {files.map((file) => (
              <FileItem key={file.id} file={file} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No files uploaded yet.</p>
      )}
    </div>
  );
};

export default FileList;
