import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import Tippy from "@tippy.js/react"
import "./style.css"
import "tippy.js/dist/tippy.css"

function Area(props) {
  const { top, left } = props;

  // const style = {
  //   position: "absolute",
  //   top: top,
  //   left: left

  // };

  const [areas, setAreas] = useState([])
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

  return (
    <>
    {areas.map(area => (
    <Tippy content={area.title}>
      <button className="marker" style={{top: area.top, left: area.left}}></button>
    </Tippy>
    ))}
    
    </>
    // <img className="marker" src={square} alt="Area Marker" style={style} />
  );
}

export default Area;
