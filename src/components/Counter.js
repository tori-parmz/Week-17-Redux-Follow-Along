//separating UI features from the functionality

import React from "react";
import { connect } from "react-redux";
//connect function is a higher order component
import CardBody from "./CardBody"

const Counter = ({count, dispatch}) => {
//place the "count" property from initialState in reducer
    const handleIncrement = () => {
        //use the redux funtion dispatch, taken over the component
        //dispatch an action (object)
        dispatch({ type: "INCREMENT" });
        //handled by the reducer
        //actions have a mandatory property "type"
        //type can use any name and the function is specified in reducer
     };

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
     };


    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                Click Counter!
            </div>
            <CardBody 
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            />
        </div>
    )

}

// const connectCounter = connect();

// const ReduxCounter = connectCounter(Counter);

const mapStateToProps = state => ({
    count: state.count //"count" name is from initialState argument in reducer
    //map state to props = takes state and converts it into
    //props (no more individual state in components)
});

export default connect(mapStateToProps)(Counter);

//connect takes 4 arguments, to recieve the updated state
//it needs another argument