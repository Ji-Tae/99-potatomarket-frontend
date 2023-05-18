import React from 'react';
import './Paging.css';
import Pagination from 'react-js-pagination';

const Paging = (props) => {
  const { setPage, page, totalPages } = props;

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5}
      totalItemsCount={20}
      pageRangeDisplayed={totalPages}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={handlePageChange}
    />
  );
};

export default Paging;
