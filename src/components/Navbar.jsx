import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="logo-image" 
            draggable="false" 
            onMouseDown={(e) => e.preventDefault()} 
            tabIndex="-1" 
          />
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <button className="close-button" onClick={toggleMenu}>✖</button>
          <ul>
            <li className="navbar-item"><a href="#">INICIO</a></li>
            <li className="navbar-item"><a href="#">NOSOTROS</a></li>
            <li className="navbar-item"><a href="#">SERVICIOS</a></li>
            <li className="navbar-item"><a href="#">PROYECTOS</a></li>
            <li className="navbar-item"><a href="#">CONTACTO</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;