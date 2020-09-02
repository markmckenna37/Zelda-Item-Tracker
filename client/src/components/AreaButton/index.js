import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import Tippy from "@tippy.js/react"
import "./style.css"
import "tippy.js/dist/tippy.css"

function Area(props) {

  
  const [areas, setAreas] = useState([])
  // const [checks, setChecks] = useState([])
  const [formObject, setFormObject] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false)
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




  return (
    <>
    {areas.map(area => (
      <div>
      <Tippy content={area.title}>
      <button className="marker" style={{top: area.top, left: area.left}} onClick={() => {props.setMessage(area.name); console.log(area.name)}}></button>
      </Tippy>
      </div>
    ))}
    
    </>
    // <img className="marker" src={square} alt="Area Marker" style={style} />
  );
}

export default Area;
