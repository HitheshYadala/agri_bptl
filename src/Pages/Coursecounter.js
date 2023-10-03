import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import "../components/Styles/counter.css";
// import "../components/Styles/custom.css";

function Coursecounter() {
  const [counter, setCounter] = useState(0);
  const [content, setContent] = useState([
    "UG Courses",
    "PG Courses",
    "Ph.D Courses",
    "UG Strength",
    "PG/Ph.D strength",
    "Hostels boys/girls",
  ]);

  const [numbers, setNumbers] = useState(["1", "3", "3", "312", "18", "2"]);

  const [faculty, setFaculty] = useState([
    "Teaching Faculty",
    "Non-Teaching Faculty",
    "B.Tech 1st-Year(B+G)",
    "B.Tech 2nd-year(B+G)",
    "B.Tech 3rd-year(B+G)",
    "B.Tech 4th-year(B+G)"
  ]);

  const [calculations , setCalculations] = useState(["25","31","37","82","55","60"])

  return (
    <>
    <h1 className="trackrecord">Track Record</h1>
      <div className="Vertical blue">
        <div style={{backgroundColor:"#0A2451", color:"whitesmoke"}} className="Column">
          {content.map((item, ind) => {
            const [heading, ...subheadings] = item.split(" ");
            return (
              <div className="Row">
                {subheadings.map((subheading) => (
                  <div className="Counter">
                    <h2 style={{color:"whitesmoke"}} className="Heading">
                      {heading}
                      <div style={{color:"whitesmoke"}} className="Subheading">{subheading}</div>
                    </h2>

                    <h1 style={{color:"wheat"}} className="Count">
                      
                      <CountUp
                        className="count"
                        useEasing={true}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                        scrollSpyDelay={500}
                        start={0}
                        end={numbers[ind]}
                        duration={5}
                        delay={10}
                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                    </h1>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="Vertical white">
        <div style={{color:"whitesmoke"}} className="Column">
          {faculty.map((item, ind) => {
            const [heading, ...subheadings] = item.split(" ");
            return (
              <div className="Row">
                {subheadings.map((subheading) => (
                  <div className="Counter">
                    <h2 className="Heading">
                      {heading}
                      <div className="Subheading">{subheading}</div>
                    </h2>

                    <h1 className="Count">
                      <CountUp
                        className="count"
                        useEasing={true}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                        scrollSpyDelay={500}
                        start={0}
                        duration={5}
                        end={calculations[ind]}
                        delay={10}
                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                    </h1>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Coursecounter;
