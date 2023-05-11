import './App.css';
import { Provider } from "react-redux";
import Counter from './components/Counter';
import { store } from "./redux/store"




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
