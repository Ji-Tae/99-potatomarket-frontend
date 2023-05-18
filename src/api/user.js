import axios from 'axios';
import api from '../axios/api';
import Cookies from 'js-cookie';

const accessToken = Cookies.get('accessToken');
const refreshToken = Cookies.get('refreshToken');

const signupPost = async (newUser) => {
  const response = await api.post(`/api/auth/signup`, newUser);
  return response.data;
};

const idValidationPost = async ({ nickname }) => {
  const response = await api.post(`/api/auth/checkNickname`, { nickname });
  return response.data;
};

const loginPost = async (user) => {
  const response = await api.post(`/api/auth/login`, user);
  return response.data;
};

const goChat = async () => {
  await axios.get(`${process.env.REACT_APP_CHAT_URL}/api/chat`, {
    headers: {
      AccessToken: `Bearer ${accessToken}`,
      RefreshToken: `Bearer ${refreshToken}`,
    },
  });
};
export { signupPost, loginPost, idValidationPost, goChat };
