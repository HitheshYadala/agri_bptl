import { Typography } from "@material-ui/core";
import Landingcarousel from "./Landingcarousel";
import Messageshifter from "./Messageshifter";
import Noticeboard from "./Noticeboard";
import "../components/Styles/Home.css"
import Footer from "./Footer";
import Coursecounter from "./Coursecounter";
import PhotoMasionry from "./PhotoMasionry";
import Hiringpartners from "./Hiringpartners";

function Home() {
  return (
    <>
      <Landingcarousel />
      <div className="messagenotice-wrapper">
        <div className="shifter">
          <Messageshifter />
        </div>

        <div className="NoticeDiv">
          <Noticeboard />
        </div>
        
      </div>
      <PhotoMasionry />
      <Hiringpartners />
      <Coursecounter />
      
      <Footer />
    </>
  );
}
export default Home;
