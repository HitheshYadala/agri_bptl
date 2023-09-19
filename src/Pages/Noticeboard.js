import React, { Component } from "react";
import "../components/Styles/Hiringpartners.scss";
import axios from "axios";
import { Link } from 'react-router-dom';
import { api_url } from "../App";

export default class NoticeBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notices: [],
      isLoading: true,
      dataArr : []
    };

    // Define the handleTitleClick function
    this.handleTitleClick = (id) => {
      // Do something when the title is clicked.
      console.log("You clicked on title:", id);
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  handleMouseOver = () => {
    this.marqueeRef.stop();
  };

  handleMouseOut = () => {
    this.marqueeRef.start();
  };

  componentDidUpdate(prevProps, prevState) {
    // Example: Perform some action if notices state changes after an update
    if (this.state.notices !== prevState.notices) {
      console.log("Notices have been updated:", typeof this.state.notices);
    }
  }

  fetchData = async () => {
    try {
      // Fetch data for carousel and noticeboard
      const noticeboardResponse = await axios.get(
        `${api_url}/noticeboard`
      );
      const allData = noticeboardResponse.data;
      this.setState({dataArr : allData})
      // Extract the titles and set them in the notices array
      const noticeSet = allData.map((item) => item.Title);
      this.setState({ notices: noticeSet, isLoading: false });
      

      // Save notices in localStorage
      localStorage.setItem("notices", JSON.stringify(noticeSet));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };



  render() {
    const { notices, isLoading } = this.state;

    let updates =
      
    this.state.dataArr.map((item, index) => {

        return <li key={index}>
          <Link style={{textDecoration:"none", fontWeight:"bold", color:"orange"}} to={`/noticeBoarddetails/${item._id}`}>{item.Title}</Link>
        
        </li>;
        
      });

    return (
      <div className="notice-board-container">
        <h1 className="Hiring-partners">Notice Board</h1>
        <div className="box">
          <marquee
            height="300"
            width="75%"
            behavior="scroll"
            direction="up"
            scrollamount="4"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            ref={(el) => (this.marqueeRef = el)}
            style={{marginLeft:"150px", color:"#007CC7"}}
          >
            <ul>
              {updates}
            </ul>
          </marquee>
        </div>
      </div>
    );
  }
}

