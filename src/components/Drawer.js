import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
  },
  icon: {
    color: "white",
    justifyContent: "right",
    marginRight: "10px",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#0A2451",
    padding: "8px",
    zIndex: 1,
    display: "none",
    "&.show": {
      display: "block",
    },
  },
  subLink: {
    display: "block",
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    margin: "8px 0",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [academicDropdown, setAcademicDropdown] = useState(false);

  const handleAcademicMouseEnter = () => {
    setAcademicDropdown(true);
  };

  const handleAcademicMouseLeave = () => {
    setAcademicDropdown(false);
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        anchor="bottom"
        onClose={() => setOpenDrawer(false)}
      >
        <List style={{ backgroundColor: "#0A2451" }}>
          <Link to="/" className={classes.link}>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Divider />

          <Link to="/about" className={classes.link}>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>About</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link to="/admission" className={classes.link}>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>Admission</ListItemText>
            </ListItem>
          </Link>
          <Divider />

          <Divider />
          <Link to="/academic" className={classes.link}>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>Academic</ListItemText>
            </ListItem>
          </Link>
          <Divider />

          <Divider />
          <Link to="/studentwelfare" className={classes.link}>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>Student Welfare</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link to="/publications" className={classes.link}>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>Publications</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link to="/contactus" className={classes.link}>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>ContactUs</ListItemText>
            </ListItem>
          </Link>
          <Divider />
        </List>
      </Drawer>
      <IconButton
        size="medium"
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
