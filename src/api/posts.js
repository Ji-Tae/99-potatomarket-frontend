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

//
export{uploadPost};
