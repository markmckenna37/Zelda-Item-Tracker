import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import MessageContext from "../../utils/messageContext"
import Tippy from "@tippy.js/react"
import "./style.css"
import "tippy.js/dist/tippy.css"

function Area(props) {

  
  const [areas, setAreas] = useState([])
  // const [checks, setChecks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadAreas()
  }, [])

  // Loads all books and sets them to books
  function loadAreas() {
    API.getAreas()
      .then(res => 
        setAreas(res.data)
      )
      .catch(err => console.log(err));
  };

//   function handleMessageBtnClick(event) {
//     // Get the title of the clicked button
//     const btnName = event.target.getAttribute("className");
//     if (btnName === "marker") {
//         const newLanguageIndex = languageIndex + 1;
//         nextLanguage(newLanguageIndex);
//     } else {
//         const newLanguageIndex = languageIndex - 1;
//         previousLanguage(newLanguageIndex);
//     }
// }

  return (
    <>

      
    {areas.map(area => (
      <div>
      <Tippy content={area.title}>
      <button className="marker" style={{top: area.top, left: area.left}} onClick={() => {props.setMessage(area.name)}}></button>
      </Tippy>
      </div>
    ))}
    </>
    // <img className="marker" src={square} alt="Area Marker" style={style} />
  );
}

export default Area;
