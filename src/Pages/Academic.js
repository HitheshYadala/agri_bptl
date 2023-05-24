import React, { useEffect, useState } from "react";
import "../components/Styles/Academic.scss";
import il from "../assets/Insturmentallaboratory.png";
import fel from "../assets/Foodengineeringlaboratory.png";
import pel from "../assets/Processengineeringlaboratory.png";
import frc from "../assets/Fruitripeningchamber.png";
import elu from "../assets/Experientiallearningunit.png";
import uma from "../assets/Uniblocmoistureanalyzer.png";
import hfu from "../assets/Hollowfiberultrafiltration.png";
import fd from "../assets/Freezedryer.png";
import bdv from "../assets/Brookefielddigitalviscometer.png";
import s1 from "../assets/staff1.png";
import s2 from "../assets/staff2.png";
import s3 from "../assets/staff3.png";
import s4 from "../assets/staff4.png";

const Academic = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      quickMenuSelect(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  const quickMenuSelect = (scrollTop) => {
    const quickOnClass = "active";
    const sections = document.querySelectorAll(".page-section");

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionId = section.getAttribute("id");

      if (isInView(section)) {
        setActiveSection(sectionId);
        break;
      }
    }
  };

  const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const handleQuickMenuClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const sectionTop =
      section.offsetTop - document.querySelector("#header").offsetHeight;

    setActiveSection(sectionId);

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  return (
    <div id="wrap">
      <header style={{color:"white",  backgroundColor:"white"}} id="header"> </header>
      <div id="container" className="pages">
        <div>
        <nav id="nav-quick">
          <div className="quick-menu">
            <ul className="quick-1st">
              <li className={activeSection === "category-01" ? "active" : ""}>
                <a
                  href="#category-01"
                  onClick={(e) => handleQuickMenuClick(e, "category-01")}
                >
                  Department of Processing & Food Engineering
                </a>
              </li>
              <li className={activeSection === "category-02" ? "active" : ""}>
                <a
                  href="#category-02"
                  onClick={(e) => handleQuickMenuClick(e, "category-02")}
                >
                  Department of Farm Power & Machinery
                </a>
              </li>
              <li className={activeSection === "category-03" ? "active" : ""}>
                <a
                  href="#category-03"
                  onClick={(e) => handleQuickMenuClick(e, "category-03")}
                >
                  Department of Soil & Water Conservation Engineering
                </a>
              </li>
              <li className={activeSection === "category-04" ? "active" : ""}>
                <a
                  href="#category-04"
                  onClick={(e) => handleQuickMenuClick(e, "category-04")}
                >
                  Department of Irrigation & Drainage Engineering
                </a>
              </li>
              <li className={activeSection === "category-05" ? "active" : ""}>
                <a
                  href="#category-05"
                  onClick={(e) => handleQuickMenuClick(e, "category-05")}
                >
                  Department of Renewable Energy Engineering
                </a>
              </li>
              <li className={activeSection === "category-06" ? "active" : ""}>
                <a
                  href="#category-06"
                  onClick={(e) => handleQuickMenuClick(e, "category-06")}
                >
                  Department of Basic Engineering & Applied Sciences
                </a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
        <div id="content">
          <section className="page-section" id="category-01">
            <h2 className="sub_heading">Department of Processing & Food Engineering.</h2>
            <p className="text_academic">
              Processing operations are undertaken to add value to agricultural
              materials after their production. The main purpose of agricultural
              processing is to minimise the qualitative and quantitative
              deterioration of the material after harvest. The various
              agricultural processing operations performed on various crops
              (cereals, pulses and oilseeds) are cleaning, grading, sorting,
              grading, sorting, drying, cooling, storage, milling, size
              reduction, expelling, mixing, blending, packaging, waste
              utilization, seed treatment etc. Hence cleaning of grains and
              other agricultural products is very important and should be
              performed before any further processing operation. Grading of
              cleaned seed is done to obtain good quality seed with higher
              germination and viability.
            </p>
            <p className="text_academic">
              M.Tech. (Agricultural Engineering) PG program was started from the
              academic year 2006-07 onwards in the department of Processing and
              Food Engineering. PG students are provided with a monthly stipend
              of Rs.7000/. Ph.D. (Agricultural Engineering) program was
              initiated during the year 2012-13 in the Departments of,
              Processing and Food Engineering with a monthly stipend of
              Rs.10,000/-. ICAR specified syllabus is being followed for
              teaching M.Tech. (Agricultural Engineering) and Ph.D.
              (Agricultural Engineering) courses.
            </p>
            <h2>Laboratory infrastructure:</h2>
            <p className="text_academic">
              The Processing and Food Engineering department is having well
              equipped laboratories such as Process Engineering laboratory,
              Instrumentation laboratory, Food Engineering laboratory etc.
            </p>
            <table>
              <thead>
                <tr>
                  <th>SI.No</th>
                  <th>Name of the laboratory</th>
                  <th>Name of the Important Equipment/Instruments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Instrumentation Laboratory</td>
                  <td>
                    Unibloc moisture analyzer, Brookfield digital viscometer, PC
                    based double beam UV-visible spectrophotometer, Freeze
                    dryer, Electronic balance, pH meter, Digital LCD food
                    thermometer, etc.
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Process Engineering Laboratory</td>
                  <td>
                    Refrigerated centrifuge, Tablet making machine, Water bath
                    incubator shaker, Vacuum filtration assembly with a vacuum
                    pump, Vacuum oven, Digital bomb calorimeter, Oscilloscope,
                    Function generator,Digital LCR meter, etc. Hollow fiber
                    ultra- filtration membrane set,
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Food Analysis Laboratory</td>
                  <td>
                    Automatic nitrogen protein estimation system, Automatic PC
                    compatible solvent extraction system, Clevenger apparatus of
                    oil heavier, oil lighter with heating mantles and voltage
                    stabilizer, etc.
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Food Microbiology Laboratory</td>
                  <td>
                    B.O.D. incubator, Laminar flow, chamber, Deep freeze up to
                    -40 °C, etc.
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Environmental Control Laboratory</td>
                  <td>Environment chamber, etc.</td>
                </tr>
              </tbody>
            </table>
            {/* <div>
              <div>
              <img className="image" src={il} alt="Image" />
              </div>
              <div>
              <img className="image" src={il} alt="Image" />
              </div>
            </div> */}
            <div className="ImagesContainers">
            <div className="text-with-image">
              <div className="img1">
                <img className="imageAcademic img1" src={il} alt="Image" />
                <h3>Insturmental Laboratory</h3>
              </div>
              <div className="img2" >
                <img className="imageAcademic img2" src={fel} alt="Image" />
                <h3>Food Engineering Laboratory</h3>
              </div>
            </div>
            <div className="text-with-image">
              <div>
                <img className="imageAcademic" src={pel} alt="Image" />
                <h3>Process Engineering Laboratory</h3>
              </div>
              <div>
                <img className="imageAcademic" src={frc} alt="Image" />
                <h3>Fruit Ripening Chamber</h3>
              </div>
            </div>
            <div className="text-with-image">
              <div>
                <img className="imageAcademic" src={elu} alt="Image" />
                <h3>Experiential Learning Unit</h3>
              </div>
            </div>
            <div className="text-with-image">
              <div>
                <img className="imageAcademic" src={uma} alt="Image" />
                <h3>Unibloc Moisture Analyzer</h3>
              </div>
              <div>
                <img className="imageAcademic" src={hfu} alt="Image" />
                <h3>Hollow Fiber Ultra-Filtration</h3>
              </div>
            </div>
            <div className="text-with-image">
              <div>
                <img className="imageAcademic" src={fd} alt="Image" />
                <h3>Freeze Dryer</h3>
              </div>
              <div>
                <img className="imageAcademic" src={bdv} alt="Image" />
                <h3>Brookefield Digital Viscometer</h3>
              </div>
            </div>

            <h2 style={{color:'#0A2451',textAlign:"center", textDecoration:"underline",paddingTop:"30px",paddingBottom:"20px"}}>Department Staff</h2>
            <div className="text-with-image">
              <div>
                <img className="imageAcademic" src={s1} alt="Image" />
                <h3>Dr. M. Madhava</h3>
                <p className="text_academic">PROFESSOR & HEAD</p>
                <p className="text_academic">+919493032250</p>
                <p className="text_academic">m.madhava@angrau.ac.in</p>
              </div>
            </div>
            <div className="text-with-image">
              <div>
                <img className="imageAcademic" src={s2} alt="Image" />
                <h3>Dr. B. Sreenivasula Reddy</h3>
                <p className="text_academic">ASSOCIATE PROFESSOR</p>
                <p className="text_academic">9618800819</p>
                <p className="text_academic">b.sreenivasulareddy@angrau.ac.in</p>
              </div>
              <div>
                <img className="imageAcademic" src={s3} alt="Image" />
                <h3>Dr. S. Vishnu Vardhan</h3>
                <p className="text_academic">ASSOCIATE PROFESSOR</p>
                <p className="text_academic">9440363112</p>
                <p className="text_academic">vishnuvardhans@angrau.ac.in</p>
              </div>
              <div>
                <img className="imageAcademic" src={s4} alt="Image" />
                <h3>Dr. K. Lavanya</h3>
                <p className="text_academic">ASSISTANT PROFESSOR</p>
                <p className="text_academic">9182164437</p>
                <p className="text_academic">k.lavanya@angrau.ac.in</p>
              </div>
            </div>
            </div>
          </section>
          <section className="page-section" id="category-02">
            <h1>Department of Farm Power & Machinery.</h1>
            <p className="text_academic">
              Dui sit amet eleifend elementum, lorem lorem blandit ante, id
              sodales justo magna id metus. Praesent sed metus eget lacus
              ultricies gravida in vitae erat. Cras et erat ut ante gravida
              viverra sed in metus. Duis elementum semper mi. Duis augue tortor,
              volutpat et nulla eget, finibus ultrices massa. Suspendisse
              commodo ultrices diam, quis pretium enim. Ut eget egestas odio,
              vehicula eleifend est. Aliquam a volutpat dui. Nam vulputate
              tempus dolor, sit amet posuere odio venenatis eget. Etiam
              venenatis tellus orci, dictum euismod nibh volutpat eu. Integer
              laoreet pulvinar consectetur. Nulla varius fermentum eros et
              sodales. Pellentesque at mauris euismod, tempus augue at, maximus
              ex. Proin pulvinar ultrices sem non mollis. Donec semper
              sollicitudin nulla, at consectetur risus porta non. Phasellus id
              posuere nibh.
            </p>
          </section>
          <section className="page-section" id="category-03">
            <h1>Department of Soil & Water Conservation Engineering.</h1>
            <p className="text_academic">
              In libero tincidunt, hendrerit interdum massa iaculis. Suspendisse
              gravida urna erat, in rhoncus turpis aliquet a. Cras ac nulla vel
              ligula mollis ornare non id eros. Donec ut odio turpis. Aliquam in
              gravida dui, a fermentum orci. Integer a neque quis nulla congue
              faucibus ac sit amet mauris. Proin tempus finibus facilisis.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
              velit enim, facilisis a ligula et, eleifend tristique quam.
            </p>
          </section>
          <section className="page-section" id="category-04">
            <h1>Department of Irrigation & Drainage Engineering.</h1>
            <p className="text_academic">
              Proin quis rhoncus ante. Cras ultricies luctus elit, bibendum
              cursus magna faucibus sit amet. Duis quis lectus mattis, iaculis
              quam et, ultricies neque. Nulla commodo tempus tortor. Duis nisl
              neque, condimentum vel euismod ut, sagittis a nibh. Vestibulum
              molestie, massa sit amet convallis egestas, mauris ipsum egestas
              risus, sit amet eleifend mi ipsum in ante. Sed tortor turpis,
              consectetur a cursus ut, sagittis quis leo. Mauris non justo
              purus. Vestibulum vehicula congue enim, in ultrices diam consequat
              nec. Vestibulum viverra ipsum ac elit hendrerit lacinia. Morbi non
              tristique sapien. Curabitur malesuada justo eu sapien mattis, ut
              fermentum arcu condimentum. Morbi et sapien metus. Proin eget leo
              et quam bibendum laoreet. In sagittis dui non mi accumsan, eget
              sollicitudin arcu dapibus.
            </p>
          </section>
          <section className="page-section" id="category-05">
            <h1>Department of Renewable Energy Engineering.</h1>
            <p className="text_academic">
              Proin quis rhoncus ante. Cras ultricies luctus elit, bibendum
              cursus magna faucibus sit amet. Duis quis lectus mattis, iaculis
              quam et, ultricies neque. Nulla commodo tempus tortor. Duis nisl
              neque, condimentum vel euismod ut, sagittis a nibh. Vestibulum
              molestie, massa sit amet convallis egestas, mauris ipsum egestas
              risus, sit amet eleifend mi ipsum in ante. Sed tortor turpis,
              consectetur a cursus ut, sagittis quis leo. Mauris non justo
              purus. Vestibulum vehicula congue enim, in ultrices diam consequat
              nec. Vestibulum viverra ipsum ac elit hendrerit lacinia. Morbi non
              tristique sapien. Curabitur malesuada justo eu sapien mattis, ut
              fermentum arcu condimentum. Morbi et sapien metus. Proin eget leo
              et quam bibendum laoreet. In sagittis dui non mi accumsan, eget
              sollicitudin arcu dapibus.
            </p>
          </section>
          <section className="page-section" id="category-06">
            <h1>Department of Basic Engineering & Applied Sciences.</h1>
            <p className="text_academic">
              Proin quis rhoncus ante. Cras ultricies luctus elit, bibendum
              cursus magna faucibus sit amet. Duis quis lectus mattis, iaculis
              quam et, ultricies neque. Nulla commodo tempus tortor. Duis nisl
              neque, condimentum vel euismod ut, sagittis a nibh. Vestibulum
              molestie, massa sit amet convallis egestas, mauris ipsum egestas
              risus, sit amet eleifend mi ipsum in ante. Sed tortor turpis,
              consectetur a cursus ut, sagittis quis leo. Mauris non justo
              purus. Vestibulum vehicula congue enim, in ultrices diam consequat
              nec. Vestibulum viverra ipsum ac elit hendrerit lacinia. Morbi non
              tristique sapien. Curabitur malesuada justo eu sapien mattis, ut
              fermentum arcu condimentum. Morbi et sapien metus. Proin eget leo
              et quam bibendum laoreet. In sagittis dui non mi accumsan, eget
              sollicitudin arcu dapibus.
            </p>
          </section>
        </div>
      </div>
      <footer style={{color:"white", backgroundColor:"white"}} id="footer">footer</footer>
    </div>
  );
};

export default Academic;
