import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { api_url } from "../App";

function TendersPage() {
  const { id } = useParams();

  const parts = id.split("-");

  const item_id = parts[0];
  const activeButton = parts[1];

  const [tenders, setTenders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("ACTIVE PAGE", activeButton);
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
              <h1  className="Announcements" style={{ textAlign: "center" }}>{tenders.Title}</h1>
              <div className="DateContainer">
                <h4 style={{ color: "green" }}>StartDate: {tenders.StartDate.slice(0, 10)}</h4>
                <h4 style={{ color: "red" }}>
                  EndDate: {tenders.EndDate.slice(0, 10)}
                </h4>
                {console.log("SELECTED", tenders)}
              </div>
              <div className="descriptionContainer">
                <h5>{tenders.Description}</h5>
              </div>
              <img
                className="imgContainer"
                src={`data:image/jpeg;base64,${tenders.Image}`}
                style={{ display: "block", margin: "0 auto" }}
              />
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
