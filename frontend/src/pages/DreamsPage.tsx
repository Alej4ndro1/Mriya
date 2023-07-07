import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination/Pagination';
import { DreamCatalog } from '../components/DreamCatalog';
import { Dream } from 'Dreams';
import { getDreams } from '../api/dreams';

export const DreamsPage = () => {
  const [dreams, setDreams] = useState<Dream[]>([]);

  useEffect(() => {
    getDreams()
      .then(dreams => {
        setDreams(dreams);
      });

  }, []);

  console.log(dreams);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    //loadData(page);
  };

  return (
    <div>
      <DreamCatalog dreams={dreams} />
      <Pagination totalPages={10} onPageChange={handlePageChange} />
    </div>
  );
};