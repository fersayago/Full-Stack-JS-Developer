import './App.css';
//import Mensaje from './components/Mensaje';
import { Mensaje } from './components/Mensaje';
import Contador from './components/Contador'

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="jumbotron">
          <h1>Mi proyecto React</h1>
          <hr />
          <div className="row">
            <div className="col-4">
              <Mensaje titulo="Componente" colorFondo="darkgreen"/>
            </div>
            <div className="col-4">
              <Mensaje titulo="Lorem Ipsum" colorFondo="darkblue"/>
            </div>
            <div className="col-4">
              <Mensaje titulo="Mensaje nro 3" colorFondo="darkred"/>
            </div>
          </div>
          <hr />
          <Contador valor="123" colorFondo="brown"/>
          <br />
          <Contador valor="321" colorFondo="black"/>
        </div>
      </div>
    </div>
  );
}

export default App;
