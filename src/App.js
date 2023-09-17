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

        <Route path="/noticeBoard" exact element={<NoticeBoard />} />
        <Route path="/noticeBoarddetails/:id" element={<NoticeBoardDetails />} />
      </Routes>


      <Routes>
        
      <Route path="/adminpanel" element={<AdminPanel />} />
        <Route exact path="/carouselWorkerUpload" element={<CarouselServiceWorker />} />
        <Route exact path="/carouselWorkerDelete" element={<CarouselServiceDelete />} />
        <Route exact path="/noticeboardUpload" element={<NoticeboardUpload />} />  
        <Route exact path="/noticeboardDelete" element={<NoticeboardDeleteWorker/>} />
        <Route exact path="/staffUpload" element={<StaffUpload />} /> 
        <Route exact path="/staffDelete" element={<StaffDelete />} /> 
        <Route exact path="/hiringpartnerUpload" element={<HiringpartnerUpload />} />
        <Route exact path="/hiringpartnerDelete" element={<HiringpartnerDelete />} />
        <Route exact path="/trainingUpload" element={<TrainingUpload />} />
        <Route exact path="/trainingDelete" element={<TrainingDelete />} />
        <Route exact path="/trackrecordUpload" element={<TrackrecordUpload />} />
        <Route exact path="/trackrecordDelete" element={<TrackrecordDelete />} />
        <Route exact path="/careerUpload" element={<CareerUpload />} />
        <Route exact path="/careerDelete" element={<CareerDelete />} />
        <Route exact path="/examcalenderUpload" element={<ExamcalenderUpload />} />
        <Route exact path="/examcalenderDelete" element={<ExamcalenderDelete />} />
        <Route exact path="/tenderUpload" element={<TenderUpload />} />
        <Route exact path="/tenderDelete" element={<TenderDelete />} />
        <Route exact path="/photogalleryUpload" element={<PhotogalleryUpload />} />
        <Route exact path="/photogalleryDelete" element={<PhotogalleryDelete />} />

      </Routes>

    </Router>
    </>
  );
}
export default App;