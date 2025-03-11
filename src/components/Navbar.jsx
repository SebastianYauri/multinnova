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
            <li className="navbar-item"><a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded">INICIO</a></li>
            <li className="navbar-item"><a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded">NOSOTROS</a></li>
            <li className="navbar-item"><a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded">PRODUCTOS</a></li>
            <li className="navbar-item"><a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded">SERVICIOS</a></li>
            <li className="navbar-item"><a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded">PROYECTOS</a></li>
            <li className="navbar-item"><a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded">CONTACTO</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;