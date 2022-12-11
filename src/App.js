import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbars';
import DemoCarousel from './components/DemoCarousel.js';
import Home from './components/Home';
import Photogallery from './components/Photogallery';

function App() {
  return (
    <div className="App">
     <div><Navbars/></div>
      
      <Home/>
      <Photogallery/>
    </div>
  );
}

export default App;
