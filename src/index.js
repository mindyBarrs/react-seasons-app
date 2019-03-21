/* LIBRARIES */
import React from "react";
import ReactDOM from "react-dom";

/* COMPONENTS */
import SeasonDisplay from "./compnents/SeasonDisplay/SeasonDisplay";
import Spinner from "./compnents/Spinner/Spinner";

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
    }

    /* GOOD PLACE TO DO MORE DATA-LOADING WHEN STATE/PROP CHANGES 
    componentDidUpdate(){
        console.log("My component just updated -  it rerendered!");
    }*/

    /* GOOD PLACE TO DO CLEANUP 
    componentWillUnMount(){

    }*/
    
    render(){
        if(this.state.err && !this.state.lat){
            return(<div>
                        Error: {this.state.errorMessage}
                    </div>);
        }
                
        if(!this.state.errorMessage && this.state.lat){
            return( 
                <SeasonDisplay lat={ this.state.lat }></SeasonDisplay>
            );
        }
                    
        return(<Spinner></Spinner>);
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);