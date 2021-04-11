import { USER } from './constants';

const defaultReducer = {
  userInfo: null,
};

export const userReducer = (state = defaultReducer, { type, payload }) => {
  switch (type) {
    case USER.SET_USER_INFO:
      return {
        ...state,
        userInfo: payload?.userInfo || null,
      };
    default:
      return state;
  }
};
