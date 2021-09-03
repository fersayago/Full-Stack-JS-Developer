import React from "react";

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
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">
            Home <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Features
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Pricing
          </NavLink>
        </li>
        <li className="nav-item">
          <Navlink
            className="nav-link disabled"
            to="/"
            tabIndex="-1"
            aria-disabled="true"
          >
            Disabled
          </Navlink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
