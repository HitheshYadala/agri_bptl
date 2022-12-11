import React, {useState} from 'react'
import NewsTicker from "react-advanced-news-ticker"

export default function Events() {

    const [data, setData] = useState([
        {
          id: `bulletItem_1`,
          defaultMessage:
            "Pound hovers around $1.24 on growing concern over chaotic Brexit"
        },
        {
          id: `bulletItem_2`,
          defaultMessage: "Why Brexiters do not fully trust Boris Johnson"
        },
        {
          id: `bulletItem_3`,
          defaultMessage: "Johnson is accused of living in fantasy world"
        }
      ])

  return (
    <div>
         <NewsTicker
          style={{color:"#f49421", 
          fontWeight:"bold", 
          // float:"left", 
          textAlign:"left",
          paddingBottom:"10px",
          paddingTop:"10px",
          zindex:"1",
        }}
      className = "myClassName1"
      maxRows = {15}
      duration = {1500}
    //   hasMoved = {this.updateInfos}
      speed={800}
      pauseOnHover={true}
      started = {()=>{
      console.log('react advanced news ticker just started!');
      }}
      paused = {()=>{
      console.log('react advanced news ticker has been paused.');
      }}>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_1 Pound hovers around $1.24 on growing</div>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_2 Pound hovers around $1.24 on growing</div>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_3 Pound hovers around $1.24 on growing</div>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_4 Pound hovers around $1.24 on growing</div>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_5 Pound hovers around $1.24 on growing</div>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_6 Pound hovers around $1.24 on growing</div>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_7 Pound hovers around $1.24 on growing</div>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_8 Pound hovers around $1.24 on growing</div>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_9 Pound hovers around $1.24 on growing</div>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_10 Pound hovers around $1.24 on growing Pound hovers around $1.24 on growing Pound hovers around $1.24 on growing</div>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_11 Pound hovers around $1.24 on growing Pound hovers around $1.24 on growing Pound hovers around $1.24 on growing </div>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_12 Pound hovers around $1.24 on growing Pound hovers around $1.24 on growing Pound hovers around $1.24 on growing Pound hovers around $1.24 on growing</div>
      <div style={{padding:("5px 0px 5px 0px")}} className="space">bulletItem_13 Pound hovers around $1.24 on growing</div>

      {console.log(data)}
      </NewsTicker>
    </div>
  )
}
