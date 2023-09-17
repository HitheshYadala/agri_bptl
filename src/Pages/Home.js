import { Typography } from "@material-ui/core";
import Landingcarousel from "./Landingcarousel";
import Messageshifter from "./Messageshifter";
import Noticeboard from "./Noticeboard";
import "../components/Styles/Home.css"
import Footer from "./Footer";
import Coursecounter from "./Coursecounter";
import PhotoMasionry from "./PhotoMasionry";
import Hiringpartners from "./Hiringpartners";
import TendersandEvents from "./TendersandEvents";
import Skilldevelopment from "./Skilldevelopment";
// import headerImg from "../assets/HeaderImg.jpg"

function Home() {
  return (
    <>
    {/* <img style={{height:"10em",width:"100%", padding:"4px"}} className="HeaderImg" src= {headerImg}/> */}
      <Landingcarousel />
      <div className="messagenotice-wrapper">
        <div className="shifter">
          <Messageshifter />
        </div>

        <div className="NoticeDiv">
          <Noticeboard />
        </div>
        
      </div>
      
      <Hiringpartners />
      <Skilldevelopment />
      <Coursecounter />

      <TendersandEvents />
      <div style={{paddingBottom:"30px"}}>
      <PhotoMasionry />
      </div>
      
      <Footer/>
    </>
  );
}
export default Home;
