import React, { useState, useEffect } from 'react';
import axios from 'axios';

type DreamHolderType = {
  goBack: () => void;
  onSelect: (initialSelectedDreamHolderType: string[]) => void;
  initialSelectedDreamHolderType: string[];
};

export const DreamHolderType: React.FC<DreamHolderType> = ({ goBack, onSelect, initialSelectedDreamHolderType }) => {
  const [dreams, setDream] = useState<string[]>([]);
  const [selectedDreams, setSelectedDreams] = useState<string[]>(initialSelectedDreamHolderType);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://35.204.183.215:80/api/category/parents/1/children');
        if (response.status !== 200) {
          throw new Error('Failed to fetch dreamHolders');
        }
        const dreamsData = response.data.map((dream: { id: number; name: string }) => dream.name);
        setDream(dreamsData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch dreamHolders');
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedDreams((prevSelectedDreams) => [...prevSelectedDreams, value]);
    } else {
      setSelectedDreams((prevSelectedDreams) =>
        prevSelectedDreams.filter((dream) => dream !== value)
      );
    }
  };

  const isApplyDisabled = selectedDreams.length === 0;

  const handleApplyClick = () => {
    onSelect(selectedDreams);
    goBack();
  };

  if (isLoading) {
    return <p>Loading dreamholders...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='location'>
      <div className='donation-process__navigation'>
        <div className='navigation__back' onClick={goBack}></div>
        <h3 className='donation-process__navigation__title location__title'>Dreamholder</h3>
      </div>

      <div className='location__content'>
        {dreams.map((dream, index) => (
          <div key={index} className='location__checkbox'>
            <input
              type='checkbox'
              id={`city-${index}`}
              value={dream}
              className='location__checkbox__item'
              onChange={handleCheckboxChange}
              checked={selectedDreams.includes(dream)}
            />
            <label htmlFor={`dream-${index}`}>{dream}</label>
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
