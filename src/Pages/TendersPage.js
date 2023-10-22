import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { api_url } from "../App";
import LazyLoad from 'react-lazyload';



function TendersPage() {
  const { id } = useParams();

  const parts = id.split("-");

  const item_id = parts[0];
  const activeButton = parts[1] || "tenders";

  const [tenders, setTenders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (activeButton === "tenders" && activeButton !== null) {
      fetchTenders();
    }

    if (activeButton === "examCalender" && activeButton !== null) {
      fetchExamCalender();
    }

    if (activeButton === "career" && activeButton !== null) {
      fetchCareers();
    }
  }, []);

  const isPdf = (item) => {
    return item.startsWith("JVBERi");
  };

  const isImage = (item) => {
    return (
      item.startsWith("iVBORw0KGgo") || // PNG
      item.startsWith("/9j/4AAQSkZJRgABAQAAAQABAAD/") || // JPEG
      item.startsWith("R0lGODlh") || // GIF
      item.startsWith("BM") || // BMP
      item.startsWith("WEBP")
    ); // WebP;
  };

  function openBase64ImageInNewTab(base64Image,title) {
    var newWindow = window.open();
    newWindow.document.write(
      "<iframe src='data:application/pdf;base64," +
        base64Image +
        "width='100%' height='100%' download='"+title+".pdf'></iframe>"
    );
  }

  const fetchTenders = async () => {
    try {
      const response = await axios.get(`${api_url}/tender/${item_id}`);
      setTenders(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error.message);
    }
  };

  const fetchExamCalender = async () => {
    try {
      const response = await axios.get(`${api_url}/examcalender/${item_id}`);
      setTenders(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error.message);
    }
  };

  const fetchCareers = async () => {
    try {
      const response = await axios.get(`${api_url}/career/${item_id}`);
      setTenders(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error.message);
    }
  };

  return (
    <>
      {isLoading === false ? (
        tenders.length !== 0 || tenders !== undefined ? (
          <div className="TendersFloat">
            <div style={{ margin: "40px" }}>
              <h1 className="Announcements" style={{ textAlign: "center" }}>
                {tenders.Title}
              </h1>
              <div className="DateContainer">
                <h4 style={{ color: "green" }}>
                  StartDate: {tenders.StartDate?.slice(0, 10)}
                </h4>
                <h4 style={{ color: "red" }}>
                  EndDate: {tenders.EndDate?.slice(0, 10)}
                </h4>
              </div>
              <div className="descriptionContainer">
                <h5>{tenders.Description}</h5>
              </div>
              {/* <img
                className="imgContainer"
                src={`data:image/jpeg;base64,${tenders.Image}`}
                style={{ display: "block", margin: "0 auto" }}
              /> */}

{isPdf(tenders.Image) ? (
  <>
    <a
      href="#"
      style={{ margin: "20px" }}
      onClick={() => openBase64ImageInNewTab(tenders.Image, tenders.Title)}
    >
      <button style={{ display: "block", margin: "0 auto" }}>Open in a new Tab</button>
    </a>

    <a
        href={`data:application/pdf;base64,${tenders.Image}`}
        download={`${tenders.Title}.pdf`}
        style={{ display: "flex", margin: "0 auto" }}
      >
        <button style={{ display: "block", margin: "0 auto" }}>Download</button>
      </a>
      <h4 style={{color:"red",textAlign:"center", padding: "10 auto"}}>If the Image / Pdf is not loaded please DOWNLOAD it</h4>

    <LazyLoad height={700} offset={100}>
      <object
        style={{ display: "block", margin: "0 auto" }}
        data={`data:application/pdf;base64,${tenders.Image}`}
        width="100%"
        height="700px"
        type="application/pdf"
      ></object>
      
    </LazyLoad>
  </>
) : isImage(tenders.Image) ? (
  <LazyLoad height={200} offset={100}>
    <img
      style={{ display: "block", margin: "0 auto" }}
      src={`data:image/png;base64,${tenders.Image}`}
      alt="Tender Image"
    />
    <a
      href={`data:image/png;base64,${tenders.Image}`}
      download="tenderImage.png"
      style={{ display: "block", margin: "0 auto" }}
    >
      <button>Download</button>
    </a>
  </LazyLoad>
) : null}
            </div>
          </div>
        ) : (
          <h3>No Data Found</h3>
        )
      ) : (
        <h3 style={{ textAlign: "center" }}>Loading...</h3>
      )}
    </>
  );
}

export default TendersPage;
