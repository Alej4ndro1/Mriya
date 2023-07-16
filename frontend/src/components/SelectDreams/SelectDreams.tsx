import { City } from 'City';
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import { Dream } from 'Dream';
import { SelectType } from '../DreamCatalog/DreamCatalog';

type Props = {
  citys: City[];
  dreams: Dream[];
  setSelectedCities: React.Dispatch<React.SetStateAction<SelectType[]>>;
  currentCities: SelectType[];
  setCurrentDreams: React.Dispatch<React.SetStateAction<SelectType[]>>;
  currentDreams: SelectType[];
  setCurrentSort: any;
  currentSort: any;
};

export const SelectDreams: React.FC<Props> = ({
  citys,
  dreams,
  currentCities,
  setSelectedCities,
  setCurrentDreams,
  currentDreams,
  setCurrentSort,
  currentSort,
}) => {
  const selectCities: SelectType[] = citys.map((city) => ({
    value: city.id,
    label: city.name,
  }));
  const selectDreams: SelectType[] = dreams.map((dream) => ({
    value: dream.id,
    label: dream.name,
  }));

  const sortList: { value: string; label: string }[] = [
    { value: 'id:ASC', label: 'Id (new first)' },
    { value: 'id:DESC', label: 'Id (old first)' },
  ];

  return (
    <div className="select__wrapper">
      <div className="dreamCatalog__citySelector">
        <Select
          isMulti
          value={currentCities}
          onChange={(e) => {
            setSelectedCities(e as SelectType[]);
          }}
          options={selectCities}
        />
      </div>
      <div className="dreamCatalog__citySelector">
        <Select
          isMulti
          onChange={(e: any) => {
            setCurrentDreams(e);
          }}
          value={currentDreams}
          options={selectDreams}
        />
      </div>

      <div className="dreamCatalog__citySelector">
        <Select
          onChange={(e: any) => setCurrentSort(e)}
          value={currentSort}
          options={sortList}
        />
      </div>
      {/*
      <div className="dreamCatalog__citySelector">
        <Select onChange={onChange} value={getValue()} options={citys} />
      </div> */}
    </div>
  );
};
