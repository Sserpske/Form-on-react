import { USER } from './constants';

export const setUserInfo = (userInfo) => ({
  type: USER.SET_USER_INFO,
  payload: {
    userInfo
  },
});
