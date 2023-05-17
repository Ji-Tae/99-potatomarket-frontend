import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

const signupPost = async (newUser) => {
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/auth/signup`, newUser);
  console.log(response);
  return response.data;
};

const idValidationPost = async ({ nickname }) => {
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/auth/checkNickname`, { nickname });
  console.log(response);
  return response.data;
};

const loginPost = async (user) => {
  const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`, user);
  console.log(response);
  return response.data;
};
export { signupPost, loginPost, idValidationPost };
