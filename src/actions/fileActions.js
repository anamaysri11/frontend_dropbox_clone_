
import axios from 'axios';

const apiBaseUrl = 'http://localhost:8000/api';

export const FETCH_FILES_REQUEST = 'FETCH_FILES_REQUEST';
export const FETCH_FILES_SUCCESS = 'FETCH_FILES_SUCCESS';
export const FETCH_FILES_FAILURE = 'FETCH_FILES_FAILURE';

export const UPLOAD_FILE_REQUEST = 'UPLOAD_FILE_REQUEST';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILURE = 'UPLOAD_FILE_FAILURE';

export const DELETE_FILE_REQUEST = 'DELETE_FILE_REQUEST';
export const DELETE_FILE_SUCCESS = 'DELETE_FILE_SUCCESS';
export const DELETE_FILE_FAILURE = 'DELETE_FILE_FAILURE';


export const fetchFiles = () => async (dispatch) => {
  dispatch({ type: FETCH_FILES_REQUEST });
  try {
    const response = await axios.get(`${apiBaseUrl}/files/`);
    dispatch({ type: FETCH_FILES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_FILES_FAILURE, payload: error.message });
  }
};

export const uploadFile = (file) => async (dispatch) => {
  dispatch({ type: 'UPLOAD_FILE_REQUEST' });

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(`${apiBaseUrl}/upload/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    dispatch({ type: 'UPLOAD_FILE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPLOAD_FILE_FAILURE', payload: error.message });
  }
};

export const deleteFile = (id) => async (dispatch) => {
    dispatch({ type: DELETE_FILE_REQUEST });
    try {
      await axios.delete(`${apiBaseUrl}/files/${id}/delete/`);
      dispatch({ type: DELETE_FILE_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: DELETE_FILE_FAILURE, payload: error.message });
    }
  };

