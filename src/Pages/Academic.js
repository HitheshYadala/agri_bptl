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
import fm1 from "../assets/Farmmachineryone.png";
import fm2 from "../assets/Farmmachinerytwo.png";
import fpl from "../assets/Farmpowerlaboratory.png";
import el from "../assets/Ergonomicslaboratory.png";
import aw1 from "../assets/Advancedworkshopone.png";
import aw2 from "../assets/Advancedworkshoptwo.png";
import aw3 from "../assets/Advancedworkshopthree.png";
import aw4 from "../assets/Advancedworkshopfour.png";
import sdl1 from "../assets/Soildynamiclaboratoryone.png";
import sdl2 from "../assets/Soildynamiclaboratorytwo.png";
import elp1 from "../assets/Elpone.png";
import elp2 from "../assets/Elptwo.png";
import elp3 from "../assets/Elpthree.png";
import elp4 from "../assets/Elpfour.png";
import s5 from "../assets/staff5.png";
import s6 from "../assets/staff6.png";
import s7 from "../assets/staff7.png";
import s8 from "../assets/staff8.png";
import s9 from "../assets/staff9.png";
import sw from "../assets/soilandwater.png";
import s10 from "../assets/staff10.png";
import s11 from "../assets/staff11.png";
import id1 from "../assets/IDdept1.png";
import id2 from "../assets/IDdept2.png";
import id3 from "../assets/IDdept3.png";
import id4 from "../assets/IDdept4.png";
import id5 from "../assets/IDdept5.png";
import id6 from "../assets/IDdept6.png";
import id7 from "../assets/IDdept7.png";
import id8 from "../assets/IDdept8.png";
import id9 from "../assets/IDdept9.png";
import id10 from "../assets/IDdept10.png";
import id11 from "../assets/IDdept11.png";
import id12 from "../assets/IDdept12.png";
import id13 from "../assets/IDdept13.png";
import s12 from "../assets/staff12.png";
import s13 from "../assets/staff13.png";
import s14 from "../assets/staff14.png";
import ea1 from "../assets/EA1.png";
import ea2 from "../assets/EA2.png";
import ea3 from "../assets/EA3.png";
import ea4 from "../assets/EA4.png";
import ea5 from "../assets/EA5.png";
import ea6 from "../assets/EA6.png";
import ea7 from "../assets/EA7.png";
import ea8 from "../assets/EA8.png";
import ea9 from "../assets/EA9.png";
import ea10 from "../assets/EA10.png";
import ea11 from "../assets/EA11.png";
import ea12 from "../assets/EA12.png";
// import ea13 from "../assets/EA13.png";
// import ea14 from "../assets/EA14.png";
// import ea15 from "../assets/EA15.png";
// import ea16 from "../assets/EA16.png";
// import ea17 from "../assets/EA17.png";
// import ea18 from "../assets/EA18.png";
// import ea19 from "../assets/EA19.png";
// import ea20 from "../assets/EA20.png";
import s15 from "../assets/staff15.png";
import s16 from "../assets/staff16.png";
import s17 from "../assets/staff17.png";
import s18 from "../assets/staff18.png";

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
      <header style={{ color: "white", backgroundColor: "white" }} id="header">
        {" "}
      </header>
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
            <h2 className="sub_heading">
              Department of Processing & Food Engineering.
            </h2>
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
            <h3>Laboratory infrastructure:</h3>
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
            <div className="ImagesContainers">
              <div className="text-with-image">
              <div className="Academic">
                  <img className="imageAcademic" src={il} alt="Image" />
                  <h3>Insturmental Laboratory</h3>
                </div>
                <div className="Academic">
                  <img className="imageAcademic" src={fel} alt="Image" />
                  <h3>Food Engineering Laboratory</h3>
                </div>
              </div>
              <div className="text-with-image">
              <div className="Academic">
                  <img className="imageAcademic" src={pel} alt="Image" />
                  <h3>Process Engineering Laboratory</h3>
                </div>
                <div className="Academic">
                  <img className="imageAcademic" src={frc} alt="Image" />
                  <h3>Fruit Ripening Chamber</h3>
                </div>
              </div>
              <div className="text-with-image">
              <div className="Academic">
                  <img className="imageAcademic" src={elu} alt="Image" />
                  <h3>Experiential Learning Unit</h3>
                </div>
              </div>
              <h2
                style={{
                  color: "#0A2451",
                  textAlign: "center",
                  textDecoration: "underline",
                  paddingTop: "30px",
                  paddingBottom: "20px",
                }}
              >
                Laboratory Infrastructure
              </h2>
              <div className="text-with-image">
                <div className="Academic">
                  <img className="imageAcademic" src={uma} alt="Image" />
                  <h3>Unibloc Moisture Analyzer</h3>
                </div>
                <div className="Academic">
                  <img className="imageAcademic" src={hfu} alt="Image" />
                  <h3>Hollow Fiber Ultra-Filtration</h3>
                </div>
              </div>
              <div className="text-with-image">
                <div className="Academic">
                  <img className="imageAcademic" src={fd} alt="Image" />
                  <h3>Freeze Dryer</h3>
                </div>
                <div className="Academic">
                  <img className="imageAcademic" src={bdv} alt="Image" />
                  <h3>Brookefield Digital Viscometer</h3>
                </div>
              </div>

              <h2
                style={{
                  color: "#0A2451",
                  textAlign: "center",
                  textDecoration: "underline",
                  paddingTop: "30px",
                  paddingBottom: "20px",
                }}
              >
                Department Staff
              </h2>
              <div className="text-with-image">
              <div>
                  <img className="imageAcademic" src={s1} alt="Image" />
                  <h3>Dr. M. Madhava</h3>
                  <p className="text_academic">PROFESSOR & HEAD</p>
                  <p className="text_academic">+91 9493032250</p>
                  <p className="text_academic">m.madhava@angrau.ac.in</p>
                </div>
              </div>
              <div className="text-with-image">
              <div>
                  <img className="imageAcademic" src={s2} alt="Image" />
                  <h3>Dr. B. Sreenivasula Reddy</h3>
                  <p className="text_academic">ASSOCIATE PROFESSOR</p>
                  <p className="text_academic">+91 9618800819</p>
                  <p className="text_academic">
                    b.sreenivasulareddy@angrau.ac.in
                  </p>
                </div>
                <div>
                  <img className="imageAcademic" src={s3} alt="Image" />
                  <h3>Dr. S. Vishnu Vardhan</h3>
                  <p className="text_academic">ASSOCIATE PROFESSOR</p>
                  <p className="text_academic">+91 9440363112</p>
                  <p className="text_academic">vishnuvardhans@angrau.ac.in</p>
                </div>
                <div>
                  <img className="imageAcademic" src={s4} alt="Image" />
                  <h3>Dr. K. Lavanya</h3>
                  <p className="text_academic">ASSISTANT PROFESSOR</p>
                  <p className="text_academic">+919182164437</p>
                  <p className="text_academic">k.lavanya@angrau.ac.in</p>
                </div>
              </div>
            </div>
          </section>
          <section className="page-section" id="category-02">
            <h2 className="sub_heading">
              Department of Farm Power & Machinery.
            </h2>

            <p className="text_academic">
              The Department of Farm Machinery and Power Engineering was started
              with a vision to explore and cater the application of agricultural
              machinery and power sources to the field of agriculture for
              enhancing the efficiency, drudgery reduction and timeliness in
              operation. The department is created to pursue excellence in
              teaching, research and industrial collaborative activities with
              farmer involved on farm research and developments. The academic
              curriculum with Undergraduate program includes the study of basic
              principles and practical exposure on farm machinery starting from
              land preparation, sowing, intercultural, plant protection and
              harvesting operations. Laboratory / field experimental facilities
              on each operation would alleviate the knowledge in subject and
              assists on field machine servicing capabilities. Also PG/Ph.D.
              programs under the department provides the explicitness in the
              subjects of design of agricultural machinery, human safety, soil
              dynamics, traction mechanics, precession agriculture, testing
              &amp; evaluation of farm machinery, robotics in agriculture and
              drone technology. Laboratory facilities on instrumentation,
              ergonomics, traction mechanics and field-testing cover insight
              understanding of the concepts. AUTOCAD, SOLIDWORKS and ANSYS
              software’s are equipped for complete design, modelling and stress
              analysis of farm machinery prior to prototyping.
            </p>
            <p className="text_academic">
              Department is established with R&amp;D facility on farm
              mechanization, under which custom hiring centre provides machinery
              on affordable rental basis to the farmers. Also Farm implements
              production unit was established in the department which involves
              in development and manufacturing of customized small hand
              tools/agricultural implements on order basis. A well-equipped
              workshop facility with CNC lathe and CNC milling machines assist
              in inherent development of agricultural machinery. Apart from
              these following are the laboratories available in the department.
            </p>
            <ul>
              <li>Farm Machinery Laboratory</li>
              <table>
                <thead>
                  <tr>
                    <th>Name of the Laboratory</th>
                    <th>Name of the Important Equipment/Instruments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Farm Machinery Laboratory</td>
                    <td>
                      Knapsack sprayer, Hand compression sprayer, Mist blower,
                      Hand operated castor thresher, Groundnut pod stripper,
                      Axial flow thresher, Paddy reaper, Maize Sheller, Power
                      Sprayer, Sub-soiler, Paddy thresher, ULV Sprayer, Post
                      hole digger, 9 tyne cultivator (spring loaded), Boom
                      sprayer, Disc plough, Battery operated cotton picker,
                      Wheel type dibbler, Rotary mulcher, Groundnut digger
                      shaker cum windrower, Mobile shredder, Foot operated
                      sprayer, Rocking sprayer, Bucket scraper, Multi crop
                      thresher (Electric motor operated), Rotavator, Rice
                      transplanter (Riding type), Rice transplanter (walking
                      type), Nursery raising machine, Seed cum fertilizer drill
                      automatic, Reversible M.B. Plough, Rotary plough, Spider
                      weeder, Multi crop ridge planter, Rotary slasher, Laser
                      land leveler, Self propelled high clearance sprayer,
                      Combine harvester (self propelled), Combine harvester
                      (tractor mounted), Rigid tyne cultivator, John Deere 4 WD
                      tractor along with hoe and bucket attachments, Mahindra 40
                      H.P, Escorts tractor, V.S.T Mini tractor, Power tiller
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-with-image">
              <div className="Academic">
                  <img className="imageAcademic" src={fm1} alt="Image" />
                </div>
                <div className="Academic">
                  <img className="imageAcademic" src={fm2} alt="Image" />
                </div>
              </div>

              <li>Farm Power Laboratory</li>
              <table>
                <thead>
                  <tr>
                    <th>Name of the Laboratory</th>
                    <th>Name of the Important Equipment/Instruments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Farm Power Laboratory</td>
                    <td>
                      Cut models - Diesel engine (single cylinder), Tractor
                      differential, Tractor steering, Rear axle assembly,
                      Hydraulic brake, Master cylinder, Ignition system, Self
                      starter, Distributor, Ignition Coil, Magneto, Synchromesh
                      gear box, Constant mesh gear box, Steering gear box,
                      diaphragm clutch system, multi plates clutch, Four wheel
                      brake, cone clutch, mechanical brake system. LED Panels -
                      Fuel injection system, Lubrication system, Gear box 8+2,
                      Hydraulic system., Tractor cut section without wheel
                      assemblies, etc.
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-with-image">
              <div className="Academic">
                  <img className="imageAcademic" src={fpl} alt="Image" />
                </div>
              </div>
              <li>Ergonomics Laboratory</li>
              <table>
                <thead>
                  <tr>
                    <th>Name of the Laboratory</th>
                    <th>Name of the Important Equipment/Instruments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ergonomics Laboratory</td>
                    <td>
                      Motorized treadmill, Digital heart rate monitor, Digital
                      pulse monitor with finger sensor cable, Dual digital
                      thermometer with core/skin temperature process,
                      Electromyography unit, Ergo meter cycle, Bourdon tube
                      pressure gauge (digital), , Speed measurement trainer,
                      Torque cell transducer (10 kg), Strain measurement trainer
                      (1 kg), Digital sound level meter, Digital vibration
                      meter, etc.
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-with-image">
              <div className="Academic">
                  <img className="imageAcademic" src={el} alt="Image" />
                </div>
              </div>
              <li>Advanced Workshop</li>
              <table>
                <thead>
                  <tr>
                    <th>Name of the Laboratory</th>
                    <th>Name of the Important Equipment/Instruments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Advanced Workshop</td>
                    <td>
                      Lathe machines with all accessories and attachments, Spot
                      welding machine (pedestal type), Welding Machine with
                      transformer (600 AMPS air cooled) and accessories, Wooden
                      work table (3’ X 8’), Bench grinder ½ HP, Lathe machines,
                      Wood turning lathe, Shaper machine (18”), Air compressor,
                      Iron cutting machine (14”), Hydraulic press, Shearing
                      machine, Hydraulic hack saw machine with 2 hp motor,
                      Hydraulic pipe bending machine, Stand drilling machine ½”,
                      Pipe bending machine ( ½” to ¼”), Hand drilling machine (6
                      mm), Universal milling machine, Radial drilling machine 1”
                      capacity, Heavy duty sheet bending machine (4’), CNC Lathe
                      machine, CNC Milling machine, etc.
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-with-image">
              <div className="Academic">
                  <img className="imageAcademic" src={aw1} alt="Image" />
                </div>
                <div className="Academic">
                  <img className="imageAcademic" src={aw2} alt="Image" />
                </div>
              </div>
              <div className="text-with-image">
              <div className="Academic">
                  <img className="imageAcademic" src={aw3} alt="Image" />
                </div>
                <div className="Academic">
                  <img className="imageAcademic" src={aw4} alt="Image" />
                </div>
              </div>
              <li>Soil Dynamics Laboratory</li>
              <table>
                <thead>
                  <tr>
                    <th>Name of the Laboratory</th>
                    <th>Name of the Important Equipment/Instruments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Soil Dynamics Laboratory</td>
                    <td>
                      Rectangular and circular soil bins, Force analysis
                      instrumentation, S Type load cells (1 ton and 3 ton
                      capacity), Digital force gauge, Digital and analogue
                      tachometers, Cone penetrometer, Strain gauge (canti-lever
                      type), Universal load cell (750 kg), Digital transducer
                      indicator suitable for AG make universal load cell,
                      Variable frequency drive motor (1.5 kW), etc.
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-with-image">
              <div className="Academic">
                  <img className="imageAcademic" src={sdl1} alt="Image" />
                </div>
                <div className="Academic">
                  <img className="imageAcademic" src={sdl2} alt="Image" />
                </div>
              </div>
            </ul>
            <h3>Experiential Learning Programme Unit (ELP Unit):</h3>
            <p className="text_academic">
              Experiential Learning Programme (ELP) unit titled “ANGRAU Farm
              Implements Production Centre” was established during the academic
              year 2020-21 in the Dept. of Farm Machinery and Power Engineering,
              Dr.NTR College of Agricultural Engineering, Bapatla. Under this
              ELP unit, final year students of B.Tech. (Ag. Engg.) will undergo
              the course “Experiential Learning On-Campus (Student READY) – SRDY
              482 (0+10)” for the duration of 10 weeks in the first semester of
              every academic year. Students will procure raw material and
              fabricate the small agricultural tools/implements by some initial
              investment. Later income will be generated by students through
              selling of these tools/implement to the local farmers or
              institutes. Thereby manufacturing and entrepreneurship skills will
              be developed among the final year students of B.Tech. (Ag. Engg.).
            </p>
            <div className="text-with-image">
            <div className="Academic">
                <img className="imageAcademic" src={elp1} alt="Image" />
              </div>
              <div className="Academic">
                <img className="imageAcademic" src={elp2} alt="Image" />
              </div>
            </div>
            <div className="text-with-image">
            <div className="Academic">
                <img className="imageAcademic" src={elp3} alt="Image" />
              </div>
              <div className="Academic">
                <img className="imageAcademic" src={elp4} alt="Image" />
              </div>
            </div>
            <h4 style={{ textAlign: "center" }}>
              Students fabricating agricultural hand tools/implements under ELP
            </h4>
            <h2
              style={{
                color: "#0A2451",
                textAlign: "center",
                textDecoration: "underline",
                paddingTop: "30px",
                paddingBottom: "20px",
              }}
            >
              Department Staff
            </h2>
            <div className="text-with-image">
            <div>
                <img className="imageAcademic" src={s5} alt="Image" />
                <h3>Dr. KVS RAMI REDDY</h3>
                <p className="text_academic">PROFESSOR & HEAD</p>
                <p className="text_academic">+91 9490845917</p>
                <p className="text_academic">kvs.ramireddy@angrau.ac.in</p>
              </div>
            </div>
            <div className="text-with-image">
            <div>
                <img className="imageAcademic" src={s6} alt="Image" />
                <h3>Dr. B. HARI BABU</h3>
                <p className="text_academic">ASSOCIATE PROFESSOR</p>
                <p className="text_academic">+91 9182780358</p>
                <p className="text_academic">b.haribabu@angrau.ac.in</p>
              </div>
            </div>
            <div className="text-with-image">
            <div>
                <img className="imageAcademic" src={s7} alt="Image" />
                <h3>Er. D. VIJAY KUMAR</h3>
                <p className="text_academic">ASSISTANT PROFESSOR</p>
                <p className="text_academic">+91 9492686634</p>
                <p className="text_academic">d.vijaykumar@angrau.ac.in</p>
              </div>
              <div>
                <img className="imageAcademic" src={s8} alt="Image" />
                <h3>Dr. B. RAJ KIRAN</h3>
                <p className="text_academic">ASSISTANT PROFESSOR</p>
                <p className="text_academic">+91 8500220340</p>
                <p className="text_academic">b.rajkiran@angrau.ac.in</p>
              </div>
              <div>
                <img className="imageAcademic" src={s9} alt="Image" />
                <h3>Er. G.VEERA PRASAD</h3>
                <p className="text_academic">ASSISTANT PROFESSOR</p>
                <p className="text_academic">+91 9492686634</p>
                <p className="text_academic">g.veeraprasad@angrau.ac.in</p>
              </div>
            </div>
          </section>
          <section className="page-section" id="category-03">
            <h2 className="sub_heading">
              Department of Soil & Water Conservation Engineering.
            </h2>
            <p className="text_academic">
              The Department of Soil and Water Conservation Engineering is
              offering Post Graduate and Ph.D. courses besides offering courses
              to under graduate students in the College of Agricultural
              Engineering. The PG course was started in the year 2006 and Ph.D.
              course was started in the year 2013. The subjects offered for the
              UG students are as follows.
            </p>
            <ol>
              <li>Watershed Hydrology</li>
              <li>Soil and Water Conservation Engineering</li>
              <li>Watershed Planning and Management</li>
              <li>Water Harvesting and Soil Conservation Structures</li>
            </ol>
            <p className="text_academic">
              The Department has made a model watershed in which the students
              are very well demonstrated all the watershed processes like stream
              orders, watershed characteristics, land treatments works like
              Bunding, terracing and trenching, various gully control
              structures, farm pond etc., The practical experiments like silt
              sampler, stage level recorders, in-situ-hydraulic conductivity
              measurement by auger hole method are conducted for the benefit of
              the students. Soil and Water Conservation Engineering laboratory
              equipped with working models of different equipment and also
              having display boards and banners showing the different Soil and
              Water Conservation methods.
            </p>
            <div className="text-with-image">
            <div className="Academic">
                <img className="imageAcademic" src={sw} alt="Image" />
                <h3>CAE Model Watershed with all component features</h3>
              </div>
            </div>
            <h3>
              The PG and Ph.D. students are specially undertaking their
              practical field problems related to:
            </h3>
            <ol>
              <li>
                Design and Installation of Controlled and Sub Irrigation Systems
              </li>
              <li>Use of HYDRUS-3D for nutrient transport modelling</li>
              <li>Use of MODFLOW for ground water modelling</li>
              <li>Pressurized Irrigation systems field experiments.</li>
              <li>Use of remote sensing and GIS for erosion estimation</li>
              <li>Use of remote sensing and GIS for runoff estimation</li>
              <li>
                Use of remote sensing and GIS for crop condition assessment
              </li>
              <li>
                Use of remote sensing and GIS for ET estimation and water
                production
              </li>
              <li>
                Use of remote sensing and GIS for irrigation performance
                assessment.
              </li>
              <li>
                Conjunctive use planning of surface and ground water resources
              </li>
            </ol>
            <p className="text_academic">
              The dissertations submitted by the students are nevertheless on
              par with international standards and won appreciations from many
              subject matter specialists. The students are motivated and
              inspired the well qualified experienced Professors. Compared to
              other states, the students are qualifying in ICAR/JRF/SRF exams as
              well as NETs and bringing laurels to the Institute. The faculty
              and students are frequently provided with opportunity to update
              their skills by providing hands on training on the use of latest
              software tools by inviting eminents from all India and abroad as
              well.
            </p>
            <h2
              style={{
                color: "#0A2451",
                textAlign: "center",
                textDecoration: "underline",
                paddingTop: "30px",
                paddingBottom: "20px",
              }}
            >
              Department Staff
            </h2>
            <div className="text-with-image">
            <div>
                <img className="imageAcademic" src={s10} alt="Image" />
                <h3>Dr. G. Ravi Babu</h3>
                <p className="text_academic">PROFESSOR & HEAD</p>
                <p className="text_academic">+91 9848572321</p>
                <p className="text_academic">g.ravibabu@angrau.ac.in</p>
              </div>
            </div>
            <div className="text-with-image">
            <div>
                <img className="imageAcademic" src={s11} alt="Image" />
                <h3>Er. M. Karunya</h3>
                <p className="text_academic">ASSISTANT PROFESSOR</p>
                <p className="text_academic">+91 9490321440</p>
                <p className="text_academic">m.karunya@angrau.ac.in</p>
              </div>
            </div>
          </section>
          <section className="page-section" id="category-04">
            <h2 className="sub_heading">
              Department of Irrigation & Drainage Engineering.
            </h2>
            <p className="text_academic">
              Natural Resource management is one of the important aspects of
              sustainable agriculture. Now a days, facing more problems like
              water scarcity, land degradation and pressure on agricultural
              lands due to development of urban areas and industries etc. There
              is a need to develop the methods for increasing the irrigation
              water use efficiency and land productivity. Water management and
              reclamation of saline and water logging soils in particular, face
              a considerable challenge in meeting the demands of increasing food
              production and security at both national and international level,
              soil protection, flood control and climate change. In this
              pursuit, to improve knowledge and skills to the UG and PG
              Students, the department of Irrigation and Drainage Engineering
              deals with the courses on Groundwater, wells and pumps, Irrigation
              engineering, Sprinkler and Micro irrigation Systems and Drainage
              engineering with the techniques of water management, rain water
              harvesting, surface and groundwater hydrology, watershed
              management and remote sensing applications etc. Some faculty are
              involving in reclamation of salt affected and waterlogged lands in
              irrigated agriculture and application of remote sensing and GIS
              techniques for performance assessment of the irrigation projects.
              All faculty well versed with the computer models related to soil
              and water engineering such as SURFER, CRIWAR, CROPWAT, DUFLOW,
              MODFLOW, DRAINMOD, SALTMOD and WINFLUME etc. The department has
              different laboratories such as wells and pumps laboratory,
              meteorology laboratory and filed irrigation laboratory with well
              established equipments such as hydraulic flume with re-circulation
              system, different types of cut models regarding pumps, display
              models regarding water management and irrigation engineering,
              different type of water measuring structures, micro irrigation
              systems, solar pumping, automatic weather station and other recent
              equipment/instruments. The department is working in the close
              coordination with the several projects like A P Water Management,
              APMIP etc.
            </p>
            <h3>
              The department has the following well established laboratories
              with state-of-the art equipment and facilities:
            </h3>
            <ol>
              <li>Filed Irrigation Laboratory</li>
              <li>Field Solar Pump Laboratory</li>
              <li>Wells and Pumps Laboratory</li>
              <li>Meteorology laboratory</li>
            </ol>
            <table>
              <thead>
                <tr>
                  <th>SI No.</th>
                  <th>Name of the laboratory</th>
                  <th>Name of the Important Equipment/Instruments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Field Irrigation Lab</td>
                  <td>
                    Well irrigation system, Fields with drip irrigation system,
                    Fertigation equipment, Soil moisture measuring devices, ,
                    Power weeder, Rain gauges, Evaporimeter, Automatic weather
                    station, Hydraulic flume, Soil augers, Hot air oven, etc.
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Irrigation and Drainage Lab</td>
                  <td>
                    Double ring infiltrometer, Soil moisture measuring devices
                    (FDR), Parshall flumes, RBC flumes, Water meter, Current
                    meter, Mole plough, Total station, GPS, Electronic
                    theodolite, EC and pH meters etc.
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Field Irrigation Lab</td>
                  <td>
                    Cut models of different pumps, Different impellers, Pumps,
                    Motors, Solar pumping system, Water level recorders etc.
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-with-image">
            <div className="Academic">
                <img className="imageAcademic" src={id1} alt="Image" />
                <h3>Irrigation and drainage laboratory</h3>
              </div>
              <div className="Academic">
                <img className="imageAcademic" src={id2} alt="Image" />
                <h3>Cut models of various pumps</h3>
              </div>
            </div>
            <div className="text-with-image">
            <div className="Academic">
                <img className="imageAcademic" src={id3} alt="Image" />
              </div>
              <div className="Academic">
                <img className="imageAcademic" src={id4} alt="Image" />
              </div>
            </div>
            <h4 style={{ textAlign: "center" }}>
              Field experiments at Field Irrigation lab in College of
              Agricultural Engineering, Bapatla
            </h4>
            <div className="text-with-image">
            <div className="Academic">
                <img className="imageAcademic" src={id5} alt="Image" />
                <h3>Soil Moisture Probe</h3>
              </div>
              <div className="Academic">
                <img className="imageAcademic" src={id6} alt="Image" />
                <h3>Digital Planimeter</h3>
              </div>
            </div>
            <div className="text-with-image">
            <div className="Academic">
                <img className="imageAcademic" src={id7} alt="Image" />
                <h3>Drip Experimental plot at Field irrigation lab</h3>
              </div>
              <div className="Academic">
                <img className="imageAcademic" src={id8} alt="Image" />
                <h3>
                  Harvesting of Bhendi from experimental plots at Field
                  irrigation lab
                </h3>
              </div>
            </div>
            <div className="text-with-image">
            <div className="Academic">
                <img className="imageAcademic" src={id9} alt="Image" />
                <h3>Installation of drainage system</h3>
              </div>
              <div className="Academic">
                <img className="imageAcademic" src={id10} alt="Image" />
                <h3>Laying of mulch in the field</h3>
              </div>
              <div className="Academic">
                <img className="imageAcademic" src={id11} alt="Image" />
                <h3>Hand held GPS</h3>
              </div>
            </div>
            <div className="text-with-image">
            <div className="Academic">
                <img className="imageAcademic" src={id12} alt="Image" />
                <h3>Fertigation Pump</h3>
              </div>
              <div className="Academic">
                <img className="imageAcademic" src={id13} alt="Image" />
                <h3>Water level indicator</h3>
              </div>
            </div>
            <h2
              style={{
                color: "#0A2451",
                textAlign: "center",
                textDecoration: "underline",
                paddingTop: "30px",
                paddingBottom: "20px",
              }}
            >
              Department Staff
            </h2>
            <div className="text-with-image">
            <div>
                <img className="imageAcademic" src={s12} alt="Image" />
                <h3>Dr. R. Ganesh Babu</h3>
                <p className="text_academic">ASSISTANT PROFESSOR & HEAD</p>
                <p className="text_academic">+91 9441392044</p>
                <p className="text_academic">r.ganeshbabu@angrau.ac.in</p>
              </div>
            </div>
            <div className="text-with-image">
            <div>
                <img className="imageAcademic" src={s13} alt="Image" />
                <h3>Dr. K. KRUPAVATHI</h3>
                <p className="text_academic">ASSISTANT PROFESSOR</p>
                <p className="text_academic">+91 9533877666</p>
                <p className="text_academic">k.krupavathi@angrau.ac.in</p>
              </div>
              <div>
                <img className="imageAcademic" src={s14} alt="Image" />
                <h3>Dr. Ch. RATNA RAJU</h3>
                <p className="text_academic">ASSISTANT PROFESSOR</p>
                <p className="text_academic">+91 7337567544</p>
                <p className="text_academic">Ch.ratnaraju@angrau.ac.in</p>
              </div>
            </div>
          </section>
          <section className="page-section" id="category-05">
            <h2 className="sub_heading">
              Department of Renewable Energy Engineering.
            </h2>
            <p className="text_academic">
              The department of Renewable Energy Engineering Caters to
              development of human resource in the field of renewable energy
              technologies, energy auditing, waste management, air pollution
              control, environmental impact assessment. Further, this department
              shall provide in-depth knowledge and technical skills to students
              to face the challenges that lie ahead in a continuously changing
              world, by offering different perspectives of renewable energy
              resources, conservation of the natural resources and enhancement
              of environmental quality. Leadership for identifying emerging
              issues and develop innovative solutions to protect and restore the
              environment shall also be imparted as part of learning.
            </p>
            <h2
              style={{
                color: "#0A2451",
                textAlign: "center",
                textDecoration: "underline",
                paddingTop: "30px",
                paddingBottom: "20px",
              }}
            >
              Department Staff
            </h2>
            <div className="text-with-image">
            <div>
                <img className="imageAcademic" src={s18} alt="Image" />
                <h3>Dr. B. John Wesley</h3>
                <p className="text_academic">PROFESSOR & HEAD</p>
                <p className="text_academic">+91 9441936374</p>
                <p className="text_academic">b.johnwesley@angrau.ac.in</p>
              </div>
            </div>
          </section>
          <section className="page-section" id="category-06">
            <h2 className="sub_heading">
              Department of Basic Engineering & Applied Sciences.
            </h2>
            <p className="text_academic">
              BASIC ENGINEERING & APPLED SCIENCES is a department of College of
              Agricultural Engineering which will offer a robust,
              multidisciplinary education in the areas of Basic Engineering and
              applied sciences programs as per fifth dean committee to B. Tech
              agricultural engineering students. This is demonstrated by the
              curriculum with a total load share of 41.75% in terms of credits
              and 58% in terms of subjects.
            </p>
            <p className="text_academic">
              Students are taught certain aspects of Civil Engineering,
              Mechanical Engineering, Electrical Engineering, Mathematics,
              Physics, Chemistry, Communication Skills and Personality
              Development, Entrepreneurship Development and Business Management
              applicable to Agricultural Engineering which they can directly or
              indirectly apply in the field after graduating from their alma
              matter. It also helps in analyzing design &amp; construction as
              aspects of different topics of structures like farm structures,
              storage sheds &amp; biogas plants etc. B. Tech. Agri. Engineering
              students are also taught courses in Hydrology &amp; Environment
              Engineering by virtue of which they develop expertise in water
              Resources availability and management. The knowledge acquired by
              the students from these courses helps them in getting admission in
              M. Tech Programme in Water Resources, Hydrology, Water Management,
              Environmental Engineering, Farm Machinery etc., in addition to the
              discipline directly applicable to Agricultural Engineering.
            </p>
            <h3>List of courses in Basic Engineering</h3>
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Course No.</th>
                  <th>Title of the Course</th>
                  <th>Credit hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>AEBE 161</td>
                  <td>Surveying and Levelling</td>
                  <td>3 (1+2)</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>AEBE 162</td>
                  <td>Engineering Mechanics</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>AEBE 163</td>
                  <td>Engineering Drawing</td>
                  <td>2 (0+2)</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>AEBE 164</td>
                  <td>Fluid Mechanics and Open Channel Hydraulics</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>AEBE 165</td>
                  <td>Strength of Materials</td>
                  <td>2 (1+1)</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>AEBE 166</td>
                  <td>Workshop Technology and Practices</td>
                  <td>3 (1+2)</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>AEBE 167</td>
                  <td>Applied Electronics and Instrumentation</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>AEBE 168</td>
                  <td>Computer Programming and Data Structures</td>
                  <td>3 (1+2)</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>AEBE 261</td>
                  <td>Heat and Mass Transfer</td>
                  <td>2 (2+0)</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>AEBE 262</td>
                  <td>Soil Mechanics</td>
                  <td>2 (1+1)</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>AEBE 263</td>
                  <td>Theory of Machines</td>
                  <td>2 (2+0)</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>AEBE 264</td>
                  <td>Electrical Machines and Power Utilization</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>AEBE 265</td>
                  <td>Auto CAD Applications</td>
                  <td>2 (0+2)</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>AEBE 266</td>
                  <td>Machine Design</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>AEBE 267</td>
                  <td>Thermodynamics, Refrigeration and Air Conditioning</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>AEBE 361</td>
                  <td>Design of Structures</td>
                  <td>2 (1+1)</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>AEBE 362</td>
                  <td>Building Construction and Cost Estimation</td>
                  <td>2 (2+0)</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>AEBE 363</td>
                  <td>Web Designing and Internet Applications</td>
                  <td>2 (1+1)</td>
                </tr>
              </tbody>
            </table>
            <h3>List of courses in Applied Sciences</h3>
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Course No.</th>
                  <th>Title of the Course</th>
                  <th>Credit hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>AEAS 171</td>
                  <td>Engineering Mathematics-I (Matrices and Calculus)</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>AEAS 172</td>
                  <td>Engineering Physics</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>AEAS 173</td>
                  <td>Engineering Chemistry</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>AEAS 174</td>
                  <td>Principles of Agronomy and Organic Farming</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>AEAS 175</td>
                  <td>Communication Skills and Personality Development</td>
                  <td>2 (1+1)</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>AEAS 176</td>
                  <td>Engineering Mathematics-II (Differential Equations)</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>AEAS 177</td>
                  <td>Environmental Science and Disaster Management</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>AEAS 178</td>
                  <td>Principles of Soil Science</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>AEAS 271</td>
                  <td>
                    Principles of Horticultural Crops and Plant Protection
                  </td>
                  <td>2 (1+1)</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>AEAS 272</td>
                  <td>Entrepreneurship Development and Business Management</td>
                  <td>3 (2+1)</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>AEAS 273</td>
                  <td>
                    Engineering Mathematics-III (Numerical analysis and
                    Statistical methods)
                  </td>
                  <td>3 (2+1)</td>
                </tr>
              </tbody>
            </table>
            <h3>List of Laboratories:</h3>
            <div className="text-with-image">
              <div>
                <img className="imageAcademic" src={ea1} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea2} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea3} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea4} alt="Image" />
              </div>
            </div>
            <div className="text-with-image">
              <div>
                <img className="imageAcademic" src={ea5} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea6} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea7} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea8} alt="Image" />
              </div>
            </div>
            <div className="text-with-image">
              <div>
                <img className="imageAcademic" src={ea9} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea10} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea11} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea12} alt="Image" />
              </div>
            </div>
            {/* <div className="text-with-image">
              <div>
                <img className="imageAcademic" src={ea13} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea14} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea15} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea16} alt="Image" />
              </div>
            </div>
            <div className="text-with-image">
              <div>
                <img className="imageAcademic" src={ea17} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea18} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea19} alt="Image" />
              </div>
              <div>
                <img className="imageAcademic" src={ea20} alt="Image" />
              </div>
            </div> */}
            <h2
              style={{
                color: "#0A2451",
                textAlign: "center",
                textDecoration: "underline",
                paddingTop: "30px",
                paddingBottom: "20px",
              }}
            >
              Department Staff
            </h2>
            <div className="text-with-image">
            <div>
                <img className="imageAcademic" src={s6} alt="Image" />
                <h3>Dr. B. HARIBABU</h3>
                <p className="text_academic">ASSISTANT PROFESSOR & HEAD</p>
                <p className="text_academic">+91 9493032250</p>
                <p className="text_academic">m.madhava@angrau.ac.in</p>
              </div>
            </div>
            <div className="text-with-image">
            <div>
                <img className="imageAcademic" src={s15} alt="Image" />
                <h3>Er. B. Raj Naveen</h3>
                <p className="text_academic">ASSOCIATE PROFESSOR</p>
                <p className="text_academic">+91 8019708694</p>
                <p className="text_academic">rajnaveenb@gmail.com</p>
              </div>
              <div>
                <img className="imageAcademic" src={s16} alt="Image" />
                <h3>Er. V. Balaraju</h3>
                <p className="text_academic">ASSOCIATE PROFESSOR</p>
                <p className="text_academic">+91 9550445490</p>
                <p className="text_academic">vbrajuu@gmail.com,</p>
              </div>
              <div>
                <img className="imageAcademic" src={s17} alt="Image" />
                <h3>Er. K. Lavanya</h3>
                <p className="text_academic">ASSOCIATE PROFESSOR</p>
                <p className="text_academic">+91 9381500947</p>
                <p className="text_academic">lavanyasrikari@gmail.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer style={{ color: "white", backgroundColor: "white" }} id="footer">
        footer
      </footer>
    </div>
  );
};

export default Academic;
