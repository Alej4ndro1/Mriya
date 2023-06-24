import React from 'react';
import './App.scss';
import './main.scss';
import { Header } from './components/Header/Header';
import { MakeItHappen } from './components/MakeItHappen/MakeItHappen';
import { Ticker } from './components/Ticker/Ticker';
import { Footer } from './components/Footer';
import star from './images/icons/stars.png';
import { JustJoinTheProcess } from './components/JustJoinTheProcess/JustJoinTheProcess';
import hand from './images/icons/hand-icon.png';
import { DreamHolder } from './components/DreamHolder/';

function App() {
  return (
    <div className="page">
      <Header />
      <MakeItHappen />
      <Ticker imageSrc={star} word="DREAM" />
      <JustJoinTheProcess />
      <Ticker imageSrc={hand} word="HELP" />
      <DreamHolder />
      <Footer />
    </div>
  );
}

export default App;
