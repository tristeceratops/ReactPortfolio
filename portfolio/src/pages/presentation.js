import "../presentation.css"

const Presentation = () => {
    return( 
    <div>    
      <h1>Presentation</h1>
      {/* mettre des carrés qui ce retourne quand on clique afin de dévoiler des informations */}
     <div className="square_grid">
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
  