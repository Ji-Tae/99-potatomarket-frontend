import axios from "axios"

const uploadPost = async(formData) => {
  const response = await axios.post(
    `${process.env.REAT_APP_SERVER_URL}/api/posts`,formData,{
      headers:{
        "Content-Type": 'multipart/form-data',
        Authorization: `Bearer`,
        refreshToken : `Bearer`
      }
    }
  ) 
  return response
} 

// 게시글 상세 조회
// const getGoodsDetail = async () => {
//   const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/posts/:post_id`, { withCredentials: true });
//   return response.data;
// };

// const getGoodsDetail = async () => {
//   const response = await axios.get("http://13.209.35.164:3000//api/posts/2");
//   return response;
// };

export{uploadPost};

