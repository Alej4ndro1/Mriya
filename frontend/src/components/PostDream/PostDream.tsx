import { PersonalInfo } from '../PersonalInfo';
import React, { useState, useEffect } from 'react';
import { DetailsInfo } from '../DetailsInfo';
import { Photos } from '../Photos';

export const PostDream = () => {
  const [personalInfo, setPersonalInfo] = useState<{
    location: string[];
    fullName: string;
    age: string;
    phone: string;
    email: string;
  } | null>(null);
  const [detailsInfo, setDetailsInfo] = useState<{
    dreamholder: string[];
    dreamHolderType: string[];
    additionalInfo: string;
  } | null>(null);
  const [step, setStep] = useState<number>(1);

  const handlePersonalInfoSubmit = (data: {
    location: string[];
    fullName: string;
    age: string;
    phone: string;
    email: string;
  }) => {
    setPersonalInfo(data);
    setStep(2);
  };

  const handleDetailsInfoSubmit = (data: {
    dreamholder: string[];
    dreamHolderType: string[];
    additionalInfo: string;
  }) => {
    setDetailsInfo(data);
    setStep(3);
  };

  useEffect(() => {
    console.log('Personal Info:', personalInfo);
  }, [personalInfo]);

  useEffect(() => {
    console.log('Details Info:', detailsInfo);
  }, [detailsInfo]);

  return (
    <div className='post-dream'>
      <div className='post-dream__bread-crumps'>
        <div className='post-dream__bread-crumps__item'>Home</div>
        <div className='post-dream__bread-crumps__item'>Post dream</div>
      </div>

      <h3 className='post-dream__title'>Post dream</h3>

      <div className='post-dream__form'>
        <div className='post-dream__form__steps'>
          <p className={`post-dream__form__steps__1 ${step >= 1 ? 'checked' : ''}`}>Personal info</p>
          <p className={`post-dream__form__steps__2 ${step >= 2 ? 'checked' : ''}`}>Details</p>
          <p className={`post-dream__form__steps__3 ${step >= 3 ? 'checked3' : ''}`}>Photos</p>
        </div>

        <p className='post-dream__form__notification'>(*) Mandatory fields</p>

        {step === 1 && (
          <PersonalInfo onContinue={handlePersonalInfoSubmit} />
        )}

        {step === 2 && (
          <DetailsInfo onContinue={handleDetailsInfoSubmit} />
        )}

        {step === 3 && (
          <Photos />
        )}
      </div>
    </div>
  );
};
