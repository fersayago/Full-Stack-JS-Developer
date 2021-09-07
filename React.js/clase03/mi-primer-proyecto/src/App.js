import React from "react";
import "./App.css";
import { Mensaje } from "./components/Mensaje";
import Contador from "./components/Contador";
import Navbar from "./components/Navbar";

/* imports de router */
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import InvalidRoute from "./components/InvalidRoute";

//function App() {
class App extends React.Component {
  //bindeamos para poder llamar al contador en el contexto del padre
  constructor() {
    super();
    console.log("App constructor");
    this.recibirDatosHijo = this.recibirDatosHijo.bind(this);
  }

  state = {
    datos: {
      contador: null,
      id: null,
    },
  };

  // hacemos un metodo que nos permita recibir los datos del hijo
  recibirDatosHijo(datos) {
    // destructuramos el objeto
    let { contador, id } = datos;
    console.log(`> App recibirDatosHijo(${id}): ${contador}`);
    //pasamos el contador del hijo para guardarlo en el estado del padre
    this.setState({ datos: datos });
  }

  // el render se dispara cuando es puesto en el index.js
  render() {
    return (
      <div className="App">
        <div className="container mt-3">
          <div className="jumbotron">
            <h1>Mi proyecto React</h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            est beatae fugiat aliquam dignissimos itaque rerum natus fuga dolore
            earum, dolorum deleniti, possimus veritatis delectus. Corrupti,
            molestias! Atque, distinctio placeat.
            <hr />
            <h2>Router</h2>
            <BrowserRouter>
              <Navbar />
              <Switch>
                {/* COMPONENTE RUTEADO PARA RUTA RAIZ */}
                {/* debemos usar redirect */}
                <Route exact path="/">
                  <Redirect to="/mensaje1/Mensaje Nro 1/green" />
                </Route>

                {/* ROUTEADO SIN PARAMETROS */}
                <Route path="/mensaje" component={Mensaje}></Route>

                {/* COMPONENTES RUTEADOS CON PROPS */}
                {/* <Route
                  path="/mensaje1"
                  component={() => (
                    <Mensaje titulo="Mensaje Nro 1 " colorFondo="green" />
                  )}
                />
                <Route
                  path="/mensaje2"
                  component={() => (
                    <Mensaje titulo="Mensaje Nro 2 " colorFondo="orangered" />
                  )}
                />
                <Route
                  path="/mensaje3"
                  component={() => (
                    <Mensaje titulo="Mensaje Nro 3 " colorFondo="blue" />
                  )}
                /> */}
                
                {/* COMPONENTES RUTEADOS POR RUTA */}
                <Route path="/mensaje1/:titulo/:colorFondo" component={Mensaje} />
                <Route path="/mensaje2/:titulo/:colorFondo" component={Mensaje} />
                <Route path="/mensaje3/:titulo/:colorFondo" component={Mensaje} />



                {/* COMPONENTE PARA RUTA NO DEFINIDA */}
                <Route component={InvalidRoute} />
              </Switch>
            </BrowserRouter>




            <h2>Uplifting</h2>
            <br />
            <h3 className="alert alert-success">
              Contador {this.state.datos.id} del Hijo:{" "}
              {this.state.datos.contador}
            </h3>
            <Contador
              id="1"
              valor="123"
              colorFondo="brown"
              enviarContadorAlPadre={this.recibirDatosHijo}
            />
            <br />
            <Contador
              id="2"
              valor="321"
              colorFondo="black"
              enviarContadorAlPadre={this.recibirDatosHijo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
