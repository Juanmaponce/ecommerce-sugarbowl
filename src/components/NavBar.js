import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container-fluid px-0">
      <header className="d-flex flex-wrap justify-content-center mb-4 border-bottom p-3 bg-dark">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">SugarBowl</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/1">Pasteleria</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/2">panaderia</Link>
          </li>
        </ul>
        <CartWidget />
      </header>
    </div>
  );
};

export default NavBar;
