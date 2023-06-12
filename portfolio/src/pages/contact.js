import "../presentation.css"
import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaDiscord,FaItchIo } from "react-icons/fa";


const Contact = () => {

  return( 
  <div>    
    <h1>Contact</h1>
    {/* mettre des carrés qui ce retourne quand on clique afin de dévoiler des informations */}
   <div className="square_grid">
    <div className = "square_wrapper">
        <div className="square_inner">
          <div className ="recto">
          <IconContext.Provider value={{ color: "black", className: "presentation_icon", size:"4em"}}>
        <div className="icon_presentation_wrapper">
          <AiOutlineMail />
        </div>
      </IconContext.Provider>
          </div>
          <div className ="verso">
            <a className="square_content" href="mailto:eric.woillard@gmail.com">eric.woillard@gmail.com</a>
          </div>
        </div>
      </div>
      <div className = "square_wrapper">
        <div className="square_inner">
          <div className ="recto"> 
          <IconContext.Provider value={{ color: "black", className: "presentation_icon", size:"4em"}}>
        <div className="icon_presentation_wrapper">
          <AiFillGithub />
        </div>
      </IconContext.Provider>
          </div>
          <div className ="verso">
          <a href="https://github.com/tristeceratops" className="square_content">https://github.com/tristeceratops</a>
          </div>
        </div>
      </div>
      <div className = "square_wrapper">
        <div className="square_inner">
          <div className ="recto">
          <IconContext.Provider value={{ color: "black", className: "presentation_icon", size:"4em"}}>
        <div className="icon_presentation_wrapper">
          <FaDiscord />
        </div>
      </IconContext.Provider></div>
          <div className ="verso">
            <p className="square_content">Tristecératops#3452</p>
          </div>
        </div>
      </div>
      <div className = "square_wrapper">
        <div className="square_inner">
          <div className ="recto">
          <IconContext.Provider value={{ color: "black", className: "presentation_icon", size:"4em"}}>
        <div className="icon_presentation_wrapper">
          <FaItchIo />
        </div>
      </IconContext.Provider></div>
          <div className ="verso">
            <p>En construction !</p>
          </div>
        </div>
      </div>
  </div>
    
  </div>
  )
};
  
  export default Contact;
  