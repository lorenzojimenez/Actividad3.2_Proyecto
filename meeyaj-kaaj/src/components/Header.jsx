import { Link } from "react-router-dom";
import logo from "../assets/logo-placeholder.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo Meeyaj Kaaj" />
        <h2>Meeyaj Kaaj</h2>
      </div>

      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/vacantes">Vacantes</Link>
          </li>

          <li>
            <Link to="/empresa">Empresas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;