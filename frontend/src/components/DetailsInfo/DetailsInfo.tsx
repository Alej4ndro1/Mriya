import { TypeOfHelp } from '../TypeOfHelp';
import { DreamHolderType } from '../DreamHolderType';
import React from 'react';

type DetailsInfoProps = {
  onContinue: (data: {
    dreamholder: string[];
    dreamHolderType: string[];
    additionalInfo: string;
  }) => void;
};

export const DetailsInfo:React.FC<DetailsInfoProps> = ({onContinue}) => {
  const [showDreamHolderType, setshowDreamHolderType] = React.useState(false);
  const [showTypeOhHelp, setShowTypeOfHelp] = React.useState(false);
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>([]);
  const [showError, setShowError] = React.useState(false);
  const [initialSelectedDreamHolderType, setInitialSelectedDreamHolderType] = React.useState<string[]>([]);
  const [selectedDreamHolderType, setSelectedDreamHolderType] = React.useState<string[]>([]);
  const [additionalInfo, setAdditionalInfo] = React.useState('');
  const [additionalInfoTouched, setAdditionalInfoTouched] = React.useState(false);

  const toggleDreamHolderType = () => {
    setshowDreamHolderType(!showDreamHolderType);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) {
      setShowError(true);
      return;
    }

    onContinue({
      dreamholder: selectedDreamHolderType,
      dreamHolderType: selectedTypes,
      additionalInfo,
    });

    setShowError(false);
  };

  const handleDreamHolderTypeSelection = (selectedDreamHolderType: string[]) => {
    setSelectedDreamHolderType(selectedDreamHolderType);
    setInitialSelectedDreamHolderType(selectedDreamHolderType);
  };

  const toggleTypeOfhelp = () => {
    setShowTypeOfHelp(!showTypeOhHelp);
  };

  const handleTypeOfHelpSelection = (selectedTypes: string[]) => {
    setSelectedTypes(selectedTypes);
  };

  const handleAdditionalInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAdditionalInfo(e.target.value);
  };

  const isFormValid =
    selectedTypes.length !== 0 &&
    selectedDreamHolderType.length !== 0 &&
    additionalInfo.trim() !== '';

  return (
    <div className='details-info'>
      <form onSubmit={handleFormSubmit}>
        <div className={`personal-info__location ${showError ? 'invalid' : ''}`}>
          <label className='personal-info__label personal-info__location__label'>Dreamholder type</label>
          <div className='personal-info__location__input' onClick={toggleDreamHolderType}>
            {selectedDreamHolderType.length > 0 ? selectedDreamHolderType.slice(0, 1).join(', ') : 'Choose a dreamholder type'}
          </div>
          {showDreamHolderType && (
            <DreamHolderType
              goBack={() => setshowDreamHolderType(false)}
              onSelect={handleDreamHolderTypeSelection}
              initialSelectedDreamHolderType={initialSelectedDreamHolderType}
            />
          )}
        </div>
        <div className={`personal-info__location ${showError ? 'invalid' : ''}`}>
          <label className='personal-info__label personal-info__location__label'>Type of help</label>
          <div className='personal-info__location__input' onClick={toggleTypeOfhelp}>
            {selectedTypes.length > 0 ? selectedTypes.slice(0, 1).join(', ') : 'Choose a dreamholder type'}
          </div>
          {showTypeOhHelp && (
            <TypeOfHelp
              goBack={() => setShowTypeOfHelp(false)}
              onSelect={handleTypeOfHelpSelection}
              initialSelectedTypes={selectedTypes}
            />
          )}
        </div>
        <p className="donation-process__donation-amount__title non-financial__p">Detailed story of your dream</p>
        <textarea
          name="info"
          id="1"
          cols={90}
          rows={10}
          value={additionalInfo}
          onChange={handleAdditionalInfoChange}
          onFocus={() => setAdditionalInfoTouched(true)}
          onBlur={() => {
            if (additionalInfo.trim() === '') {
              setAdditionalInfo('');
            }
          }}
          className={`non-financial__textarea ${additionalInfoTouched && additionalInfo.length === 0 ? 'invalid' : ''}`}
          placeholder="Please, describe what exact help you you need and what dream you want to come true. This information will help you to get help as soon as possible."
        ></textarea>

        <button className='personal-info__button' disabled={!isFormValid}>
          Continue
        </button>
      </form>
    </div>
  );
};
