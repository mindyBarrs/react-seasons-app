/* LIBRARIES */
import React from 'react';

// STYLESHEETS 
import "./SeasonDisplay.css";

const seasonConfige = {
    spring:{
        text: "Rain, Rain and pretty flowers...",
        iconName: "massive umbrella icon"
    },
    summer: {
        text: "Let's hit the beach...",
        iconName: "massive sun outline icon"
    },
    fall:{
        text: "Look at the pretty leaves...",
        iconName: "massive leaf icon"
    },
   winter: {
        text: "Burr, it's cold in here...",
        iconName: "massive snowflake outline icon"
    }
}

const getSeason = (lat, month) => {
    switch(month){
        case 0:
            return lat > 0 ? "winter" : "summer"
        case 1:
            return lat > 0 ? "winter" : "summer"
        case 2:
            return lat > 0 ? "spring" : "fall"
        case 3:
            return lat > 0 ? "spring" : "fall"
        case 4:
            return lat > 0 ? "spring" : "fall"
        case 5:
            return lat > 0 ? "summer" : "winter"
        case 6:
            return lat > 0 ? "summer" : "winter"
        case 7: 
            return lat > 0 ? "summer" : "winter"
        case 8: 
            return lat > 0 ? "fall" : "spring"
        case 9:
            return lat > 0 ? "fall" : "spring"
        case 10:
            return lat > 0 ? "fall" : "spring"
        case 11:
            return lat > 0 ? "fall" : "spring"
        default:
            return lat > 0 ? "winter" : "summer"
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