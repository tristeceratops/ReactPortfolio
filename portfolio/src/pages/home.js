import "../presentation.css"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
    return (
    <div>
      <header className="header">
        <h1 className="header__title">Bienvenue !</h1>
        <p className="header__text">
        Welcome ! Willkommen !
        </p>
      </header>
    <div className="home_content_box">
      <section>
        <p>HEHO</p>
      </section>
      <div class="fixed-button-left">
      <Link to="/competence" className="round-button"><FaArrowLeft/></Link>
      </div>
      <div class="fixed-button-right">
      <Link to="/competence" className="round-button"><FaArrowRight/></Link>
      </div>

    </div>
 </div>
  )
  };


  
  export default Home;
  