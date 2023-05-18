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
  return response.data;
};
//중고 매물
const allGoodsGet = async () => {
  const response = await api.get(`/api/posts`);
  return response.data;
};

// 게시글 상세 조회
const getGoodsDetail = async (postId) => {
  const response = await api.get(`/api/posts/${postId}`);
  return response.data;
};

// 관심목록 가져오기
const getLikeList = async (page, limit) => {
  const response = await api.get(`/api/auth/profile/likedProducts?page=${page}&limit=${limit}`, {
    headers: {
      AccessToken: `Bearer ${accessToken}`,
      RefreshToken: `Bearer ${refreshToken}`,
    },
  });
  return response.data;
};

//좋아요 버튼
const likeClickPut = async (postId) => {
  const response = await api.put(`/api/posts/${postId}/likes`, null, {
    headers: {
      AccessToken: `Bearer ${accessToken}`,
      refreshToken: `Bearer ${refreshToken}`,
    },
  });
  console.log(response);
  return response.data;
};

export { uploadPost, allGoodsGet, bestGoodsGet, getGoodsDetail, getLikeList, likeClickPut };
