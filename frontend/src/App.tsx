import './App.scss';
import './main.scss'
import { Header } from './components/Header/Header';
import { MakeItHappen } from './components/MakeItHappen/MakeItHappen';
import { Ticker } from './components/Ticker/Ticker';
import { Footer } from './components/Footer';


function App() {
  const star = require('./images/icons/stars.png');
  return (
    <div className="page">
      <Header />
      <MakeItHappen />
      <Ticker imageSrc={star} word="DREAM" />
      <Footer />
    </div>
  );
}

export default App;
