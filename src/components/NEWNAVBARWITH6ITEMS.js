// import React, { useState } from "react";
// import "./Styles/Navbar.css";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   makeStyles,
//   useTheme,
//   useMediaQuery,
//   Popover,
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
//     marginLeft: theme.spacing(2),
//     color: "white",
//     fontSize: "20px",
//     "& .MuiSelect-select": {
//       paddingLeft: theme.spacing(2),
//     },
//     "& .MuiSelect-icon": {
//       color: "white",
//     },
//   },
//   menuItem: {
//     fontSize: "16px",
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
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handlePopoverOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

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
//             <Link to="/" className={classes.link}>
//               Home
//             </Link>
//             <Link to="/about" className={classes.link}>
//               About
//             </Link>
//             <Link to="/admission" className={classes.link}>
//               Admi
//             </Link>
//             <div
//               className={classes.link}
//               onMouseEnter={handlePopoverOpen}
//               onMouseLeave={handlePopoverClose}
//             >
//               Academic
//               <Popover
//                 open={open}
//                 anchorEl={anchorEl}
//                 onClose={handlePopoverClose}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//               >
//                 <MenuItem
//                   className={classes.menuItem}
//                   component={Link}
//                   to="/academic/item1"
//                   onClick={handlePopoverClose}
//                 >
//                   Item 1
//                 </MenuItem>
//                 <MenuItem
//                   className={classes.menuItem}
//                   component={Link}
//                   to="/academic/item2"
//                   onClick={handlePopoverClose}
//                 >
//                   Item 2
//                 </MenuItem>
//                 <MenuItem
//                   className={classes.menuItem}
//                   component={Link}
//                   to="/academic/item3"
//                   onClick={handlePopoverClose}
//                 >
//                   Item 3
//                 </MenuItem>
//                 <MenuItem
//                   className={classes.menuItem}
//                   component={Link}
//                   to="/academic/item4"
//                   onClick={handlePopoverClose}
//                 >
//                   Item 4
//                 </MenuItem>
//                 <MenuItem
//                   className={classes.menuItem}
//                   component={Link}
//                   to="/academic/item5"
//                   onClick={handlePopoverClose}
//                 >
//                   Item 5
//                 </MenuItem>
//                 <MenuItem
//                   className={classes.menuItem}
//                   component={Link}
//                   to="/academic/item6"
//                   onClick={handlePopoverClose}
//                 >
//                   Item 6
//                 </MenuItem>
//               </Popover>
//             </div>
//             <Link to="/studentwelfare" className={classes.link}>
//               Student Welfare
//             </Link>
//             <Link to="/publications" className={classes.link}>
//               Publications
//             </Link>
//             <Link to="/contactus" className={classes.link}>
//               Contact Us
//             </Link>
//           </div>
//         )}
//       </AppBar>
//     </div>
//   );
// }

// export default Navbar;
