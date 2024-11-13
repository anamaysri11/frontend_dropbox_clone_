// src/components/Photos.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles } from '../actions/fileActions';
import Loader from './Loader';
import FileItem from './FileItem';

const Photos = () => {
  const dispatch = useDispatch();
  const { files, loading, error } = useSelector((state) => state.fileState);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  // Filter files with image content types
  const photoFiles = files.filter(file => file.content_type.startsWith('image/'));

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="ml-64 p-4 text-red-500">Error: {error}</p>;
  }

  return (
    <div className="ml-64 p-4">
      <h2 className="text-2xl font-semibold mb-4">Photos</h2>
      {photoFiles.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {photoFiles.map((file) => (
            <div key={file.id} className="bg-white shadow rounded overflow-hidden">
              <img src={file.file} alt={file.filename} className="w-full h-48 object-cover" />
              <div className="p-2">
                <p className="text-center text-blue-500 hover:underline">
                  <FileItem file={file} />
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No photos available.</p>
      )}
    </div>
  );
};

export default Photos;
