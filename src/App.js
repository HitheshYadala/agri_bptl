import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbars';
import Home from './components/Home';
import Photogallery from './components/Photogallery';
import Deans from './components/Deans';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import HistoricalBackground from "../src/components/pages/Historicalbackground"
import VisionandMandate from './components/pages/VisionandMandate';
import OrganizationalStructure from './components/pages/OrganizationalStructure';
import StatusofAccredation from './components/pages/StatusofAccredation';
import Administration from "./components/pages/Administration"

function App() {
  return (
    <Router>
    <div className="App">
        <Navbars/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/HistoricalBackground" element={<HistoricalBackground/>}/>
            <Route path="/Vision & Mandate" element={<VisionandMandate/>}/>
            <Route path="/Organizational Structure" element={<OrganizationalStructure/>}/>
            <Route path="/Status Of Accredation" element={<StatusofAccredation/>}/>
            <Route path="/Administration" element={<Administration/>}/>
          </Routes>
      
      {/* <Deans/> */}
        {/* <div className="header-carousel">
          <div className="header-sec">
            <Photogallery/>
          </div>
        </div> */}
    </div>
    </Router>
  );
}

export default App;
