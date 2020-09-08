import React, { useContext } from "react";
import Area from "../AreaButton";
import map from "../../images/hyrulemap.png";
import "./style.css"

function Map(props) {

    return (
        // Takes props for filter checks and setting message
        <div id="map-container">
            <img id="map" src={map} alt="Hyrule Map"/>
            <div id="marker-container">
                {/* passing props down to our area list */}
                <Area filterChecks={props.filterChecks} setMessage={props.setMessage}/>
            </div>
        </div>
    )
}

export default Map;

