import React from 'react'
import "../styles/Navbar.css"
import chevron from "../assets/chevron.svg"
import logo from "../assets/clglogo.png"
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <>

      <nav className="stickey">
      <img className="logoImage" src={logo} />
  <label style={{float:"right", backgroundColor:"#435426"}} for="drop" className="toggle">&#8801;</label>
 
  <input type="checkbox" id="drop" />
  <ul className="menu">
  
    <li><Link to="/" >Home</Link></li>
    <li> 
      {/* <!-- First Tier Drop Down --> */}
      <label for="drop-1" className="toggle">AboutUs +</label>
      <a href="#">AboutUs</a>
      <input type="checkbox" id="drop-1"/>
      <ul>
        <li className="middle"><Link to="/HistoricalBackground" >Historical backgroun</Link></li>
        {/* <li  className="middle"><Link to="/Vision & Mandate" >Vision and Mandate</Link></li> */}
        <li  className="middle"><Link to="/Organizational Structure" >Organizational structure</Link></li>
        <li  className="middle"><Link to="/Status Of Accredation" >Status of accredation</Link></li>
        
      </ul>
    </li>


    <li> 
      
      {/* <!-- First Tier Drop Down --> */}
      <label for="drop-2" className="toggle">Administration</label>
      <Link to="Administration">Administration</Link>
      {/* <input type="checkbox" id="drop-2"/> */}
      {/* <ul>
        <li><a href="#">Vice chancellor</a></li>
        <li><a href="#">Deans of Faculty</a></li>
        <li><a href="#">Asso. Dean</a></li>

        <li> 
          
          
          <label for="drop-3" className="toggle">Supporting +</label>
          <a href="#">Supporting</a>
          <input type="checkbox" id="drop-3"/>
          <ul>
            <li><a href="#">Administrative Officer</a></li>
            <li><a href="#">Warden</a></li>
            <li><a href="#">Academic matters Incharge</a></li>
            <li><a href="#">Student affair Incharge</a></li>
            <li><a href="#">Placement Officer</a></li>
            <li><a href="#">Transport Incharge</a></li>
          </ul>
        </li>
      </ul> */}
    </li>


    <li> 
      
      {/* <!-- First Tier Drop Down --> */}
      <label for="drop-4" className="toggle">Academics +</label>
      <a href="#">Academic</a>
      <input type="checkbox" id="drop-4"/>
      <ul>
        <li><a href="#">Courses</a></li>

        <li> 
          
          {/* <!-- Second Tier Drop Down --> */}
          <label for="drop-9" className="toggle">Departments +</label>
          <a href="#">Departments</a>
          <input type="checkbox" id="drop-9"/>
          <ul>
            <li><a href="#">About Department</a></li>
            <li><a href="#">Lab infrastructure</a></li>
            <li><a href="#">HOD & Faculty</a></li>
          </ul>
        </li>
      </ul>
    </li>


    <li> 
      {/* <!-- First Tier Drop Down --> */}
      <label for="drop-5" className="toggle">Student's Welfare +</label>
      <a href="#">Student's Welfare</a>
      <input type="checkbox" id="drop-5"/>
      <ul>
        <li><a href="#">Hostels</a></li>
        <li ><a href="#">Sports, Cultural & Literary</a></li>
        <li ><a href="#">Scholarships</a></li>
        <li ><a href="#">NCC/NSS</a></li>
        <li><a href="#">International students</a></li>
        <li ><a href="#">PlacementCell</a></li>
        <li ><a href="#">Health clinics</a></li>
        <li ><a href="#">Alumni</a></li>
        <li><a href="#">Anti-Ragging cell</a></li>
        <li ><a href="#">SC/ST cell</a></li>
        <li ><a href="#">Women protection Cell</a></li>
        <li ><a href="#">Library & e-Resources</a></li>


        
      </ul>
    </li>





    <li><a href="#">Publications</a></li>
    <li><a href="#">Contact US</a></li>

  </ul>
</nav>
    </>
  )
}

export default Navbars



// import React, { useState } from 'react';
// import "../styles/Navbar.css"
// import chevron from "../assets/chevron.svg"
// import logo from "../assets/clglogo.png"
// // import "./styles.css"
// export default function Navbars() {

// const [open, setOpen] = useState(false);

// const toggleMenu = () => document.body.classList.toggle("open")

//   return (
//     <nav id="navClr" className="navbar">
//     <button onClick={() => toggleMenu()} className="burger"></button>
//     <img className="logoImage" src={logo} />
//     <button className="button">Home</button>
//     <div className="dropdowns">

      
//       <div className="dropdown">
//         <button className="button">
//           About us
//           <img src={chevron} />
//         </button>
//         <div className="dropdown-menu">
//           <button>Historical background</button>
//           <button>Vision and Mandate</button>
//           <button>Organizational structure</button>
//           <button>Status of accredation</button>
//         </div>
//       </div>


//       <div className="dropdown">
//         <button className="button">
//           Administration
//           <img src={chevron} />
//         </button>
//         <div className="dropdown-menu">  {/* sublelel menu */}
//           <button>Vice-chancellor</button>
//           <button>Deans of Faculty</button>
//           <button>Associate-dean</button>
//                 <div className="dropdown-2">
//                   <button className='button-2'>Supporting<img src={chevron} /></button>
//                       <div className="dropdown-menu-2">
//                         <button>Administrative-officer</button>
//                         <button>Warden</button>
//                         <button>Academic matters incharge</button>
//                         <button>Student affair incharge</button>
//                         <button>Academic matters incharge</button>
//                         <button>Student affair incharge</button>
//                         <button>Placement Officer</button>
//                         <button>Transport Incharge</button>
//                     </div>
//                 </div>
//       </div>
//     </div>


//       <div className="dropdown">
//         <button className="button">
//           Academics
//           <img src={chevron}  />
//         </button>
//         <div className="dropdown-menu">
//           <button >Courses</button>
//           <div className="dropdown-2">
//                   <button className='button-2'>Departments <img src={chevron} /></button>
//                       <div className="dropdown-menu-2">
//                         <button>About Department</button>
//                         <button>Laboratory infrastructure</button>
//                         <button>HOD and Faculty</button>
//                     </div>
//                 </div>
//         </div>
//       </div>



//       <div className="dropdown">
//         <button className="button">
//           Student's Welfare
//           <img src={chevron} />
//         </button>
//         <div className="dropdown-menu">
//           <button>Hostels</button>
//           <button>Extra Curriculars</button>
//           <button>Scholarships</button>
//           <button>NSS/NCC</button>
//           <button>International students</button>
//           <button>Placement cell</button>
//           <button>Health clinics</button>
//           <button>Alumni</button>
//           <button>Anti-ragging cell</button>
//           <button>SC/ST cell</button>
//           <button>Women protection cell</button>
//           <button>Library and e-Resources</button>
//         </div>
//       </div>
//       <button className="button">Publications</button>
//       <button className="button">Contact Us</button>
//     </div>
//   </nav>
//   )
// }