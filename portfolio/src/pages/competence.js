import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Competence = () => {
    return(
      <div>
        <h1>Competence</h1>
        <div class="fixed-button-left">
        <Link to="/" className="round-button"><FaArrowLeft/></Link>
        </div>
        <div class="fixed-button-right">
        <Link to="/projet" className="round-button"><FaArrowRight/></Link>
        </div>
      </div>
      ) 
  };
  
  export default Competence;
  