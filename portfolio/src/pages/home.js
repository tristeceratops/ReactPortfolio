import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/Home.css";
const Home = () => {
    return (
    <div>
      <header className="header">
        <h1 className="header__title">Éric Woillard</h1>
        <p className="header_text">Développeur en devenir</p>
      </header>
    <div id="home_content_box">
      <div id="home_presentation_box">

      </div>
      <div id="home_menu_box">
        <h2>Sommaire :</h2>
        <ul>
          <li><Link to="/competence" className="menu-button">Competence</Link></li>
          <li><Link to="/projet" className="menu-button">Projet</Link></li>
          <li><Link to="/presentation" className="menu-button">Presentation</Link></li>
          <li><Link to="/contact" className="menu-button">Contact</Link></li>
        </ul>
      </div>
    </div>
      <div class="fixed-button-left">
      <Link to="/contact" className="round-button"><FaArrowLeft/></Link>
      </div>
      <div class="fixed-button-right">
      <Link to="/competence" className="round-button"><FaArrowRight/></Link>
      </div>
 </div>
  )
  };


  
  export default Home;
  