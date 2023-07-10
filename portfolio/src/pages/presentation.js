import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Presentation = () => {
    return( 
    <div>    
      <h1>Presentation</h1>
      <div class="fixed-button-left">
        <Link to="/presentation" className="round-button"><FaArrowLeft/></Link>
        </div>
        <div class="fixed-button-right">
        <Link to="/" className="round-button"><FaArrowRight/></Link>
        </div>  
    </div>
    )
  };
  
  export default Presentation;
  