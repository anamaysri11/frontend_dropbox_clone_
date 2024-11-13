

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Loader from './Loader';

const FileView = () => {
  const { id } = useParams();
  const [fileContent, setFileContent] = useState('');
  const [filename, setFilename] = useState('');
  const [contentType, setContentType] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiBaseUrl = 'http://localhost:8000/api';

  useEffect(() => {
    const fetchFileContent = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiBaseUrl}/files/${id}/`);
        const { filename, content_type, file } = response.data;
        setFilename(filename);
        setContentType(content_type);

        if (['text/plain', 'application/json'].includes(content_type)) {
          const fileResponse = await axios.get(file, {
            responseType: 'text',
          });
          setFileContent(fileResponse.data);
        } else if (content_type.startsWith('image/')) {
          setFileContent(file);
        } else if (content_type === 'application/pdf') {
          setFileContent(file);
        } else {
          setError('Preview not available for this file type.');
        }
      } catch (err) {
        setError('Error fetching file content.');
      } finally {
        setLoading(false);
      }
    };

    fetchFileContent();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="p-4 bg-white shadow rounded ml-64">
        <p className="text-red-500">{error}</p>
        <Link to="/" className="text-blue-500 mt-4 inline-block">
          Back to Files
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white shadow rounded ml-64">
      <h2 className="text-2xl font-semibold mb-4">{filename}</h2>
      {contentType.startsWith('text/') || contentType === 'application/json' ? (
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {fileContent}
        </pre>
      ) : contentType.startsWith('image/') ? (
        <img src={fileContent} alt={filename} className="max-w-full h-auto" />
      ) : contentType === 'application/pdf' ? (
        <object
          data={fileContent}
          type="application/pdf"
          width="100%"
          height="800"
        >
          <p>
            Your browser does not support PDFs. Download the PDF to view it{' '}
            <a
              href={fileContent}
              className="text-blue-500 hover:underline"
              download
            >
              here
            </a>
            .
          </p>
        </object>
      ) : null}
      <Link to="/" className="text-blue-500 mt-4 inline-block">
        Back to Files
      </Link>
    </div>
  );
};

export default FileView;
