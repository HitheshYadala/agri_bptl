import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import img1 from "../assets/landing1.jpg"
import img2 from "../assets/landing2.jpg"

const heights = [
  img1,img2,img2,img1,img1,img2,img1,img2,img1
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicMasonry() {
  return (
    <div
      style={{
        width: "70%",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        paddingTop: "2%",
        paddingBottom: "7%",
      }}
    >
      <Masonry columns={3} spacing={3}>
        {heights.map((height, index) => (
          // <Item key={index} sx={{ height }}>
            <img src={height}/>
          // </Item>
        ))}
      </Masonry>
    </div>
  );
}
