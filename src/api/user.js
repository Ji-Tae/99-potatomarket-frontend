import api from '../axios/api';

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
export { signupPost, loginPost, idValidationPost };
