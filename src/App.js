import logo from './logo.svg';
import './App.css';
import add,{sub,multi,div} from './Cal';
//21

function App() {
  return (
    <>
    <ul>
      <li>{add(40,4)}</li>
      <li>{sub(40,4)}</li>
      <li>{multi(40,4)}</li>
      <li>{div(40,3)}</li>
    </ul>
  </>
  );
}

export default App;
