import React from "react";
import "./Styles/Navbar.css"
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import CollageLogo from "../assets/clglogo.png"
// import { Height } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
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
    marginTop:"10px",
    width : "100px",
    height: "90px",
  }
}));

const style = {
    backgroundColor: '#0A2451',
  };

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div >
    <AppBar style={style} position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img className={classes.logoImg} src={CollageLogo} alt="logo"/>
          
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/admission" className={classes.link}>
              Admission
            </Link>
            <Link to="/academic" className={classes.link}>
              Academic
            </Link>
            <Link to="/studentwelfare" className={classes.link}>
            studentwelfare
            </Link>
            <Link to="/publications" className={classes.link}>
            publications
            </Link>
            <Link to="/contactus" className={classes.link}>
            contactus
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
    </div>
  );
}
export default Navbar;