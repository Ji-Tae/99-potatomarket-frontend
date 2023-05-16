import axios from 'axios';

const signupPost = async (newUser) => {
  const respomses = await axios.post(`${process.env.REAT_APP_SERVER_URL}/signup`, newUser);
  return respomses;
};

export { signupPost };