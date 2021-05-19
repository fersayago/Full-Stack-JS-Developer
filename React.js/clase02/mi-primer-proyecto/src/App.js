import './App.css';
//import Mensaje from './components/Mensaje';
import { Mensaje } from './components/Mensaje';

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="jumbotron">
          <h1>Mi proyecto React</h1>
          <hr />
          <Mensaje />
        </div>
      </div>
    </div>
  );
}

export default App;
