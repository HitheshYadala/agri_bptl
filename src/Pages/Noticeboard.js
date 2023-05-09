import React, { useState } from "react";
import NewsTicker from "react-advanced-news-ticker";
import "../components/Styles/Hiringpartners.scss"

export default function Events() {
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
    <>
    
    <div>
    <h1 className="Hiring-partners" style={{paddingLeft:"28px", textAlign:"left", paddingTop:"10px"}}>Notice Board</h1>
      <NewsTicker
        style={{
          color: "green",
          fontWeight: "bold",
          // float:"left",
          textAlign: "left",
          paddingBottom: "10px",
          paddingTop: "20px",
          marginTop: "20px",
          zindex: "1",
        }}
        className="myClassName1"
        maxRows={12}
        // duration={15}
        //   hasMoved = {this.updateInfos}
        speed={1000}
        pauseOnHover={true}
        started={() => {
          console.log("react advanced news ticker just started!");
        }}
        paused={() => {
          console.log("react advanced news ticker has been paused.");
        }}
      >
        <div style={{ padding: "5px 0px 5px 0px" }} className="space">
          1st year Engineering results
        </div>
        <div style={{ padding: "5px 0px 5px 0px" }} className="space">
          2nd year engineering results
        </div>
        <div style={{ padding: "5px 0px 5px 0px" }} className="space">
          3rd year engineering results
        </div>
        <div style={{ padding: "5px 0px 5px 0px" }} className="space">
          University calling for compond wall bond click here
        </div>
        <div style={{ padding: "5px 0px 5px 0px" }} className="space">
          Share your ideas for this year fest in Agriculture university
        </div>
        <div style={{ padding: "5px 0px 5px 0px" }} className="space">
          4th year engineering supplimentary exams time table
        </div>
        <div style={{ padding: "5px 0px 5px 0px" }} className="space">
          Selected candidates for XYZ company please check here
        </div>
        <div style={{ padding: "5px 0px 5px 0px" }} className="space">
          Hostel fee structure changed for 2023-24 click here for more details
        </div>
       
        <div style={{ padding: "5px 0px 5px 0px" }} className="space">
          Convocation dates announced click here
        </div>

        {console.log(data)}
      </NewsTicker>
    </div>
    </>
  );
}
