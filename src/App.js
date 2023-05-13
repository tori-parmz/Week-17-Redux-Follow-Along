import './App.css';
import { Provider } from "react-redux";
import Counter from './components/Counter';
import { store } from "./redux/store"
import DosCounter from './components/DosCounter';




//Provider component is the parent component for all other
//components
//passes down the store to each child component through props
function App() {
  return (
    <Provider store={store}>
      <Counter />
      <DosCounter />
    </Provider>
  
  );
}

export default App;
