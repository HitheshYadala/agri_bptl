import React, { useState, useEffect } from "react";
import "../components/Styles/TendersandEvents.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { api_url } from "../App";

function TendersandEvents() {
  const [activeButton, setActiveButton] = useState("tenders");
  const [selected, setSelected] = useState("");
  const [allData, setAllData] = useState({
    tenders: [],
    examCalender: [],
    career: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false);
  const [reRenderCount, setReRenderCount] = useState(0);

  const fetchData = async () => {

    try {
      const [tendersResponse, examCalenderResponse, careersResponse] = await Promise.all([
        axios.get(`${api_url}/tender`),
        axios.get(`${api_url}/examcalender`),
        axios.get(`${api_url}/career`),
      ]);

      setAllData({
        tenders: tendersResponse.data,
        examCalender: examCalenderResponse.data,
        career: careersResponse.data,
      });

      setIsLoading(false);
      setDataFetched(true);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    if (!dataFetched) {
      fetchData(); // Fetch data when the component mounts
    }
  }, [dataFetched]); // Empty dependency array ensures the effect runs only on the initial render

  useEffect(() => {
    if (dataFetched) {
      if (allData.length > 0) {
        // Check if the notices array is not empty
        console.log("Notices have been updated:", typeof allData);
      }
      setReRenderCount((prevCount) => prevCount + 1); // Increment re-render count
    }
  }, []);

  const handleButtonClick = (button) => {

    setActiveButton(button);
    setSelected(button);
  };

  // Filter items based on the end date
  const currentDate = new Date(); // Current date

  const items = allData[activeButton].filter((item) => {
    const endDate = new Date(item.EndDate); // Convert item's end date to a Date object
    return endDate > currentDate; // Include items with end date greater than the current date
  });

  return (
    <>
      <h1 className="Announcements">Announcements</h1>
      <div
        className="boxShadow box_width"
        style={{
          width: "70%",
          height: "auto",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "95%",
              justifyContent: "space-around",
              height: "30px",
              margin: "auto",
            }}
          >
            <button
              className={`raise raisebutton ${
                activeButton === "tenders" ? "active" : ""
              }`}
              style={{ width: "33%" }}
              onClick={() => handleButtonClick("tenders")}
            >
              Tenders
            </button>
            <button
              className={`raise raisebutton ${
                activeButton === "examCalender" ? "active" : ""
              }`}
              style={{ width: "33%"}}
              onClick={() => handleButtonClick("examCalender")}
            >
              Exam Calendar
            </button>
            <button
              className={`raise raisebutton ${
                activeButton === "career" ? "active" : ""
              }`}
              style={{ width: "33%" }}
              onClick={() => handleButtonClick("career")}
            >
              Careers
            </button>
          </div>
        </div>
        <div
          className="items"
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
        >
          <ul>
            {items.map((item) => (
              <li
                style={{
                  listStyleType: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  color: "#0A2451",
                  marginLeft: "45px",
                  fontWeight: "bold",
                  textShadow: "2px 4px 4px rgba(46, 91, 173, 0.6)",
                }}
                className="boxItems"
                key={item._id}
              >
                <Link
                  style={{ cursor: "pointer", textDecoration: "none", marginTop: "10px" }}
                  to={{
                    pathname: `/tendersPage/${item._id + "-" + selected}`,
                  }}
                >
                  {item.Title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TendersandEvents;
