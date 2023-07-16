import { City } from 'City';
import Select from 'react-select';
import React, { useState } from 'react';

type CitysType = {
  citys: City[]
};

export const SelectDreams: React.FC<CitysType> = ({ citys }) => {
  console.log(citys);

  const [currentCity, setCurrentCity] = useState(1);
  // const [filteredCitys, setFilteredCitys] = useState(citys);

  const getValue = () => {
    return currentCity ? citys.find(city => city.id === currentCity) : '';
  };

  const onChange = (newValue: any) => {
    setCurrentCity(newValue.id);
  };

  return (
    <div className="select__wrapper">
      <div className='dreamCatalog__citySelector'>
        <Select onChange={onChange} value={getValue()} options={citys} />
      </div>
      <div className='dreamCatalog__citySelector'>
        <Select onChange={onChange} value={getValue()} options={citys} />
      </div>
      <div className='dreamCatalog__citySelector'>
        <Select onChange={onChange} value={getValue()} options={citys} />
      </div>
      <div className='dreamCatalog__citySelector'>
        <Select onChange={onChange} value={getValue()} options={citys} />
      </div>
    </div>
  );
};
