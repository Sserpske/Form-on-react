import { createStore } from 'redux';

import { userReducer } from './userReducer';

export const configureStore = () => {
  return createStore(userReducer);
};
