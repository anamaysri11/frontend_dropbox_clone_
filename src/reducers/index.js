// // src/reducers/index.js

// import { combineReducers } from 'redux';
// import fileReducer from './fileReducer';

// export default combineReducers({
//   files: fileReducer,
// });

// src/reducers/index.js

import { combineReducers } from 'redux';
import fileReducer from './fileReducer';

export default combineReducers({
  fileState: fileReducer,
});
