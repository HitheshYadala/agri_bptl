import React, { useState, useEffect } from "react";
import "../components/Styles/MessageShifter.css";
import dean from "../assets/Dean.webp";
import assoDean from "../assets/AssoDean.webp";
import { Link } from "react-router-dom";

function Messageshifter() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = [
    {
      name: "Dr. A. MANI",
      who: "Deans Message",
      position: "DEAN OF AGRI. ENGG & TECH",
      photo: dean,
      allText: `Agriculture is the key source of livelihood for 65% of the rural population of the state. The  Agricultural engineering integrates the technologies related to crop production, crop protection as well as post harvest engineering & Technology through advanced mechanation, water conservation practices, irrigation automation, precision farming and renewable energy engineering and processing and value addition there by acheiving seed to fork mechanization.  In a nutshell, it is a profession wherein engineering interventions are introdeced to provide sustainability in agricultural production  by reducing labour costs, achieving timeliness of farm operations with desired efficiency with optimal water usage and reducing post harvest losses. For small farms, with financial limitations and management constraintsthere is a need for creating rural enterprises, custom service centers, agro service-centric, private or more so cooperative owned, catering to the needs and aspirations of weaker sections of the society. These engineering and technological needs demand highly trained agricultural engineers, equipped with knowledge, skills, and practices of engineering technology with full appreciation of biosciences to handle the challenges before them. The College of Agricultural Engineering is aimed to produce a good number of trained Agricultural Engineers to support and maintain the pace of agricultural development in the State.
      The present college was establlished as a Degree programme during 1983 and later upgraded to a college status operating as an individual college since 1994. Till date, college has produced more than 1200 qualified graduates who have been excelling in their fields of interest.
    I m happy to note that college brought a facelift to the existing web site duly incorporating new and latest features.  The college web portal is a gateway to know about college infrastructure, faculty, curricular and co-curricular activities.`,
      text: `Agriculture is the key source of livelihood for 65% of the rural population of the state. The  Agricultural engineering integrates the technologies related to crop production, crop protection as well as post harvest engineering & Technology`,
    },
    {
      name: "Dr D. D. Smith, M.Tech., Ph.D.",
      who: "Associate Deans Message",
      position: "ASSOCIATE DEAN",
      photo: assoDean,
      allText: `Dr. NTR College of Agricultural Engineering, Bapatla had a humble
      beginning in the year 1983 in the premises of Agricultural College, Bapatla in
      the then Department of Agricultural Engineering. Now, it is grown into a
      sprawling area of lush green land on Bapatla-Karlapalem Road on NH 216,
      comprising of two main buildings, four student residential hostels, a workshop
      complex, a library building, research fields, green houses, etc. with all facilities
      to excel in agricultural engineering.
      The College has thrived to emerge as one of the best destinations in India
      for pursuing bachelor and post-graduate studies in field of Agricultural
      Engineering. This College has become the launch pad for the students to raise
      and come out in flying colours in their careers in all the facets of Engineering,
      Technology, and Management. The Faculty are highly qualified from national
      and international premium educational institutions. Come, let us join our hands
      in nurturing and building a life rewarding career of responsible citizens of India
      who can learn and serve the country in the area of Farm Machinery; Post-
      harvest Process and Food Engineering; Soil Water Conservation Engineering,
      and Irrigation and Drainage Engineering.`,
      text: "Dr. NTR College of Agricultural Engineering, Bapatla had a humble beginning in the year 1983 in the premises of Agricultural College, Bapatla in the then Department of Agricultural Engineering.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonialIndex]);

  const { name, position, photo, text, who, allText } =
    testimonials[testimonialIndex];

  return (
    <div className="messageshifter-container">
      <div className="testimonial-container">
        <div className="progress-bar"></div>
        <div className="fas fa-quote-left fa-quote"></div>
        <div className="fas fa-quote-right fa-quote"></div>
        <h1 style={{color:"white"}}>{who}</h1>

        <div className="testimonal_wrapper">
          <span className="textp">
            {text}
            {/* <p><a style={{color:"gray", textDecoration:"none", float:"right"}}href="#">Read more...</a></p> */}

            <Link
              to={{
                pathname: "/individualPage",
                search: `?description=${encodeURIComponent(
                  allText
                )}&image=${encodeURIComponent(photo)}&who=${encodeURIComponent(
                  who
                )}&name=${encodeURIComponent(
                  name
                )}&position=${encodeURIComponent(position)}`,
              }}
              style={{ color: "orange", textDecoration: "none", float: "right", marginTop:"50px"}}
              className="readMore"
            >
              Read more...
            </Link>
          </ span>
          <div className="user">
            <img src={photo} alt="user" className="user-image" />
            <div className="user-details">
              <h4 className="username">{name}</h4>
              <p className="role">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messageshifter;
