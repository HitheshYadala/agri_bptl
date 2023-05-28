import React, { useState } from "react";
import NewsTicker from "react-advanced-news-ticker";
import "../components/Styles/Hiringpartners.scss";

export default function NoticeBoard() {
  const [data, setData] = useState([
    {
      id: `bulletItem_1`,
      defaultMessage:
        "Pound hovers around $1.24 on growing concern over chaotic Brexit",
    },
    {
      id: `bulletItem_2`,
      defaultMessage: "Why Brexiters do not fully trust Boris Johnson",
    },
    {
      id: `bulletItem_3`,
      defaultMessage: "Johnson is accused of living in fantasy world",
    },
  ]);

  return (
    <div className="notice-board-container">
      <h1 className="Hiring-partners">Notice Board</h1>
      <NewsTicker
        style={{ color: "green", fontWeight: "bold" , margin:"auto", display:"table",width:"100%"}}
        className="news-ticker"
        maxRows={12}
        speed={1000}
        pauseOnHover={true}
        started={() => {
          console.log("react advanced news ticker just started!");
        }}
        paused={() => {
          console.log("react advanced news ticker has been paused.");
        }}
      >
        <div className="news-item space">College day and Hostel day Celebrations 2023 to be held on 29.05.2023</div>
        {/* <div className="news-item space">2nd year engineering results</div>
        <div className="news-item space">3rd year engineering results</div>
        <div className="news-item space">
          University calling for compond wall bond click here
        </div>
        <div className="news-item space">
          Share your ideas for this year fest in Agriculture university
        </div>
        <div className="news-item space">
          4th year engineering supplimentary exams time table
        </div>
        <div className="news-item space">
          Selected candidates for XYZ company please check here
        </div>
        <div className="news-item space">
          Hostel fee structure changed for 2023-24 click here for more details
        </div>
        <div className="news-item space">
          Convocation dates announced click here
        </div> */}

        {console.log(data)}
      </NewsTicker>
    </div>
  );
}
