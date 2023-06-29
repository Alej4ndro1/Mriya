import React, { useState } from 'react';
import Pagination from '../components/Pagination/Pagination';
import { DreamCatalog } from '../components/DreamCatalog';

export const DreamsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    //loadData(page);
  };

  return (
    <div>
      <DreamCatalog />
      <Pagination totalPages={10} onPageChange={handlePageChange} />
    </div>
  );
};