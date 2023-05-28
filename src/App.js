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
import ScrollToTopButton from "./Pages/ScrolltoTop";
import IndividualDeansMessage from "./Pages/IndividualDeansMessage";

function App() {
  return (
    <>

<div>
      {/* your app content here */}
      <ScrollToTopButton />
    </div>
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
        <Route path="/individualPage" element={<IndividualDeansMessage />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;