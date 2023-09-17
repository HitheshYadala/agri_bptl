import React from "react";
import "../components/Styles/adminPanel.scss";
import { Link } from "react-router-dom";

function AdminPanel() {
  return (
    <div className="adminBody">
      <div className="background"></div>
      <article className="card" id="one">
        <h2>Carousel</h2>
        <ul>
          <Link to="/carouselWorkerUpload" style={{textDecoration:"none"}}>
          <button className="raise">Upload Data</button>
        </Link>

        <Link to="/carouselWorkerDelete" style={{textDecoration:"none"}}>
          <button className="raise">Delete Data</button>
        </Link>
        </ul>
    
      </article>

      <article className="card">
        <h2>Notice board</h2>
        <ul>
          <Link to="/NoticeboardUpload" style={{textDecoration:"none"}}>
          <button className="raise">Upload Data</button>
        </Link>

        <Link to="/noticeboardDelete" style={{textDecoration:"none"}}>
          <button className="raise"> Delete Data</button>
        </Link>
        </ul>
      </article>

      <article className="card">
        <h2>Staff</h2>
        <ul>
          <Link to="/staffUpload" style={{textDecoration:"none"}}>
          <button className="raise">Upload Data</button>
        </Link>

        <Link to="/staffDelete" style={{textDecoration:"none"}}>
          <button className="raise"> Delete Data</button>
        </Link>
        </ul>
      </article>

      <article className="card">
        <h2>Hiringpartner</h2>
        <ul>
          <Link to="/hiringpartnerUpload" style={{textDecoration:"none"}}>
          <button className="raise">Upload Data</button>
        </Link>

        <Link to="/hiringpartnerDelete" style={{textDecoration:"none"}}>
          <button className="raise"> Delete Data</button>
        </Link>
        </ul>
      </article>
      <article className="card">
        <h2>Training & Skills Development</h2>
        <ul>
          <Link to="/trainingUpload" style={{textDecoration:"none"}}>
          <button className="raise">Upload Data</button>
        </Link>

        <Link to="/trainingDelete" style={{textDecoration:"none"}}>
          <button className="raise"> Delete Data</button>
        </Link>
        </ul>
      </article>

      <article className="card">
        <h2>Track Record</h2>
        <ul>
          <Link to="/trackrecordUpload" style={{textDecoration:"none"}}>
          <button className="raise">Upload Data</button>
        </Link>

        <Link to="/trackrecordDelete" style={{textDecoration:"none"}}>
          <button className="raise"> Delete Data</button>
        </Link>
        </ul>
      </article>


      <article className="card">
        <h2>Career</h2>
        <ul>
          <Link to="/careerUpload" style={{textDecoration:"none"}}>
          <button className="raise">Upload Data</button>
        </Link>

        <Link to="/careerDelete" style={{textDecoration:"none"}}>
          <button className="raise"> Delete Data</button>
        </Link>
        </ul>
      </article>

      <article className="card">
        <h2>Exam Calender</h2>
        <ul>
          <Link to="/examcalenderUpload" style={{textDecoration:"none"}}>
          <button className="raise">Upload Data</button>
        </Link>

        <Link to="/examcalenderDelete" style={{textDecoration:"none"}}>
          <button className="raise"> Delete Data</button>
        </Link>
        </ul>
      </article>

      <article className="card">
        <h2>Tender</h2>
        <ul>
          <Link to="/tenderUpload" style={{textDecoration:"none"}}>
          <button className="raise">Upload Data</button>
        </Link>

        <Link to="/tenderDelete" style={{textDecoration:"none"}}>
          <button className="raise"> Delete Data</button>
        </Link>
        </ul>
      </article>


      <article className="card">
        <h2>Photo Gallery</h2>
        <ul>
          <Link to="/photogalleryUpload" style={{textDecoration:"none"}}>
          <button className="raise">Upload Data</button>
        </Link>

        <Link to="/photogalleryDelete" style={{textDecoration:"none"}}>
          <button className="raise"> Delete Data</button>
        </Link>
        </ul>
      </article>


      

          
    </div>
  );
}

export default AdminPanel;
