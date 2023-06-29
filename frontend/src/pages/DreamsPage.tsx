import React, { useState } from 'react';
import Pagination from '../components/Pagination/Pagination';

export const DreamsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    //loadData(page);
  };

  return (
    <div>
      <Pagination totalPages={10} onPageChange={handlePageChange} />
    </div>
  );
};