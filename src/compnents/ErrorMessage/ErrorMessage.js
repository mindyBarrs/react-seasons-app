/* LIBRARIES */
import React from "react";

/* STYLESHEETS */
import "./ErrorMessage.css";

const ErrorMessage = (props) => {
    return(
        <div className="ui floating message">
            <p>{props.errorMessage}</p>
        </div>
    );
} 

export default ErrorMessage;