import api from '../axios/api';
import Cookies from 'js-cookie';

const accessToken = Cookies.get('accessToken');
const refreshToken = Cookies.get('refreshToken');

const uploadPost = async (formData) => {
  const response = await api.post(`/api/posts`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      AccessToken: `Bearer ${accessToken}`,
      RefreshToken: `Bearer ${refreshToken}`,
    },
  });
  return response.data;
};

//인기 매물
const bestGoodsGet = async () => {
  const response = await api.get(`/api/posts/best`);
  return response;
};
//중고 매물
const allGoodsGet = async () => {
  const response = await api.get(`/api/posts`);
  return response.data;
};

// 게시글 상세 조회
const getGoodsDetail = async () => {
  const response = await api.get(`/api/posts/2`);
  return response.data;
};


export { uploadPost, allGoodsGet, bestGoodsGet, getGoodsDetail };