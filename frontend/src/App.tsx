import './App.scss';
import './main.scss'
import { Header } from './components/Header/Header';
import { MakeItHappen } from './components/MakeItHappen/MakeItHappen';
import { Ticker } from './components/Ticker/Ticker';


function App() {
  const star = require('./images/icons/stars.png');
  return (
    <div className="page">
      <Header />
      <MakeItHappen />
      <Ticker imageSrc={star} word="DREAM" />
    </div>
  );
}

export default App;
