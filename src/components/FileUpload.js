// src/components/FileUpload.js

import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uploadFile } from '../actions/fileActions';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = [
        'text/plain',
        'application/json',
        'image/png',
        'image/jpeg',
        'application/pdf',
      ];
      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
      } else {
        alert('File type not supported.');
        setSelectedFile(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      setUploading(true);
      await dispatch(uploadFile(selectedFile));
      setSelectedFile(null);
      setUploading(false);
      // Reset the file input
      fileInputRef.current.value = '';
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="p-4 bg-white shadow rounded mb-4 ml-64">
      <div className="flex items-center">
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Choose File
        </button>
        <span className="ml-4">
          {selectedFile ? selectedFile.name : 'No file selected'}
        </span>
      </div>
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        accept=".txt,.json,.png,.jpg,.jpeg,.pdf"
        ref={fileInputRef}
      />
      <button
        onClick={handleSubmit}
        className={`mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition ${
          !selectedFile || uploading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={!selectedFile || uploading}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default FileUpload;
