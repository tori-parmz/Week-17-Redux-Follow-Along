import React from "react";
import { connect } from "react-redux";
import { incrementDosCounter, decrementDosCounter } from "../redux/actions";
import CardBody from "./CardBody";

const DosCounter = ({ dosCount, dosIncrement, dosDecrement }) => {
  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">
        Dos Counter!
        </div>
      <CardBody
        count={dosCount}
        handleIncrement={dosIncrement}
        handleDecrement={dosDecrement}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  //dispatch fires events (actions)
  return {
    dosIncrement: () => dispatch(incrementDosCounter()),
    dosDecrement: () => dispatch(decrementDosCounter()),
  };
};

const mapStateToProps = (state) => ({
  dosCount: state.dosCounter.dosCount, //use the same name as the property
});

export default connect(mapStateToProps, mapDispatchToProps)(DosCounter);

//connect takes 4 arguments, to recieve the updated state
// 1. mapStateToProps — converts state to props
// 2. mapDispatchToProps — convert dispact to custom functions and pass it in
//connect function connects component to redux
