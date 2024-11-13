// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import FileView from './components/FileView';
import Photos from './components/Photos';
import Shared from './components/Shared';
import Documents from './components/Documents';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen ml-64">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FileUpload />
                <FileList />
              </>
            }
          />
          <Route path="/view/:id" element={<FileView />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/documents" element={<Documents />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
