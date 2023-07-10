import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projet = () => {
  return(
    <div>
      <h1>Projet</h1>
      <div class="fixed-button-left">
      <Link to="/competence" className="round-button"><FaArrowLeft/></Link>
      </div>
      <div class="fixed-button-right">
      <Link to="/presentation" className="round-button"><FaArrowRight/></Link>
      </div>
    </div>
    ) 
  };
  
  export default Projet;
  