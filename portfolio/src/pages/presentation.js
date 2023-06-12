import "../presentation.css"
import { IconContext } from "react-icons";
import { GiDiploma } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";

const Presentation = () => {
    return( 
    <div>    
      <h1>Presentation</h1>
      {/* mettre des carrés qui ce retourne quand on clique afin de dévoiler des informations */}
     <div className="square_grid">
      <div className = "square_wrapper">
          <div className="square_inner">
            <div className =" recto">
            <IconContext.Provider value={{ color: "black", className: "presentation_icon", size:"4em"}}>
          <div className="icon_presentation_wrapper">
            <AiOutlineSolution />
          </div>
        </IconContext.Provider>
            </div>
            <div className =" verso">
              <p className="square_content">Nom : Woillard<br/>
              Prénom : Éric <br/>
              Profession : Développeur informatique (en devenir)</p>
            </div>
          </div>
        </div>
        <div className = "square_wrapper">
          <div className="square_inner">
            <div className =" recto"> 
            <IconContext.Provider value={{ color: "black", className: "presentation_icon", size:"4em"}}>
          <div className="icon_presentation_wrapper">
            <GiDiploma />
          </div>
        </IconContext.Provider>
            </div>
            <div className =" verso">
            <p className="square_content">DUT Informatique (Bac +2) : 2020-2022</p>
            </div>
          </div>
        </div>
        <div className = "square_wrapper">
          <div className="square_inner">
            <div className =" recto"></div>
            <div className =" verso"></div>
          </div>
        </div>
        <div className = "square_wrapper">
          <div className="square_inner">
            <div className =" recto"></div>
            <div className =" verso"></div>
          </div>
        </div>
    </div>
      
    </div>
    )
  };
  
  export default Presentation;
  