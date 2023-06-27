import { Ticker } from '../components/Ticker';
import { MakeItHappen } from '../components/MakeItHappen';
import React from 'react';
import { JustJoinTheProcess } from '../components/JustJoinTheProcess';
import { DreamHolder } from '../components/DreamHolder';
import { Bonuses } from '../components/Bonuses';
import hand from '../images/icons/hand-icon.png';
import coin from '../images/icons/coin.png';
import heart from '../images/icons/full-filled-heart.png';
import star from '../images/icons/stars.png';

export const MainPage = () => {
  return (
    <>
      <MakeItHappen />
      <Ticker imageSrc={star} word="DREAM" />
      <JustJoinTheProcess />
      <Ticker imageSrc={hand} word="HELP" />
      <DreamHolder />
      <Ticker imageSrc={coin} word="DONATE" />
      <Bonuses />
      <Ticker imageSrc={heart} word="LOVE" />
    </>
  );
};