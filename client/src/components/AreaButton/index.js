import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import Tippy from "@tippy.js/react";
import checkContext from "../../utils/checkContext"
import "./style.css";
import "tippy.js/dist/tippy.css";

function Area(props) {
  const [areas, setAreas] = useState([]);
  const {checks} = useContext(checkContext)
  // const [checks, setChecks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadAreas();
  }, []);

  // Loads all books and sets them to books
  function loadAreas() {
    API.getAreas()
      .then((res) => setAreas(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      {areas.map((area) => (
        <div>
          <Tippy content={area.title}>
            <button
              className="marker"
              style={{ top: area.top, left: area.left }}
              onClick={() => {
                props.setMessage(area.name);
                
              }}
            ></button>
          </Tippy>
        </div>
      ))}
    </>
  );
}

export default Area;
