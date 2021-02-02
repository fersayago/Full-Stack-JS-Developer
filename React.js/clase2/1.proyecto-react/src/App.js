import './App.css';
import Contador from './components/Contador'
import Mensaje from './components/Mensaje';


function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="jumbotron">
          <h1>Mi Proyecto React</h1>
          <hr/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quia at ipsa praesentium sint culpa amet minus atque non nisi, quam minima provident explicabo. Sed optio modi dolore laborum excepturi?</p>

          <hr/>
          
          <div className="row">
          <Mensaje className="col-4" msj='Mensaje Nro 1' fondo='sandybrown'/>
          <Mensaje className="col-4" msj='Mensaje Nro 2' fondo='burlywood'/>
          <Mensaje className="col-4" msj='Mensaje Nro 3' fondo='blanchedalmond'/>
          
          </div>
          
          <hr/>
          <Contador id="1" valor="123" fondo="brown"/>
          <Contador id="2" valor="321" fondo="beige"/>

        </div>
      </div>
    </div>
  );
}

export default App;
