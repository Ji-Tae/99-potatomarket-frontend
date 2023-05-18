import React, { useState } from "react";
import "./Paging.css"
import Pagination from "react-js-pagination";
import { useEffect } from "react";
import axios from "axios";

const Paging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const fetchData = async (page, limit) => {
    try {
      const response = await axios.post(`http://13.209.35.164:3000/api/auth/profile/products?page=${page}&limit=${limit}`);
      const responseData = response.data;
      
      // 받은 데이터를 변수에 할당
      const data = {
        totalPages: responseData.totalPages,
        likedPosts: responseData.likedPosts,
        // 나머지 필요한 데이터 추가
      };

      // 데이터 처리 로직...
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
}, []);

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={4}
      totalItemsCount={20}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;