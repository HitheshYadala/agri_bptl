import React, { useState, useEffect } from "react";
// import "../components/Styles/Hiringpartners.scss";
import axios from "axios";
import { Link } from 'react-router-dom';
import { api_url } from "../App";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataArr, setDataArr] = useState([]);
  const [reRenderCount, setReRenderCount] = useState(0);



  const handleMouseOver = () => {
    marqueeRef.current.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.current.start();
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only on the initial render

  const marqueeRef = React.createRef();

  const fetchData = async () => {

    try {
      // Fetch data for carousel and noticeboard
      const noticeboardResponse = await axios.get(`${api_url}/noticeboard`);
      const allData = noticeboardResponse.data;
      setDataArr(allData);

      // Extract the titles and set them in the notices array
      const noticeSet = allData.map((item) => item.Title);
      setNotices(noticeSet);
      setIsLoading(false);

      // Save notices in localStorage
      localStorage.setItem("notices", JSON.stringify(noticeSet));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div className="notice-board-container">
      <h1 className="Hiring-partners">Notice Board</h1>
      <div className="box">
        <marquee
          height="300"
          width="75%"
          behavior="scroll"
          direction="up"
          scrollamount="4"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          ref={marqueeRef}
          style={{ marginLeft: "50px", color: "#007CC7" }}
        >
          <ul>
            {dataArr.map((item, index) => (
              <li key={index}>
                <Link style={{ textDecoration: "none", fontWeight: "bold", color: "orange" }} to={`/noticeBoarddetails/${item._id}`}>
                  {item.Title}
                </Link>
              </li>
            ))}
          </ul>
        </marquee>
      </div>

    </div>
  );
};

export default NoticeBoard;
