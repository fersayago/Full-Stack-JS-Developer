import React from "react";
import { NavLink } from "react-router-dom";

// reemplazamops a por Navlink ya que react no quiere que se actualice la pagina
// para usar el NavLink reemplazamos el href por to

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">
      Inicio
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeStyle={{ fontWeight: "bold" }}
            to="/mensaje"
          >
            Mensaje
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeStyle={{ fontWeight: "bold" }}
            //to="/mensaje1"
            to="/mensaje1/Mensaje Nro 1/green"
          >
            Mensaje 1
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeStyle={{ fontWeight: "bold" }}
            //to="/mensaje2"
            to="/mensaje2/Mensaje Nro 2/orangered"
          >
            Mensaje 2
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            activeStyle={{ fontWeight: "bold" }}
            //to="/mensaje3"
            to="/mensaje3/Mensaje Nro 3/blue"
          >
            Mensaje 3
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
