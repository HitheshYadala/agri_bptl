import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
import AdminPanel from "./Pages/AdminPanel";
import CarouselServiceWorker from "./components/adminPages/CarouselServiceWorker";
import CarouselServiceDelete from "./components/adminPages/CarouselServiceDelete"
import NoticeboardUpload from "./components/adminPages/NoticeboardUpload";
import NoticeboardDeleteWorker from "./components/adminPages/NoticeboardDeleteWorker";
import StaffUpload from "./components/adminPages/StaffUpload";
import StaffDelete from "./components/adminPages/StaffDelete";
import HiringpartnerUpload from "./components/adminPages/HiringpartnerUpload";
import HiringpartnerDelete from "./components/adminPages/HiringpartnerDelete";
import TrainingUpload from "./components/adminPages/TrainingUpload";
import TrainingDelete from "./components/adminPages/TrainingDelete";
import TrackrecordUpload from "./components/adminPages/TrackrecordUpload";
import TrackrecordDelete from "./components/adminPages/TrackrecordDelete";
import CareerUpload from "./components/adminPages/CareerUpload";
import CareerDelete from "./components/adminPages/CareerDelete";
import TenderUpload from "./components/adminPages/TenderUpload";
import TenderDelete from "./components/adminPages/TenderDelete";
import ExamcalenderUpload from "./components/adminPages/ExamcalenderUpload";
import ExamcalenderDelete from "./components/adminPages/ExamcalenderDelete";
import PhotogalleryUpload from "./components/adminPages/PhotogalleryUpload";
import PhotogalleryDelete from "./components/adminPages/PhotogalleryDelete";
import NoticeBoardDetails from "./Pages/NoticeBoardDetails";
import NoticeBoard from "./Pages/Noticeboard";
import TendersPage from "./Pages/TendersPage";
import Login from "./Login";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

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
        <Route path="/tendersPage/:id" element={<TendersPage />} />

        <Route path="/noticeBoard" exact element={<NoticeBoard />} />
        <Route path="/noticeBoarddetails/:id" element={<NoticeBoardDetails />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/adminpanel" element={isLoggedIn ? <AdminPanel /> : <Navigate to="/login" />}/>
        <Route exact path="/carouselWorkerUpload" element={isLoggedIn ? <CarouselServiceWorker /> : <Navigate to="/login" />} />
        <Route exact path="/carouselWorkerDelete" element={<CarouselServiceDelete />} />
        <Route exact path="/noticeboardUpload" element={isLoggedIn ? <NoticeboardUpload /> : <Navigate to="/login" />} />  
        <Route exact path="/noticeboardDelete" element={isLoggedIn ? <NoticeboardDeleteWorker/>: <Navigate to="/login" />} />
        <Route exact path="/staffUpload" element={isLoggedIn ? <StaffUpload /> : <Navigate to="/login" />} /> 
        <Route exact path="/staffDelete" element={isLoggedIn ? <StaffDelete />: <Navigate to="/login" />} /> 
        <Route exact path="/hiringpartnerUpload" element={isLoggedIn ? <HiringpartnerUpload /> : <Navigate to="/login" />} />
        <Route exact path="/hiringpartnerDelete" element={isLoggedIn ?<HiringpartnerDelete />: <Navigate to="/login" />} />
        <Route exact path="/trainingUpload" element={isLoggedIn ?<TrainingUpload />: <Navigate to="/login" />} />
        <Route exact path="/trainingDelete" element={isLoggedIn ?<TrainingDelete />: <Navigate to="/login" />} />
        <Route exact path="/trackrecordUpload" element={isLoggedIn ?<TrackrecordUpload />: <Navigate to="/login" />} />
        <Route exact path="/trackrecordDelete" element={isLoggedIn ?<TrackrecordDelete />: <Navigate to="/login" />} />
        <Route exact path="/careerUpload" element={isLoggedIn ?<CareerUpload />: <Navigate to="/login" />} />
        <Route exact path="/careerDelete" element={isLoggedIn ?<CareerDelete />: <Navigate to="/login" />} />
        <Route exact path="/examcalenderUpload" element={isLoggedIn ?<ExamcalenderUpload />: <Navigate to="/login" />} />
        <Route exact path="/examcalenderDelete" element={isLoggedIn ?<ExamcalenderDelete />: <Navigate to="/login" />} />
        <Route exact path="/tenderUpload" element={isLoggedIn ?<TenderUpload />: <Navigate to="/login" />} />
        <Route exact path="/tenderDelete" element={isLoggedIn ?<TenderDelete />: <Navigate to="/login" />} />
        <Route exact path="/photogalleryUpload" element={isLoggedIn ?<PhotogalleryUpload />: <Navigate to="/login" />} />
        <Route exact path="/photogalleryDelete" element={isLoggedIn ?<PhotogalleryDelete />: <Navigate to="/login" />} />

      </Routes>
    </Router>
    </>
  );
}

export const api_url = "https://caebptbackendservices.onrender.com"
export default App;