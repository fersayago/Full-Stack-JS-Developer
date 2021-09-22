import React from "react";
import "./App.css";
import { Mensaje } from "./components/Mensaje";
import Navbar from "./components/Navbar";
import Entrada from "./components/Entrada";
import InvalidRoute from "./components/InvalidRoute";
import Estructura from "./components/Estructura";
import Atributo from "./components/Atributo";
import Formulario from "./components/Formulario"


/* imports de router */
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="jumbotron">
          <h1>Mi proyecto React.js</h1>
          <h2>Router</h2>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Redirect to="/entrada" />
              </Route>

              {/* Ruteado con parametro por props */}
              <Route path='/entrada' component={
                () => <Entrada titulo="Entrada desde prop"/>
              }/>

              {/* Ruteado sin parametros */}
              <Route path='/estructura' component={Estructura}/>
              <Route path='/atributo' component={Atributo}/>
              <Route path='/formulario' component={Formulario}/>

              {/* Ruteado con parametro por ruta */}
              <Route path="/mensaje" component={Mensaje}></Route>
              <Route path="/mensaje1/:titulo/:colorFondo" component={Mensaje} />
              <Route path="/mensaje2/:titulo/:colorFondo" component={Mensaje} />
              <Route path="/mensaje3/:titulo/:colorFondo" component={Mensaje} />

              <Route component={InvalidRoute} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
