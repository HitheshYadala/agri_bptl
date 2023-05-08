import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Admission from "./Pages/Admission";
import Academic from "./Pages/Academic";
import Studentwelfare from "./Pages/Studentwelfare";
import Contactus from "./Pages/Contactus";
import Publications from "./Pages/Publications";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/studentwelfare" element={<Studentwelfare />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
}
export default App;