import React, { useEffect, useMemo, useState } from 'react';
import { Dream } from '../../types/Dream';
import { DreamCard } from '../DreamCard';
import { SelectDreams } from '../SelectDreams';
import { City } from 'City';
import { getDreams } from '../../api/dreams';

type DreamsType = {
  citys: City[];
};

export type SelectType = {
  value: number;
  label: string;
};

export const DreamCatalog: React.FC<DreamsType> = ({ citys }) => {
  const [dreams, setDreams] = useState<Dream[]>([]);

  const [currentCities, setSelectedCities] = useState([] as SelectType[]);
  const [currentDreams, setCurrentDreams] = useState([] as SelectType[]);
  const [currentSort, setCurrentSort] = useState({} as any);

  const params = useMemo(() => {
    const cities = currentCities.map((city) => city.value);
    const dreams = currentDreams.map((dream) => dream.label);
    const result = {
      cities: cities.join(','),
      filter: dreams.join(','),
      sortBy: currentSort.value,
    };

    return result;
  }, [currentCities, currentDreams, currentSort]);

  useEffect(() => {
    getDreams(params)
      .then((dreams: Dream[]) => {
        setDreams(dreams);
      })
      .catch((err: any) => console.log(err));
  }, [params]);

  return (
    <div className="dreamCatalog">
      <div className="dreamCatalog__container">
        <h1 className="dreamCatalog__title">Dreams</h1>

        <SelectDreams
          citys={citys}
          dreams={dreams}
          setSelectedCities={setSelectedCities}
          setCurrentDreams={setCurrentDreams}
          currentCities={currentCities}
          currentDreams={currentDreams}
          setCurrentSort={setCurrentSort}
          currentSort={currentSort}
        />

        <div className="dreamCatalog__cards">
          {dreams.map((card) => (
            <DreamCard key={card.id} dream={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
