import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <header className="d-flex flex-wrap justify-content-center mb-4 border-bottom p-3 bg-dark">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-4">SugarBowl</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="/" className="nav-link px-2 text-white" aria-current="page">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-secondary">
                Tortas
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-secondary">
                Panaderia
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-secondary">
                Golosinas
              </a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default NavBar;
