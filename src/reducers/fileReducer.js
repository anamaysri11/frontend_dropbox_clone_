

import {
    FETCH_FILES_REQUEST,
    FETCH_FILES_SUCCESS,
    FETCH_FILES_FAILURE,
    UPLOAD_FILE_REQUEST,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_FAILURE,
    DELETE_FILE_REQUEST,
    DELETE_FILE_SUCCESS,
    DELETE_FILE_FAILURE,
  } from '../actions/fileActions';
  
  const initialState = {
    files: [],
    loading: false,
    error: null,
  };
  
  export default function fileReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_FILES_REQUEST:
      case UPLOAD_FILE_REQUEST:
      case DELETE_FILE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_FILES_SUCCESS:
        return {
          ...state,
          loading: false,
          files: action.payload,
        };
      case UPLOAD_FILE_SUCCESS:
        return {
          ...state,
          loading: false,
          files: [action.payload, ...state.files],
        };
      case DELETE_FILE_SUCCESS:
        return {
          ...state,
          loading: false,
          files: state.files.filter((file) => file.id !== action.payload),
        };
      case FETCH_FILES_FAILURE:
      case UPLOAD_FILE_FAILURE:
      case DELETE_FILE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  