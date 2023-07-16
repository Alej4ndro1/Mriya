import React, { useState, useEffect } from 'react';
import axios from 'axios';

type LocationProps = {
  goBack: () => void;
  onSelect: (selectedCities: string[]) => void;
  initialSelectedCities: string[];
};

export const Location: React.FC<LocationProps> = ({ goBack, onSelect, initialSelectedCities }) => {
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>(initialSelectedCities);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://35.204.183.215:80/api/city');
        if (response.status !== 200) {
          throw new Error('Failed to fetch cities');
        }
        const citiesData = response.data.map((city: { id: number; name: string }) => city.name);
        setCities(citiesData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch cities');
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

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

  if (isLoading) {
    return <p>Loading cities...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='location'>
      <div className='donation-process__navigation'>
        <div className='navigation__back' onClick={goBack}></div>
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
