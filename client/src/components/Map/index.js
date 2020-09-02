import React from "react";
import Area from "../AreaButton";
import map from "../../images/hyrulemap.png";
import Toggle from "../Toggle/index"
import "./style.css"

function Map(props) {
    return (
        <div id="map-container">
            <img id="map" src={map} alt="Hyrule Map"/>
            <div id="marker-container">
                <Area setMessage={props.setMessage} filterChecks={props.filterChecks}/>
            </div>
        </div>
    )
}

export default Map;

