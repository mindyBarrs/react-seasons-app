import React from "react";


const Spinner = (props) => {
    return(
        <div className="ui active inverted dimmer" style={{backgroundImage: "linear-gradient(to right, #0c1c84, #f7ba0f , #163fed)"}}>
            <div className="ui big text loader">
               {props.message}
            </div>
        </div>
    );
}

Spinner.defaultProps = {
    message: "Loading..."
}

export default Spinner;