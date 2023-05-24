// import React, { useState } from "react";
import React, { useEffect, useState } from 'react';
import "../components/Styles/Aboutus.css";
import tableImg from "../assets/TableImg.png";
import img1 from "../assets/Image1.jpeg";
import img2 from "../assets/Image2.jpeg";
import organizationstructure from "../assets/Organizationstructure.png";
import { Document, Page } from "react-pdf";
import icarnotification from "../assets/ICAR Notification.pdf";
import SSRCollege from "../assets/SSRCollege.pdf";
import SSR_Btech from "../assets/SSR_Btech.pdf";
import SSR_Mtech from "../assets/SSR_Mtech.pdf";
import SSR_phd from "../assets/SSR_Phd.pdf";
import { BiArrowToBottom , BiItalic, BiBuildings } from "react-icons/bi";
import { BsFillHouseGearFill, BsFillTrophyFill } from "react-icons/bs";
import { AiOutlineMedium, AiFillTrophy } from "react-icons/ai";



const handleOpenPdf = (pdfUrl) => () => {
  console.log(pdfUrl);
  window.open(pdfUrl, "_blank");
};

function Aboutus() {
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  //PDF VIEWER CODE
  const handleOpenPdf = (pdfUrl) => () => {
    console.log(pdfUrl);
    window.open(pdfUrl, "_blank");
  };
  //PDF VIEWER CODE ENDS

  const getContent = () => {
    switch (selectedButton) {
      case "button1":
        return (
          <div>
            <h2 className="sub_heading">Historical Background</h2>
            <p className="text_aboutus">
              Achaya NG Ranga Agricultural University (earlier Andhra Pradesh
              Agricultural University) had started a 4-year B.Tech (Agril.
              Engg.) Degree Programme in the Department of Agricultural
              Engineering, Agricultural College, Bapatla from the academic year
              1983-84 considering the demand for Agricultural Engineering
              graduates in this state and it was shifted to new campus on NH-216
              in Karlapalem road in May 1994.The foundation stone for
              construction of the building complex was laid by Dr.N.T.Rama Rao,
              the then Hon’ble Chief Minister of Andhra Pradesh on 24-02-1988
              and were inaugurated in the new premises on 5-5-1994 by Sri K.
              Jana Reddy, the then Hon’ble Minister for Agriculture of Andhra
              Pradesh.
            </p>
            <p className="text_aboutus">
              The college has the unique feature of being the only college
              offering B.Tech (Agril. Engg.) degree in Andhra Pradesh State till
              2008. The annual intake of the students into the degree programme
              was only 20 in the initial year 1983-84 and later was raised to 61
              in the subsequent years. The admissions are made through AP EAPCET
              conducted by the Government of Andhra Pradesh and also through the
              UG- level ICAR exam. Further, there is an addition quota of ICAR
              (20%) and 15% quota through lateral entry for diploma students in
              agricultural engineering.
            </p>

            <div className="text-with-image">
              <div className="text-container">
                <p className="text_aboutus">
                  After shifting to the new campus, the College expanded rapidly
                  both academically and physically. Many infrastructural
                  facilities were added in terms of buildings and equipment for
                  improving the academic status in agricultural engineering. The
                  College celebrated its Silver Jubilee in the year 2008 during
                  which a silver jubilee building was constructed for a spacious
                  digital library, book library and two classrooms. This college
                  was accredited by Indian Council of Agricultural Research, New
                  Delhi during 1999-2000 in the first phase itself based on
                  ICAR’s Review Team Report and during the subsequent phases
                  also. The latest accreditation of ICAR for this College was in
                  2021-2026. The College was under the faculty of Agriculture
                  until 2010 when a new Faculty of Agricultural Engineering and
                  Technology was established by the University as per the
                  provisions of the University Act. The College was renamed as
                  Dr N.T.R. College of Agricultural Engineering (Dr NTRCAE) in
                  the year 2018 in memory of Late Dr N.T. Rama Rao the then
                  Chief Minister of combined Andhra Pradesh and who was the
                  person laid foundation stone for the College building.
                </p>
              </div>
              <div className="image-container">
                <img className="image ntrImg" src={img1} alt="Image" />
              </div>
            </div>
            <p className="text_aboutus">
              After shifting to the new campus, the College expanded rapidly
              both academically and physically. Many infrastructural facilities
              were added in terms of buildings and equipment for improving the
              academic status in agricultural engineering. The College
              celebrated its Silver Jubilee in the year 2008 during which a
              silver jubilee building was constructed for a spacious digital
              library, book library and two classrooms. This college was
              accredited by Indian Council of Agricultural Research, New Delhi
              during 1999-2000 in the first phase itself based on ICAR’s Review
              Team Report and during the subsequent phases also. The latest
              accreditation of ICAR for this College was in 2021-2026. The
              College was under the faculty of Agriculture until 2010 when a new
              Faculty of Agricultural Engineering and Technology was established
              by the University as per the provisions of the University Act. The
              College was renamed as Dr N.T.R. College of Agricultural
              Engineering (Dr NTRCAE) in the year 2018 in memory of Late Dr N.T.
              Rama Rao the then Chief Minister of combined Andhra Pradesh and
              who was the person laid foundation stone for the College building.
            </p>
            <p className="text_aboutus">
              Today, the Dr. NTR College of Agricultural Engineering (CAE) is
              widely recognized as the Center for Academic Excellence (CAE) in
              quality education; need based research and transfer of technology
              to farmers for improving farm production. The lush green campus is
              spread over 25 acres with an infrastructure ranked among the best
              in the country and accredited by ICAR.
            </p>
            <p className="text_aboutus">
              The courses being offered are based on ICAR’s V Deans’ Committee
              recommended syllabus to gear up towards equipping the students to
              meet the challenges that are being faced by the agricultural
              sector. The College has state-of-the-art infrastructure and
              facilities and the academic environment which combines academic
              rigor with high level of interaction with government departments
              in serving the farming community of the nation in general and the
              present state of Andhra Pradesh after bifurcation in particular.
              The driving force behind the high level of academic excellence and
              quality education is the dedicated team of over twenty core
              faculty drawn from different specializations.
            </p>
            <p className="text_aboutus">
              B.Tech. (Agricultural Engineering) degree programme is supported
              by 6 departments as follows:
            </p>
            <ul>
              <li>A. Farm Machinery and Power Engineering</li>
              <li>B. Processing and Food Engineering</li>
              <li>C. Irrigation and Drainage Engineering</li>
              <li>D. Soil and Water Conservation Engineering</li>
              <li>E. Renewable Energy Engineering</li>
              <li>F. Basic Engineering and Applied Sciences</li>
            </ul>

            <p style={{ color: "orange" }} className="text_aboutus">
              Number of the students completed graduation from the College so
              far: <span style={{ color: "green" }}>1046</span>
            </p>
            <h2>
              The land asset and use pattern of the campus is furnished below:
            </h2>
            <img
              style={{
                height: "25em",
                width: "60%",
                padding: "2px",
                justifyItems: "center",
                alignItems: "center",
              }}
              className="TableImg"
              src={tableImg}
            />
            <h2>
              The building complex comprises of the following five blocks.
            </h2>
            <ul>
              <li>Visvesvaraya Bhavan & ELP Building :0.69 acre</li>
              <li>Dr. M.V. Rao Block :0.25 acres</li>
            </ul>
            <h2>(Workshop and Laboratories Block)</h2>
            <ul>
              <li>Boys Hostel :0.64 acres</li>
              <li>Girls Hostel :0.34 acres</li>
              <li>Play grounds :12.50 acres</li>
              <li>Experimental plots & Fields :10.58 acres</li>
            </ul>
            <div className="image-container">
              <img className="imageStructure" src={img2} alt="Image" />
            </div>
          </div>
        );
      case "button2":
        return (
          <div>
            <h2 className="sub_heading">Vision</h2>
            <p className="text_aboutus">
              To make Dr NTR College of Agricultural Engineering, Bapatla an
              integrated center for academic excellence of agricultural
              engineering education known for its contribution to agriculture
              and allied fields in making agriculture more remunerative to
              farmers
            </p>
            <h2 className="sub_heading">Mandate</h2>
            <p className="text_aboutus">
              To serve the farming community and enhance their quality of life
              through excellence in education, research, development and
              transfer of agricultural technologies
            </p>
          </div>
        );
      case "button3":
        return (
          <img
            style={{ height: "auto", width: "90%", margin: "auto" }}
            className="Organizationstructure"
            src={organizationstructure}
          />
        );
      case "button4":
        return (
          <div className="pdf-viewer-container">

            <div className="ItemsContainer">
              <BiItalic className="icon" size="7em" color="#0A2451" />
              <button className="pdf-viewer-button" onClick={handleOpenPdf(icarnotification)}>
                ICAR Notification.pdf
              </button>
            </div>

            <div className="ItemsContainer">
              <BiBuildings className="icon" size="7em" color="#0A2451" />
            <button
              className="pdf-viewer-button"
              onClick={handleOpenPdf(SSRCollege)}
            >
              SSR_College.pdf
            </button>
            </div>


            <div className="ItemsContainer">
              <BsFillHouseGearFill className="icon" size="7em" color="#0A2451" />
            <button
              className="pdf-viewer-button"
              onClick={handleOpenPdf(SSR_Btech)}
            >
              SSR Btech.pdf
            </button>
            </div>

            <div className="ItemsContainer">
              <AiOutlineMedium className="icon" size="7em" color="#0A2451" />
            <button
              className="pdf-viewer-button"
              onClick={handleOpenPdf(SSR_Mtech)}
            >
              SSR_Mtech.pdf
            </button>
            </div>

            <div className="ItemsContainer">
              <AiFillTrophy className="icon" size="7em" color="#0A2451" />
            <button
              className="pdf-viewer-button"
              onClick={handleOpenPdf(SSR_phd)}
            >
              SSR_Phd.pdf
            </button>
            </div>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div
      className=" box_width"
      style={{
        width: "90%",
        height: "auto",
        margin: "auto",
        padding: "10px",
      }}
    >
      <div className="button-row">
        <button
          className="raise raisebutton context"
          onClick={() => handleButtonClick("button1")}
        >
          Historical Background
        </button>
        <button
          className="raise raisebutton context"
          onClick={() => handleButtonClick("button2")}
        >
          Vision and Mandate
        </button>
        <button
          className="raise raisebutton context"
          onClick={() => handleButtonClick("button3")}
        >
          Organizational Structure
        </button>
        <button
          className="raise raisebutton context"
          onClick={() => handleButtonClick("button4")}
        >
          Status of accreditation
        </button>
      </div>
      {getContent()}
    </div>
  );
}

export default Aboutus;




// function throttle(fn, wait) {
//   let time = Date.now();
//   return function () {
//     if (time + wait - Date.now() < 0) {
//       fn();
//       time = Date.now();
//     }
//   };
// }

// function Aboutus() {
//   const [currentSection, setCurrentSection] = useState('');

//   const handleScroll = () => {
//     const windowTop = window.pageYOffset;
//     const sections = document.querySelectorAll('section[id]');

//     sections.forEach((section) => {
//       const offsetTop = section.offsetTop;
//       const outerHeight = section.offsetHeight;

//       if (windowTop > offsetTop - 50 && windowTop < offsetTop + outerHeight) {
//         const elemId = section.getAttribute('id');
//         setCurrentSection(elemId);
//       }
//     });
//   };

//   useEffect(() => {
//     const throttledScroll = throttle(handleScroll, 100);
//     window.addEventListener('scroll', throttledScroll);
//     return () => {
//       window.removeEventListener('scroll', throttledScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const scroll = window.pageYOffset;
//     const doc = document.documentElement.scrollHeight;
//     const win = window.innerHeight;
//     const value = (scroll / (doc - win)) * 90;
//     const sidelineElement = document.querySelector('ul .sideline');
//     if (sidelineElement) {
//       sidelineElement.style.height = value + '%';
//     }
//   }, [currentSection]);

//   const handleNavLinkClick = (elemId) => {
//     setCurrentSection(elemId);
//   };

//   return (
//     <div>
//       <div className="sidesection">
//         <section id="sec1">
//          <div> 
//         <h2 className="sub_heading">Historical Background</h2>
//             <p className="text_aboutus">
//               Achaya NG Ranga Agricultural University (earlier Andhra Pradesh
//               Agricultural University) had started a 4-year B.Tech (Agril.
//               Engg.) Degree Programme in the Department of Agricultural
//               Engineering, Agricultural College, Bapatla from the academic year
//               1983-84 considering the demand for Agricultural Engineering
//               graduates in this state and it was shifted to new campus on NH-216
//               in Karlapalem road in May 1994.The foundation stone for
//               construction of the building complex was laid by Dr.N.T.Rama Rao,
//               the then Hon’ble Chief Minister of Andhra Pradesh on 24-02-1988
//               and were inaugurated in the new premises on 5-5-1994 by Sri K.
//               Jana Reddy, the then Hon’ble Minister for Agriculture of Andhra
//               Pradesh.
//             </p>
//             <p className="text_aboutus">
//               The college has the unique feature of being the only college
//               offering B.Tech (Agril. Engg.) degree in Andhra Pradesh State till
//               2008. The annual intake of the students into the degree programme
//               was only 20 in the initial year 1983-84 and later was raised to 61
//               in the subsequent years. The admissions are made through AP EAPCET
//               conducted by the Government of Andhra Pradesh and also through the
//               UG- level ICAR exam. Further, there is an addition quota of ICAR
//               (20%) and 15% quota through lateral entry for diploma students in
//               agricultural engineering.
//             </p>

//             <div className="text-with-image">
//               <div className="text-container">
//                 <p className="text_aboutus">
//                   After shifting to the new campus, the College expanded rapidly
//                   both academically and physically. Many infrastructural
//                   facilities were added in terms of buildings and equipment for
//                   improving the academic status in agricultural engineering. The
//                   College celebrated its Silver Jubilee in the year 2008 during
//                   which a silver jubilee building was constructed for a spacious
//                   digital library, book library and two classrooms. This college
//                   was accredited by Indian Council of Agricultural Research, New
//                   Delhi during 1999-2000 in the first phase itself based on
//                   ICAR’s Review Team Report and during the subsequent phases
//                   also. The latest accreditation of ICAR for this College was in
//                   2021-2026. The College was under the faculty of Agriculture
//                   until 2010 when a new Faculty of Agricultural Engineering and
//                   Technology was established by the University as per the
//                   provisions of the University Act. The College was renamed as
//                   Dr N.T.R. College of Agricultural Engineering (Dr NTRCAE) in
//                   the year 2018 in memory of Late Dr N.T. Rama Rao the then
//                   Chief Minister of combined Andhra Pradesh and who was the
//                   person laid foundation stone for the College building.
//                 </p>
//               </div>
//               <div className="image-container">
//                 <img className="image" src={img1} alt="Image" />
//               </div>
//             </div>
//             <p className="text_aboutus">
//               After shifting to the new campus, the College expanded rapidly
//               both academically and physically. Many infrastructural facilities
//               were added in terms of buildings and equipment for improving the
//               academic status in agricultural engineering. The College
//               celebrated its Silver Jubilee in the year 2008 during which a
//               silver jubilee building was constructed for a spacious digital
//               library, book library and two classrooms. This college was
//               accredited by Indian Council of Agricultural Research, New Delhi
//               during 1999-2000 in the first phase itself based on ICAR’s Review
//               Team Report and during the subsequent phases also. The latest
//               accreditation of ICAR for this College was in 2021-2026. The
//               College was under the faculty of Agriculture until 2010 when a new
//               Faculty of Agricultural Engineering and Technology was established
//               by the University as per the provisions of the University Act. The
//               College was renamed as Dr N.T.R. College of Agricultural
//               Engineering (Dr NTRCAE) in the year 2018 in memory of Late Dr N.T.
//               Rama Rao the then Chief Minister of combined Andhra Pradesh and
//               who was the person laid foundation stone for the College building.
//             </p>
//             <p className="text_aboutus">
//               Today, the Dr. NTR College of Agricultural Engineering (CAE) is
//               widely recognized as the Center for Academic Excellence (CAE) in
//               quality education; need based research and transfer of technology
//               to farmers for improving farm production. The lush green campus is
//               spread over 25 acres with an infrastructure ranked among the best
//               in the country and accredited by ICAR.
//             </p>
//             <p className="text_aboutus">
//               The courses being offered are based on ICAR’s V Deans’ Committee
//               recommended syllabus to gear up towards equipping the students to
//               meet the challenges that are being faced by the agricultural
//               sector. The College has state-of-the-art infrastructure and
//               facilities and the academic environment which combines academic
//               rigor with high level of interaction with government departments
//               in serving the farming community of the nation in general and the
//               present state of Andhra Pradesh after bifurcation in particular.
//               The driving force behind the high level of academic excellence and
//               quality education is the dedicated team of over twenty core
//               faculty drawn from different specializations.
//             </p>
//             <p className="text_aboutus">
//               B.Tech. (Agricultural Engineering) degree programme is supported
//               by 6 departments as follows:
//             </p>
//             <ul>
//               <li>A. Farm Machinery and Power Engineering</li>
//               <li>B. Processing and Food Engineering</li>
//               <li>C. Irrigation and Drainage Engineering</li>
//               <li>D. Soil and Water Conservation Engineering</li>
//               <li>E. Renewable Energy Engineering</li>
//               <li>F. Basic Engineering and Applied Sciences</li>
//             </ul>

//             <p style={{ color: "orange" }} className="text_aboutus">
//               Number of the students completed graduation from the College so
//               far: <span style={{ color: "green" }}>1046</span>
//             </p>
//             <h2>
//               The land asset and use pattern of the campus is furnished below:
//             </h2>
//             <img
//               style={{
//                 height: "25em",
//                 width: "60%",
//                 padding: "2px",
//                 justifyItems: "center",
//                 alignItems: "center",
//               }}
//               className="TableImg"
//               src={tableImg}
//             />
//             <h2>
//               The building complex comprises of the following five blocks.
//             </h2>
//             <ul>
//               <li>Visvesvaraya Bhavan & ELP Building :0.69 acre</li>
//               <li>Dr. M.V. Rao Block :0.25 acres</li>
//             </ul>
//             <h2>(Workshop and Laboratories Block)</h2>
//             <ul>
//               <li>Boys Hostel :0.64 acres</li>
//               <li>Girls Hostel :0.34 acres</li>
//               <li>Play grounds :12.50 acres</li>
//               <li>Experimental plots & Fields :10.58 acres</li>
//             </ul>
//             <div className="image-container">
//               <img className="imageStructure" src={img2} alt="Image" />
//             </div>
//             </div>
//         </section>
//         <section id="sec2">
//         <div>
//              <h2 className="sub_heading">Vision</h2>
//              <p className="text_aboutus">
//                To make Dr NTR College of Agricultural Engineering, Bapatla an
//                integrated center for academic excellence of agricultural
//                engineering education known for its contribution to agriculture
//                and allied fields in making agriculture more remunerative to
//                farmers
//              </p>
//              <h2 className="sub_heading">Mandate</h2>
//              <p className="text_aboutus">
//                To serve the farming community and enhance their quality of life
//                through excellence in education, research, development and
//                transfer of agricultural technologies
//              </p>
//            </div>
//         </section>
//         <section id="sec3">
//         <img
//              style={{ height: "auto", width: "90%", margin: "auto" }}
//              className="Organizationstructure"
//              src={organizationstructure}
//           />
//         </section>
//         <section id="sec4">
//         <div className="pdf-viewer-container">

// <div className="ItemsContainer">
//   <BiItalic className="icon" size="7em" color="#0A2451" />
//   <button className="pdf-viewer-button" onClick={handleOpenPdf(icarnotification)}>
//     ICAR Notification.pdf
//   </button>
// </div>

// <div className="ItemsContainer">
//   <BiBuildings className="icon" size="7em" color="#0A2451" />
// <button
//   className="pdf-viewer-button"
//   onClick={handleOpenPdf(SSRCollege)}
// >
//   SSR_College.pdf
// </button>
// </div>


// <div className="ItemsContainer">
//   <BsFillHouseGearFill className="icon" size="7em" color="#0A2451" />
// <button
//   className="pdf-viewer-button"
//   onClick={handleOpenPdf(SSR_Btech)}
// >
//   SSR Btech.pdf
// </button>
// </div>

// <div className="ItemsContainer">
//   <AiOutlineMedium className="icon" size="7em" color="#0A2451" />
// <button
//   className="pdf-viewer-button"
//   onClick={handleOpenPdf(SSR_Mtech)}
// >
//   SSR_Mtech.pdf
// </button>
// </div>

// <div className="ItemsContainer">
//   <AiFillTrophy className="icon" size="7em" color="#0A2451" />
// <button
//   className="pdf-viewer-button"
//   onClick={handleOpenPdf(SSR_phd)}
// >
//   SSR_Phd.pdf
// </button>
// </div>
// </div>
//         </section>
//       </div>

      
//       <div>
//       <div className="progress">
//         <ul>
//           <span className="sideline"></span>
//           <li>
//             <a
//               href="#sec1"
//               className={`clickable ${currentSection === 'sec1' ? 'current' : ''}`}
//               onClick={() => handleNavLinkClick('sec1')}
//             >
//               Historical Background
//             </a>
//           </li>
//           <li>
//             <a
//               href="#sec2"
//               className={`clickable ${currentSection === 'sec2' ? 'current' : ''}`}
//               onClick={() => handleNavLinkClick('sec2')}
//             >
//               Vision and Mandate
//             </a>
//           </li>
//           <li>
//             <a
//               href="#sec3"
//               className={`clickable ${currentSection === 'sec3' ? 'current' : ''}`}
//               onClick={() => handleNavLinkClick('sec3')}
//             >
//               Organizational Structure
//             </a>
//           </li>
//           <li>
//             <a
//               href="#sec4"
//               className={`clickable ${currentSection === 'sec4' ? 'current' : ''}`}
//               onClick={() => handleNavLinkClick('sec4')}
//             >
//               Status of accreditation
//             </a>
//           </li>
//         </ul>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Aboutus;