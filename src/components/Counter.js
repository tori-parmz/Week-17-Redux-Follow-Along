//separating UI features from the functionality

import React from "react";
import { connect } from "react-redux";
//connect function is a higher order component
import { incrementCounter, decrementCounter } from "../redux/actions"
import CardBody from "./CardBody"

const Counter = ({ count, increment, decrement }) => {
//place the "count" property from initialState in reducer
    // const handleIncrement = () => {
        //use the redux funtion dispatch, taken over the component
        //dispatch an action (object)
        // dispatch({ type: "INCREMENT" });
        //handled by the reducer
        //actions have a mandatory property "type"
        //type can use any name and the function is specified in reducer
    //  };

    // const handleDecrement = () => {
    //     dispatch({ type: "DECREMENT" });
    //  };


    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                Click Counter!
            </div>
            <CardBody 
            count={count}
            handleIncrement={increment}
            handleDecrement={decrement}
            />
        </div>
    )

}


const mapDispatchToProps = dispatch => {
    //dispatch fires events (actions)
    return{
        increment: () => dispatch(incrementCounter()),
        decrement: () => dispatch(decrementCounter())

    };
        
};

const mapStateToProps = state => ({
    count: state.count //"count" name is from initialState argument in reducer
    //map state to props = takes state and converts it into
    //props (no more individual state in components)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//connect takes 4 arguments, to recieve the updated state
// 1. mapStateToProps — converts state to props
// 2. mapDispatchToProps — convert dispact to custom functions and pass it in
//connect function connects component to redux
