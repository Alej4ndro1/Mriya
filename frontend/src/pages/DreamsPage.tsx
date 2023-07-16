import React, { useEffect, useState } from 'react';
// import Pagination from '../components/Pagination/Pagination';
import { DreamCatalog } from '../components/DreamCatalog';
import { Dream } from 'Dream';
import { City } from 'City';
import { getCitys, getDreams } from '../api/dreams';

export const DreamsPage = () => {
  const [dreams, setDreams] = useState<Dream[]>([]);
  const [citys, setCitys] = useState<City[]>([]);

  useEffect(() => {
    getDreams()
      .then(dreams => {
        setDreams(dreams);
      })
      .catch(err => console.log((err)));

    getCitys()
      .then(citys => {
        setCitys(citys);
      })
      .catch(err => console.log((err)));

  }, []);

  console.log(dreams);
  console.log(citys);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    //loadData(page);
  };

  return (
    <div>
      <DreamCatalog dreams={dreams} citys={citys} />
      {/* <Pagination totalPages={10} onPageChange={handlePageChange} /> */}
    </div>
  );
};