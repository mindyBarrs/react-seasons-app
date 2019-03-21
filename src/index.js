/* LIBRARIES */
import React from "react";
import ReactDOM from "react-dom";

/* COMPONENTS */
import SeasonDisplay from "./compnents/SeasonDisplay/SeasonDisplay";
import Spinner from "./compnents/Spinner/Spinner";
import ErrorMessage from "./compnents/ErrorMessage/ErrorMessage";

/* Class-Based Component */
class App extends React.Component{
    /* INITIALIZING STATE */
    state = {
        lat: null,
        errorMessage: ""
    };

    /* GOOD PLACE TO DO DATA-LOADING TO A COMPONENT */
    componentDidMount() {
        // GET USERS CURRENT LOCATION FROM GEOLOCATION API
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    };

    /* HELPER FUNCTION */
    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return(
                <ErrorMessage errorMessage={ this.state.errorMessage }></ErrorMessage>
            );
        }
                
        if(!this.state.errorMessage && this.state.lat){
            return( 
                <SeasonDisplay lat={ this.state.lat }></SeasonDisplay>
            );
        }
                    
        return(<Spinner></Spinner>);
    };
    
    render(){
        return(
            <div className="border blue">
                {this.renderContent()}
            </div>
        );
    };
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);