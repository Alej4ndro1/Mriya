import React, { useState } from 'react';

type LocationProps = {
  goBack: () => void;
  onSelect: (selectedCities: string[]) => void;
  initialSelectedCities: string[];
};

export const Location: React.FC<LocationProps> = ({ goBack, onSelect, initialSelectedCities }) => {
  const cities = [
    'Cherkasy',
    'Chernihiv',
    'Chernivtsi',
    'Dnipro',
    'Donetsk',
    'Ivano-Frankivsk',
    'Kharkiv',
    'Kherson',
    'Khmelnytskyi',
    'Kropyvnytskyi',
    'Kyiv',
    'Luhansk',
    'Lutsk',
    'Lviv',
    'Mykolaiv',
    'Odesa',
    'Poltava',
    'Rivne',
    'Sevastopol',
    'Sumy',
    'Ternopil',
    'Uzhgorod',
    'Vinnytsia',
    'Zaporizhzhia',
    'Zhytomyr'
  ];

  const [selectedCities, setSelectedCities] = useState<string[]>(initialSelectedCities);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCities((prevSelectedCities) => [...prevSelectedCities, value]);
    } else {
      setSelectedCities((prevSelectedCities) =>
        prevSelectedCities.filter((city) => city !== value)
      );
    }
  };

  const isApplyDisabled = selectedCities.length === 0;

  const handleApplyClick = () => {
    onSelect(selectedCities);
    goBack();
  };

  return (
    <div className='location'>
      <div className='donation-process__navigation'>
        <div className='navigation__back ' onClick={goBack}></div>
        <h3 className='donation-process__navigation__title location__title'>Location</h3>
      </div>

      <div className='location__content'>
        {cities.map((city, index) => (
          <div key={index} className='location__checkbox'>
            <input
              type='checkbox'
              id={`city-${index}`}
              value={city}
              className='location__checkbox__item'
              onChange={handleCheckboxChange}
              checked={selectedCities.includes(city)}
            />
            <label htmlFor={`city-${index}`}>{city}</label>
          </div>
        ))}
      </div>
      <button
        type='submit'
        className='donation-process__donate-button'
        disabled={isApplyDisabled}
        onClick={handleApplyClick}
      >
        Apply
      </button>
    </div>
  );
};