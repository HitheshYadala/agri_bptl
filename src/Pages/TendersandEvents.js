import React, { useState } from 'react';
import "../components/Styles/TendersandEvents.scss"

function TendersandEvents() {
  const [activeButton, setActiveButton] = useState('tenders');
  const tenderItems = ['Item 1', 'Item 2', 'Item 3'];
  const eventItems = ['Item 4', 'Item 5', 'Item 6'];
  const offerItems = ['Item 7', 'Item 8', 'Item 9'];

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  let items = [];

  switch (activeButton) {
    case 'tenders':
      items = tenderItems;
      break;
    case 'events':
      items = eventItems;
      break;
    case 'offers':
      items = offerItems;
      break;
    default:
      break;
  }

  return (
    <>
    <h1 className='Announcements'>Announcements</h1>
    <div className="boxShadow box_width" style={{ width: '70%', 
                  height: 'auto', 
                //   border: '1px solid black',
                   
                //   padding: '10px', 
                  margin:"auto" 
                }}>
      <div style={{ display: 'flex', 
                    justifyContent: 'space-between' ,
                    // background:"#0A2451"
                 }}>
        <div style={{display:"flex", width:"95%",justifyContent:"space-around",height:"30px",margin:"auto"}}>
        <button className="raise raisebutton" style={{width:"33%"}} onClick={() => handleButtonClick('tenders')}>Careers</button>
        <button className="raise raisebutton" style={{width:"33%"}} onClick={() => handleButtonClick('events')}>Exam Calender</button>
        <button className="raise raisebutton" style={{width:"33%"}} onClick={() => handleButtonClick('offers')}>Tenders</button>
        </div>

      </div>
      <div className='items' style={{paddingTop:"30px", paddingBottom:"30px",}}>
      <ul>
        {items.map((item) => (
          <li style={{listStyleType:"none", fontSize:"14px",color:"#0A2451", fontWeight:"bold",textShadow:"2px 4px 4px rgba(46, 91, 173, 0.6)"}} key={item}>{item}</li>
        ))}
      </ul>
      </div>
    </div>
    </>
  );
}

export default TendersandEvents;
