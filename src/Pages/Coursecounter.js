import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import "../components/Styles/counter.css";

function Coursecounter() {
  const [counter, setCounter] = useState(0);
  const [content, setContent] = useState([
    "UG Courses",
    "PG Courses",
    "P.hd Courses",
    "UG Strength",
    "PG/P.hd strength",
    "Hostels boys/girls",
  ]);

  const [numbers, setNumbers] = useState(["1", "3", "3", "312", "18", "2"]);

  const [faculty, setFaculty] = useState([
    "Teaching Faculty",
    "Non-Teaching Faculty",
    "B.tech 1st-Year(B+G)",
    "B.tech 2nd-year(B+G)",
    "B.tech 3rd-year(B+G)",
    "B.tech 4th-year(B+G)"
  ]);

  const [calculations , setCalculations] = useState(["25","31","37","82","55","60"])

  return (
    <>
      <div
        style={{
          // display: "flex",
          width: "100%",
          height: "auto",
          backgroundColor: "#0A2451",
          color: "whitesmoke",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {content.map((item, ind) => {
            const [heading, ...subheadings] = item.split(" ");
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {subheadings.map((subheading) => (
                  <div>
                    <h2 style={{ fontSize: "36px", textAlign: "center" }}>
                      {heading}
                      <div style={{ fontSize: "20px" }}>{subheading}</div>
                    </h2>

                    <h1 style={{ textAlign: "center" }}>
                      <CountUp
                        className="count"
                        useEasing={true}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                        scrollSpyDelay={500}
                        start={0}
                        end={numbers[ind]}
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

      <div
        style={{
          // display: "flex",
          width: "100%",
          height: "auto",
          backgroundColor: "whitesmoke",
          color: "#0A2451",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {faculty.map((item, ind) => {
            const [heading, ...subheadings] = item.split(" ");
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {subheadings.map((subheading) => (
                  <div>
                    <h2 style={{ fontSize: "36px", textAlign: "center" }}>
                      {heading}
                      <div style={{ fontSize: "20px" }}>{subheading}</div>
                    </h2>

                    <h1 style={{ textAlign: "center" }}>
                      <CountUp
                        className="count"
                        useEasing={true}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                        scrollSpyDelay={500}
                        start={0}
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
