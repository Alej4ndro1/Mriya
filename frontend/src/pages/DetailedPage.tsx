import { DonationProcess } from '../components/DonationProcess';
import { Details } from '../components/Details/Details';
import React from 'react';


export const DetailedPage = () => {
  return (
    <div className='detailedPage'>
      <Details />
      <DonationProcess />
    </div>
  );
};