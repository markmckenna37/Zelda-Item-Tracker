import React from "react";
import Area from "../AreaButton";
import map from "../../images/hyrulemap.png";
import "./style.css"

function Map() {
    return (
        <div id="map-container">
            <img id="map" src={map} alt="Hyrule Map"/>
            <div id="marker-container">
                <Area/>
            </div>
        </div>
    )
}

export default Map;

{/* <Square className="kokiriForest" top="425px" left="950px"/>
<Square className="dekuTree" top="350px" left="1100px"/>
<Square className="lostWoods" top="325px" left="925px"/>
<Square className="hyruleField" top="350px" left="650px"/>
<Square className="lonlonRanch" top="255px" left="575px"/>
<Square className="hyruleMarket" top="155px" left="600px"/>
<Square className="kakVillage" top="155px" left="775px"/>
<Square className="graveyard" top="160px" left="875px"/>
<Square className="deathMountain" top="100px" left="750px"/>
<Square className="goronCity" top="60px" left="800px"/>
<Square className="dodongosCavern" top="60px" left="740px"/>
<Square className="zorasRiver" top="225px" left="925px"/>
<Square className="zorasDomain" top="175px" left="1150px"/>
<Square className="jabu" top="125px" left="1125px"/>
<Square className="lakeHylia" top="550px" left="455px"/>
<Square className="forestTemple" top="275px" left="950px"/>
<Square className="fireTemple" top="20px" left="790px"/>
<Square className="iceCavern" top="100px" left="1150px"/>
<Square className="waterTemple" top="640px" left="440px"/>
<Square className="bottomOfTheWell" top="155px" left="825px"/>
<Square className="shadowTemple" top="150px" left="930px"/>
<Square className="gerudoValley" top="250px" left="300px"/>
<Square className="gerudoTrainingGround" top="175px" left="270px"/>
<Square className="desert" top="175px" left="120px"/>
<Square className="spiritTemple" top="140px" left="15px"/>
<Square className="ganonsCastle" top="60px" left="625px"/> */}