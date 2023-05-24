import { Typography } from "@material-ui/core";
import "../components/Styles/common.scss"
import constructionImg from "../assets/underConstruction.png"

function Contactus() {
  return (
    <div className="construction-container">
      <img src={constructionImg} alt="construction" className="construction-image" />
      <h1>ContactUs Page is Under Construction</h1>
      <p>We are working on something awesome. We'll be here soon.</p>
    </div>
  );
}
export default Contactus;