/* LIBRARIES */
import React from 'react';

// STYLESHEETS 
import "./seasondisplay.css";

const seasonConfige = {
    summer: {
        text: "Let's hit the beach",
        iconName: " massive sun outline icon"
    },
   winter: {
        text: "Burr, it's cold in here...",
        iconName: " massive snowflake outline icon"
    }
}

const getSeason = (lat, month) => {
    if( month > 3 && month < 9){
        return lat > 0 ? "summer" : "winter";
    }else{
        return lat > 0 ? "winter" : "summer";
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    
    /* DECONSTRUCT */
    const {text, iconName } = seasonConfige[season];

    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName}`} ></i>
            <h1>
                {text}
           </h1>
           <i className={`icon-right ${iconName}`} ></i>
        </div>
    );
};

export default SeasonDisplay;