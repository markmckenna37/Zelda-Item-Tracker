import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import Tippy from "@tippy.js/react";
import checkContext from "../../utils/checkContext";
import "./style.css";
import "tippy.js/dist/tippy.css";

function Area(props) {
  const [areas, setAreas] = useState([]);
  const { checks } = useContext(checkContext);

//loading areas
  useEffect(() => {
    loadAreas();
  }, []);

  // Loads all areas and sets them to areas
  function loadAreas() {
    API.getAreas()
      .then((res) => setAreas(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
    {/* Mapping all areas onto the map */}
      {areas.map((area) => (
        <div>
          <Tippy content={area.title}>
            <button
              className="marker"
              style={{ top: area.top, left: area.left }}
              onClick={() => {
                //setting the area name and filtering checks to be rendered on click.
                props.setMessage(area.name);
                props.filterChecks(area.name);
              }}
            ></button>
          </Tippy>
        </div>
      ))}
    </>
  );
}

export default Area;
