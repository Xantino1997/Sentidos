import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./Header.css"; // Importa tus estilos aquí
import logo from "./assets/sentidos.png";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Simula el estado de inicio de sesión

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión (limpiar el estado, etc.)
    setLoggedIn(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <img className="logo-img" src={logo} alt="EDUTECA" />

        <div class="logo-div">
          <h1 class="titulo-sentidos">
            <span>A</span>
            <span>s</span>
            <span>o</span>
            <span>c</span>
            <span>i</span>
            <span>a</span>
            <span>c</span>
            <span>i</span>
            <span>ó</span>
            <span>n</span>
            <span>_</span>
            <span>S</span>
            <span>e</span>
            <span>n</span>
            <span>t</span>
            <span>i</span>
            <span>d</span>
            <span>o</span>
            <span>s</span>
          </h1>
        </div>
        <div className="menu-icon" onClick={handleMenuToggle}>
          {menuOpen ? "Cerrar" : "Menú"}
        </div>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            <li style={{ backgroundColor: "red" }}>
              <Link to="/">Inicio</Link>
            </li>
            <li style={{ backgroundColor: "blue" }}>
              <Link to="/mision">Mision</Link>
            </li>
            <li style={{ backgroundColor: "violet" }}>
              <Link to="/profesionales">Profesionales</Link>
            </li>
            <li style={{ backgroundColor: "orange" }}>
              <Link to="/contactanos">Contáctanos</Link>
            </li>
            <li style={{ backgroundColor: "green" }}>
              <Link to="/post">Post y Mas</Link>
            </li>
            <li style={{ backgroundColor: "lightgreen" }}>
              <Link to="/videos">Videos</Link>
            </li>
            <li style={{ backgroundColor: "purple" }}>
              <Link to="/testimoniales">Padres</Link>
            </li>
            {/* <li style={{ backgroundColor: "#d9238d" }}>
              <Link to="/nosotros">Nosotros</Link>
            </li> */}
            {!loggedIn ? (
              <li style={{ backgroundColor: "brown", color: "" }}>
                <Link to="/login">Iniciar Sesión</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/crear-eventos">Crear Eventos</Link>
                </li>
                <li>
                  <Link to="/anunciar-cursos">Anunciar Cursos</Link>
                </li>
                <li>
                  <Link to="/subir-file">Subir File</Link>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>
                    Cerrar Sesión
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
