import React, { useState } from "react";
import "../components/Styles/Studentwelfare.scss";
import ar from "../assets/antiragging.png";
import hc1 from "../assets/healthclinic1.png";
import hc2 from "../assets/healthclinic2.png";
import hc3 from "../assets/healthclinic3.png";
import l1 from "../assets/Libraryone.png";
import l2 from "../assets/Librarytwo.png";
import l3 from "../assets/Librarythree.png";
import l4 from "../assets/healthclinic3.png";
import l5 from "../assets/Libraryfive.png";
import n1 from "../assets/Nssone.png";
import n2 from "../assets/Nsstwo.png";
import n3 from "../assets/Nssthree.png";
import n4 from "../assets/Nssfour.png";
import n5 from "../assets/Nssfive.png";
import n6 from "../assets/Nsssix.png";
import n7 from "../assets/Nssseven.png";
import n8 from "../assets/Nsseight.png";
import c1 from "../assets/Culturalone.png";
import c2 from "../assets/Culturaltwo.png";
import sp1 from "../assets/Sportsone.png";
import sp2 from "../assets/Sportstwo.png";
import sp3 from "../assets/Sportsthree.png";
import sp4 from "../assets/Sportsfour.png";

function Studentwelfare() {
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const getContent = () => {
    switch (selectedButton) {
      case "button1":
        return (
          <div>
            <h2 className="side_heading">Anti-Ragging Cell</h2>
            <p className="text_studentwelfare">
              College is having Anti-Ragging Cell, formulated every year, which
              consists of Associate Dean, Officer In-Charge of Student
              Activities as Convener, Deputy Superintendent of Police, Circle
              Inspector of Police, Mandal Revenue Officer, Advocate, Department
              Heads, Officer In-Charge of Academic Matters of UG and PG,
              faculty, Physical Director, students of II, III and Final Year
              B.Tech. (Agricultural Engineering), parents of the students,
              Reporters of Daily News Papers, Reporters of News Channels,
              Secretaries of NGOs, etc. This Cell monitors the any eventuality
              of the ragging case in the campus. Apart from Anti-Ragging Cell,
              there is a Disciplinary Action Committee existing in the College
              for taking any further action on the erring students.
            </p>
            <div>
              <img className="raggingimage" src={ar} alt="Image" />
            </div>

            <ul>
              <li>
                Strict measures to prevent ragging in the college have been
                undertaken.
              </li>
              <li>
                Ragging acts banners were displayed in college and hostels.
              </li>
              <li>
                Anti-ragging banners were displayed in college and hostels.
              </li>
              <li>
                Anti-ragging schedules were allotted to Staff, PG students and
                Final year students of college.
              </li>
              <li>Anti-ragging squads are formed.</li>
              <li>Anti-ragging committee is formed.</li>
              <li>
                One semi-transparent complaint is kept in main college building
                and hostels.
              </li>
              <li>
                Obtaining signatures from First year students stating whether
                there is ragging in hostels daily two times a day.
              </li>
              <li>
                Circulation of anti-ragging toll free number and mobile nos. of
                all the Teaching staff with First year students and their
                parents.
              </li>
              <li>
                Ragging affidavits (Annexure I – Student and Annexure II –
                Parent) from First year students and their parents were
                collected as a mandatory
              </li>
              <li>
                Round the clock monitoring system in place for preventing
                ragging in the campus.
              </li>
            </ul>
          </div>
        );
      case "button2":
        return (
          <div>
            <h2 className="side_heading">Health Clinic</h2>
            <p className="text_studentwelfare">
              College health clinic is established for advancing the health and
              wellbeing of individuals enrolled in this institution. At present
              health clinic has a medical officer and two contract staff for
              taking good care of ill students with medical bed facility.
            </p>
            <h3 style={{ textAlign: "center" }}>
              Health Clinic at Dr NTC College of Agricultural Engineering
            </h3>
            <div className="text-of-studentwelfare">
              <div className="imagehealth">
                <img className="imageStudentwelfare" src={hc1} alt="Image"/>
              </div>
              <div className="imagehealth">
                <img className="imageStudentwelfare" src={hc2} alt="Image" />
              </div>
              <div className="imagehealth">
                <img className="imageStudentwelfare" src={hc3} alt="Image" />
              </div>
            </div>
            
          </div>
        );
      case "button3":
        return (
          <div>
            <h2 className="side_heading">Library and Computer centre</h2>
            <p className="text_studentwelfare">
              Library creates a beautiful environment for the students to learn
              and grasp knowledge without any interference. Library is a
              valuable asset to the college and it is so spacious and contains
              many books, e-books, Book Bank Scheme, Reference section and
              journals (both Foreign and Indian), which have been published by
              both national and international authors. There are 11,934 books
              available in the library. And the library is updated with KOHA
              Library Management Software. The library offers computer books
              with CDs, dictionaries (Telugu to English and English to Telugu),
              handbooks, annual reports, General Studies and the World Atlas so
              that students can prepare for competitive exams, such as the UPSC,
              APPSC, BSRB Bank exams, GRE, GMAT, TOEFL, IELTS, GMAT, CAT etc.
              Apart from these, there is wide variety of Telugu and English
              daily newspapers and popular weekly &amp; monthly magazines like
              Rythunestham, Annadata, Vyavasayam and competitive magazines are
              also being kept for students’ general reading.
            </p>
            <p className="text_studentwelfare">
              There are fully air-conditioned UG and PG computer centers which
              provides highly interactive learning environment. Both UG and PG
              Computer rooms are well equipped with 40 and 15 computers having
              high end configuration with 40 MBPS Internet speed to utilize the
              electronic information, namely CeRA, CAB Abstracts, KrishiKosh,
              EBSCO, Indiastat, CRC Netbase e-books, CAB e-books, Elsevier
              e-books, CMIE, EPWRF India Times Series, EZ Proxy, DELNET, OPAC,
              etc. for the improvement of academic and research standards. The
              practical classes of “Computer Programming in C” AUTOCAD and
              “Computational methods through C Programming”, Library and
              Information services for U.G. and P.G. students used to conduct in
              computer centre. There are also other facilities like
              photocopying, computer printing and internet facility in college
              library which helps students in their academic activities
            </p>

            <div className="text-of-studentwelfare">
              <div className="imagelibrary">
                <img className="imageStudentwelfare" src={l1} alt="Image" />
                <h3>STUDENTS NEWS PAPER SECTION</h3>
              </div>
              <div className="imagelibrary">
                <img className="imageStudentwelfare" src={l2} alt="Image" />
                <h3>STUDENTS READING SECTION</h3>
              </div>
            </div>
            <div className="text-of-studentwelfare">
              <div className="imagelibrary">
                <img className="imageStudentwelfare" src={l3} alt="Image" />
                <h3>LIBRARY</h3>
              </div>
              <div className="imagelibrary">
                <img className="imageStudentwelfare" src={l4} alt="Image" />
                <h3>UP COMPUTER LAB AND DIGITAL LIBRARY</h3>
              </div>
              <div className="imagelibrary">
                <img className="imageStudentwelfare" src={l5} alt="Image" />
                <h3>PG COMPUTER LAB</h3>
              </div>
            </div>
          </div>
        );
      case "button4":
        return (
          <div>
            <h2 className="side_heading">NSS Unit</h2>
            <p className="text_studentwelfare">
              National Service Scheme (NSS) is an Indian government-sponsored
              public service program conducted by the Department of Youth
              Affairs and Sports under the Government of India. The NSS
              programme is an integral part of course curriculum of B.Tech.
              (Agricultural Engineering) in Dr.NTR College of Agricultural
              Engineering, Bapatla. The NSS programme comprises of regular
              activities (120 hours) and Annual Special Camp (120 hours). The
              regular activities are being conducted on campus and off-campus
              throughout the year.
            </p>
            <p className="text_studentwelfare">
              Regular and special NSS activities like clean and green,
              plantation of saplings, social and health awareness rallies, free
              medical health camp, free veterinary health camp, door to door
              surveys etc. are conducted in and around Bapatla and also in
              adopted villages. Two NSS units are allocated to this college and
              are in full functioning mode from first year of the course. NSS is
              aimed at developing students’ personality through community
              service in undergraduate students. NSS special camp is being
              organized every year at two places by two NSS units. The NSS
              volunteers actively participate in cleaning the premises of
              college campus every week as per the weekly schedule. Further, NSS
              volunteers can improve many skills through NSS activities; some
              important are as follows:
            </p>
            <ul>
              <li>
                Enabling students to acquire specialized competence in
                communication skills
              </li>
              <li>
                Improving awareness on local crops related problems and needs of
                the farmers and in turn imparting thinking and technical skills
              </li>
              <li>Acquiring leadership qualities</li>
              <li>Developing good attitude and behavioural aspects</li>
            </ul>
            <p className="text_studentwelfare">
              The Annual Special Camps are being conducted in a rural village
              for 7 days and the NSS volunteers have to stay in the village
              during the special camp. All the NSS volunteers who have served
              NSS for 3 years and have performed 240 hours of work under NSS are
              being issued a certificate from the Acharya N.G.Ranga Agricultural
              University, Lam, Guntur with the signature of the Hon’ble
              Vice-Chancellor and the NSS Programme Coordinator at University
              level (Dean of Student Affairs).
            </p>
            <div className="text-of-studentwelfare">
              <div className="imageNSS">
                <img className="imageStudentwelfare" src={n1} alt="Image" />
                <h3>Clean and green programme</h3>
              </div>
              <div className="imageNSS">
                <img className="imageStudentwelfare" src={n2} alt="Image" />
                <h3>Plantation of saplings</h3>
              </div>
              <div className="imageNSS">
                <img className="imageStudentwelfare" src={n8} alt="Image" />
                <h3>National unity day programme</h3>
              </div>
            </div>
            
            <div className="text-of-studentwelfare">
              <div className="imageNSS">
                <img className="imageStudentwelfare" src={n5} alt="Image" />
                <h3>Free medical health camp programme</h3>
              </div>
              <div className="imageNSS">
                <img className="imageStudentwelfare" src={n6} alt="Image" />
                <h3>Free veterniary health camp programme</h3>
              </div>
              <div className="imageNSS">
                <img className="imageStudentwelfare" src={n7} alt="Image" />
                <h3>Blood donation camp</h3>
              </div>
            </div>
            <div className="text-of-studentwelfare">
              <div className="imageNSS">
                <img className="imageStudentwelfare" src={n3} alt="Image" />
                <h3>Rally on “Yoga for Haumanity”</h3>
              </div>
              <div className="imageNSS">
                <img className="imageStudentwelfare" src={n4} alt="Image" />
                <h3>International Yoga Day Proframme</h3>
              </div>
            </div>
          </div>
        );
      case "button5":
        return (
          <div>
            <h2 className="side_heading">Career Development Cell</h2>
            <p className="text_studentwelfare">
              Students are encouraged to seek opportunities and enhance their
              learning experience with practical knowledge. The Career
              Development Cell provides a platform for the students and the
              companies as well so that the collaboration is mutually
              beneficial.
            </p>
            <p className="text_studentwelfare">
              Once a student enters this University, the Institution takes the
              entire responsibility to develop that individual into a
              personality. The students are overwhelmed with the opportunities
              they are provided with. They are left open to umpteen number of
              choices lying in front of them to choose in parallel to their
              academics. Centurion believes in enhancing its students through
              dedicated concentration on each and every student and sees to that
              everyone enhances their talents with the opportunities they are
              provided with. Once the placement season commences, one can feel
              the vibrant environment on the campus. Talents go barely
              unrecognized at Centurion as we leave no stone unturned to place
              our students.
            </p>
            <p className="text_studentwelfare">
              Career Development Cell carries the twin responsibility of
              conducting Career Counseling and Training Programmes, and
              organizing the campus recruitment activities of the School. All
              students are encouraged to attend the training programs for an
              enhanced performance in the campus interviews. We hand hold our
              students through career guidance; through motivational activities
              and counseling, through knowledge sharing activities and through
              various capacity building measures. The trainees are closely
              monitored for improvements and gauged through several VST’s and
              company Mock tests, until they are ready and have gained
              eligibility.
            </p>
            <p className="text_studentwelfare">
              Programs like JAVA Certification in association with IBM , Network
              Certification in association with CISCO, DB2 training
              Certification in association with IBM and Campus Connect in
              association with Infosys are some of the achievements of the
              center.
            </p>
            <h3>Soft Skills – Employability Skills:</h3>
            <p className="text_studentwelfare">
              An all comprehensive programme – soft skill aims at enhancing the
              personality of the students right from the first semester.
            </p>
            <ul>
              <li>Lays strong foundation for students’ self-development.</li>
              <li>
                Develops the right attitude towards their personal, social and
                professional life.
              </li>
              <li>
                Enables students to strengthen their interpersonal skills and
                work effectively in a team.
              </li>
              <li>
                Empowers them in decision making and conflict resolution with a
                win – win attitude.
              </li>
              <li>
                Prepares students to meet the requirements of the corporate
                world by imparting employability skill training which includes
                video profile, professional etiquette, etc.
              </li>
            </ul>
            <h3>Quantitative Aptitude and Logical Reasoning:</h3>
            <p className="text_studentwelfare">
              Ability to apply basic concepts of mathematics coupled with
              analytical reasoning skills to solve problems.
            </p>
            <ul>
              <li>Sharpens general mental ability and basic numeracy.</li>
              <li>Develops logical reasoning and analytical ability.</li>
              <li>
                Equips with techniques and tricks to perform data interpretation
                accurately.
              </li>
            </ul>
            <h3>Verbal Aptitude:</h3>
            <p className="text_studentwelfare">
              Ability to understand and reason out texts using concepts.
            </p>
            <ul>
              <li>
                Develops constructive thinking skills underlying verbal logic.
              </li>
              <li>Enriches vocabulary</li>
              <li>
                Equips with speed reading comprehension and critical reasoning
                abilities
              </li>
              <li>Strengthens grammar and improves linguistic proficiency</li>
            </ul>
            <p className="text_studentwelfare">
              The Curriculum caters to aspirants of
            </p>
            <ul>
              <li>Placements</li>
              <li>
                Competitive exams for higher studies like GRE, GMAT, CAT, XAT,
                GRE, TOEFL, IELTS, etc,.
              </li>
              <li>Government and Banking sector exams.</li>
            </ul>
            <h3>Our Objectives:</h3>
            <ul>
              <li>
                Acquire interpersonal skills and be an effective goal oriented
                team player
              </li>
              <li>
                Develop professionalism with idealistic, practical and moral
                values
              </li>
              <li>Acquire communication and problem solving skills</li>
              <li>
                Build a strong base in the fundamental mathematical concepts
              </li>
              <li>
                Grasp the approaches and strategies to solve problems with speed
                and accuracy
              </li>
              <li>
                Master fundamental grammatical rules for making effective and
                flawless use of the language
              </li>
            </ul>
          </div>
        );
      case "button6":
        return (
          <div>
            <h2 className="side_heading">Cultural Centre</h2>
            <p className="text_studentwelfare">
              There is no separate Cultural Centre established in the College.
              But, students practice in the cultural activities in Common Halls
              available in the Hostels. Students of this college participate in
              all the intercollegiate cultural and literary events. Few students
              got selected for participation in inter university competitions,
              Youth Festival, etc.
            </p>
            <div className="text-of-studentwelfare">
              <div className="imagesports">
                <img className="imageStudentwelfare" src={c1} alt="Image" />
                <h3>Cultural Program in the College</h3>
              </div>
              <div className="imagesports">
                <img className="imageStudentwelfare" src={c2} alt="Image" />
                <h3>Cultural Program – Inter-Collegiate</h3>
              </div>
            </div>
            <h2 className="side_heading">Sports and Games</h2>
            <p className="text_studentwelfare">
              Students practice the games daily in the evening under supervision
              of the Physical Director. There is one practical class in first
              year B.Tech. (Agricultural Engineering) to make the students
              conversant with rules and regulations of Physical Education. Boys
              Hostel is having a well-equipped Gym for improving the fitness of
              the students.
            </p>
            <h3 style={{ textAlign: "center" }}>
              Sports and Games Infrastructural Facilities
            </h3>
            <div className="text-of-studentwelfare">
            <div className="imagesportstable">
                <img className="imageStudentwelfare" src={sp1} alt="Image" />
              </div>
            </div>
            <div className="text-of-studentwelfare">
            <div className="imagesports">
                <img className="imageStudentwelfare" src={sp2} alt="Image" />
                <h3>Basket Ball Court</h3>
              </div>
              <div className="imagesports">
                <img className="imageStudentwelfare" src={sp3} alt="Image" />
                <h3>Volley Ball Court</h3>
              </div>
              <div className="imagesports">
                <img className="imageStudentwelfare" src={sp4} alt="Image" />
                <h3>Open Gym Facilities</h3>
              </div>
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
      <div className="button-row1">
        <button
          className="raiser raiserbutton content"
          onClick={() => handleButtonClick("button1")}
        >
          Anti-Ragging Cell
        </button>
        <button
          className="raiser raiserbutton content"
          onClick={() => handleButtonClick("button2")}
        >
          Health Clinic
        </button>
        <button
          className="raiser raiserbutton content"
          onClick={() => handleButtonClick("button3")}
        >
          Library and Computer centre
        </button>
        <button
          className="raiser raiserbutton content"
          onClick={() => handleButtonClick("button4")}
        >
          NSS Unit
        </button>
        <button
          className="raiser raiserbutton content"
          onClick={() => handleButtonClick("button5")}
        >
          Career Development Cell
        </button>
        <button
          className="raiser raiserbutton content"
          onClick={() => handleButtonClick("button6")}
        >
          Cultural Centre & Sports
        </button>
      </div>
      {getContent()}
    </div>
  );
}

export default Studentwelfare;
