import React, { useState, useEffect, useRef } from "react";
import "./Styles/Navbar.css";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  MenuItem,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import DrawerComponent from "./Drawer";
import CollageLogo from "../assets/clglogo.png";
import headerImg from "../assets/HeaderImg.jpg";
import Logout from "../Logout";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "70px",
  },

  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    position: "relative",
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    borderBottom: "1px solid transparent",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  logoImg: {
    marginTop: "10px",
    width: "100px",
    height: "90px",
  },
  dropdown: {
    position: "fixed",
  },
  dropdownMenu: {
    position: "relative",
    top: "100%",
    left: 0,
    zIndex: 4,
    minWidth: "200px",
    backgroundColor: "#0A2451",
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  menuItem: {
    // position:"absolute",
    fontSize: "16px",
    color: "white",
    textDecoration: "none",
    display: "block",
    padding: theme.spacing(1),
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },
  activeLink: {
    borderBottom: "2px solid white", // Add this style for active links
    color: "yellow",
  },
}));

const style = {
  backgroundColor: "#0A2451",
  height: "10%",
};

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [academicOpen, setAcademicOpen] = useState(false);
  const academicRef = useRef();
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (academicRef.current && !academicRef.current.contains(event.target)) {
        setAcademicOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleAcademicOpen = () => {
    setAcademicOpen(true);
  };

  const handleAcademicClose = () => {
    setAcademicOpen(false);
  };

  return (
    <div>
      <img
        style={{ height: "12em", width: "100%", padding: "2px" }}
        className="HeaderImg"
        src={headerImg}
      />
      <AppBar style={style} position="positionFixed">
        <Typography variant="h4" className={classes.logo}>
          {/* <img className={classes.logoImg} src={CollageLogo} alt="logo" /> */}
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link
              to="/"
              className={`${classes.link} ${
                location.pathname === "/" ? classes.activeLink : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${classes.link} ${
                location.pathname === "/about" ? classes.activeLink : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/admission"
              className={`${classes.link} ${
                location.pathname === "/admission" ? classes.activeLink : ""
              }`}
            >
              Administration
            </Link>

            <Link
              to="/academic"
              className={`${classes.link} ${
                location.pathname === "/academic" ? classes.activeLink : ""
              }`}
            >
              Academics
            </Link>

            <Link
              to="/studentwelfare"
              className={`${classes.link} ${
                location.pathname === "/studentwelfare"
                  ? classes.activeLink
                  : ""
              }`}
            >
              Student Welfare
            </Link>

            <Link
              to="/publications"
              className={`${classes.link} ${
                location.pathname === "/publications" ? classes.activeLink : ""
              }`}
            >
              Publications
            </Link>
            <Link
              to="/contactus"
              className={`${classes.link} ${
                location.pathname === "/contactus" ? classes.activeLink : ""
              }`}
            >
              Contact Us
            </Link>
          </div>
        )}
      </AppBar>
    </div>
  );
}

export default Navbar;

// import React, { useState, useEffect, useRef } from "react";
// import "./Styles/Navbar.css";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   makeStyles,
//   useTheme,
//   useMediaQuery,
//   MenuItem,
// } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import DrawerComponent from "./Drawer";
// import CollageLogo from "../assets/clglogo.png";
// import headerImg from "../assets/HeaderImg.jpg";

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     display: "flex",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     height: "70px",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     position: "relative",
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(10),
//     borderBottom: "1px solid transparent",
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
//   logoImg: {
//     marginTop: "10px",
//     width: "100px",
//     height: "90px",
//   },
//   dropdown: {
//     position: "fixed",
//   },
//   dropdownMenu: {
//     position: "relative",
//     top: "100%",
//     left: 0,
//     zIndex: 4,
//     minWidth: "200px",
//     backgroundColor: "#0A2451",
//     padding: theme.spacing(1),
//     marginTop: theme.spacing(1),
//   },
//   menuItem: {
//     // position:"absolute",
//     fontSize: "16px",
//     color: "white",
//     textDecoration: "none",
//     display: "block",
//     padding: theme.spacing(1),
//     "&:hover": {
//       backgroundColor: "rgba(255, 255, 255, 0.1)",
//     },
//   },
// }));

// const style = {
//   backgroundColor: "#0A2451",
//   height: "10%",
// };

// function Navbar() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [academicOpen, setAcademicOpen] = useState(false);
//   const academicRef = useRef();

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (academicRef.current && !academicRef.current.contains(event.target)) {
//         setAcademicOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   const handleAcademicOpen = () => {
//     setAcademicOpen(true);
//   };

//   const handleAcademicClose = () => {
//     setAcademicOpen(false);
//   };

//   return (
//     <div>
//       <img
//         style={{ height: "12em", width: "100%", padding: "2px" }}
//         className="HeaderImg"
//         src={headerImg}
//       />
//       <AppBar style={style} position="sticky">
//         <Typography variant="h4" className={classes.logo}>
//           {/* <img className={classes.logoImg} src={CollageLogo} alt="logo" /> */}
//         </Typography>
//         {isMobile ? (
//           <DrawerComponent />
//         ) : (
//           <div className={classes.navlinks}>
//             <link to="/" className={classes.link}>
//               Home
//             </link>
//             <link to="/about" className={classes.link}>
//               About
//             </link>
//             <link to="/admission" className={classes.link}>
//               Administration
//             </link>

//               <link to="/academic" className={classes.link}>
//                 Academics
//               </link>

//             <link to="/studentwelfare" className={classes.link}>
//               Student Welfare
//             </link>
//             <link to="/publications" className={classes.link}>
//               Publications
//             </link>
//             <link to="/contactus" className={classes.link}>
//               Contact Us
//             </link>
//           </div>
//         )}
//       </AppBar>
//     </div>
//   );
// }

// export default Navbar;
