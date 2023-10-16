import React from "react";
import { useLocation } from 'react-router-dom';
import "../components/Styles/IndividualDeansMessage.scss"

function IndividualDeansMessage() {

    const location = useLocation();
  const params = new URLSearchParams(location.search);
  const description = params.get('description');
  const image = params.get('image');
  const who = params.get('who')
  const name = params.get('name')
  const position = params.get('position')


  return (
    <>
    <div className="theContainer">
        <h1 className='individualPage_headings'>{who}</h1>
      <img className="DeansImages" src={image} />
      <p className="Names">{name}</p>
        <p className="positions">{position}</p>
      
    </div>
    <span className="Deans_description">
        {description}
      </span>
    </>
  );
}

export default IndividualDeansMessage;
