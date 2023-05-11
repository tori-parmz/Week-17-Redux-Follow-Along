import './App.css';
import { legacy_createStore } from "redux"
import { Provider } from "react-redux";
import Counter from './components/Counter';

const initialState = {
  count:0

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count+1
      };
    case "DECREMENT":
      return {
        count: state.count-1
      };

    default:
      return state;
  }

}

const store = legacy_createStore(reducer);
//Provider component is the parent component for all other
//components
//passes down the store to each child component through props
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  
  );
}

export default App;
