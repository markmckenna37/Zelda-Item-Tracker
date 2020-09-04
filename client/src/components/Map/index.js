import React from "react";
import Area from "../AreaButton";
import map from "../../images/hyrulemap.png";
import "./style.css"

function Map(props) {
    return (
        <div id="map-container">
            <img id="map" src={map} alt="Hyrule Map"/>
            <div id="marker-container">
                <Area setMessage={props.setMessage} setCheckList={props.setCheckList}/>
            </div>
        </div>
    )
}

export default Map;

