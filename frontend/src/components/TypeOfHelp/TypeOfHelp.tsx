import React, { useState } from 'react';

type TypeOfHelpProps = {
  goBack: () => void;
  onSelect: (selectedTypes: string[]) => void;
  initialSelectedTypes: string[];
};

export const TypeOfHelp: React.FC<TypeOfHelpProps> = ({ goBack, onSelect, initialSelectedTypes }) => {
  const typeOfHelp = [
    'Transportation help',
    'Shelter needed',
    'Humanitarian aid',
    'Ordinary dreams',
    'House rebuilding',
    'Medical help',
    'Nursing',
    'Other'
  ];

  const [selectedTypes, setSelectedTypes] = useState<string[]>(initialSelectedTypes);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedTypes((prevSelectedTypes) => [...prevSelectedTypes, value]);
    } else {
      setSelectedTypes((prevSelectedTypes) =>
        prevSelectedTypes.filter((type) => type !== value)
      );
    }
  };

  const isApplyDisabled = selectedTypes.length === 0;

  const handleApplyClick = () => {
    onSelect(selectedTypes);
    goBack();
  };

  return (
    <div className='type-of-help '>
      <div className='donation-process__navigation'>
        <div className='navigation__back' onClick={goBack}></div>
        <h3 className='donation-process__navigation__title location__title type-of-help__h'>Type of help</h3>
      </div>

      <div className='location__content'>
        {typeOfHelp.map((help, index) => (
          <div key={index} className='location__checkbox'>
            <input
              type='checkbox'
              id={`help-${index}`}
              value={help}
              className='location__checkbox__item'
              onChange={handleCheckboxChange}
              checked={selectedTypes.includes(help)}
            />
            <label htmlFor={`help-${index}`}>{help}</label>
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
