import React from "react";

const ErrorMessage = (props) => {
    return(
        <div className="ui floating message">
            <p>{props.errorMessage}</p>
        </div>
    );
} 

export default ErrorMessage;