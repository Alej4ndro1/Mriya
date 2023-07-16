import React, { useState } from 'react';
import { Dream } from '../../types/Dream';
import { DreamCard } from '../DreamCard';
import { SelectDreams } from '../SelectDreams';
import { City } from 'City';

type DreamsType = {
  citys: City[],
  dreams: Dream[],
};

export const DreamCatalog: React.FC<DreamsType> = ({ citys, dreams }) => {
  // console.log(citys);
  // console.log(dreams);
  
  // const [currentPage, setCurrentPage] = useState(1);
  // const [DreamsPerPage, setDreamsPerPage] = useState(9);

  // const lastDreamIndex = currentPage * DreamsPerPage;
  // const firstDreamIndex = lastDreamIndex - DreamsPerPage;
  // const currentDream = dreams.slice(firstDreamIndex, lastDreamIndex);

  return (
    <div className='dreamCatalog'>
      <div className='dreamCatalog__container'>
        <h1 className='dreamCatalog__title'>Dreams</h1>

        <SelectDreams citys={citys} />

        <div className='dreamCatalog__cards'>
          {dreams.map(card =>
            <DreamCard key={card.id} dream={card} />)
          }
        </div>

      </div>
    </div >
  );
};