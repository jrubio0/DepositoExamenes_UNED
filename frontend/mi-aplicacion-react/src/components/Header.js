import React from 'react';
import logo from '../img/logo-uned-calatayud.png'; // Importa la imagen del logo desde la carpeta de imágenes

const Header = () => {
  return (
    <header id="header" className="flat-menu single-menu hidden-print" data-plugin-options='{"stickyEnabled": true, "stickyBodyPadding": true}'>
      <div className="container hidden-print">
        <div className="logo hidden-print"> 
          <a href="/"> 
            {/* Imagen del logo de la UNED Calatayud */}
            <img 
              alt="UNED Calatayud" // Texto alternativo para accesibilidad
              width="130"
              height="64"
              data-sticky-width="130"
              data-sticky-height="64"
              src={logo} // Ruta de la imagen del logo importada
            />
          </a> 
        </div>
        <button 
          className="btn btn-responsive-nav btn-inverse" 
          data-toggle="collapse" 
          data-target=".nav-main-collapse"
        > 
          <i className="fa fa-bars"></i> {/* Icono de hamburguesa para menú desplegable */}
        </button>
      </div>
      
      {/* Menú de navegación desplegable */}
      <div className="navbar-collapse nav-main-collapse collapse">
        <div className="container">
          <nav className="nav-main mega-menu">
            <ul className="nav nav-pills nav-main" id="mainMenu">
              <li><a href="/examenes/"> Exámenes </a></li> {/* Enlace al apartado de exámenes */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
