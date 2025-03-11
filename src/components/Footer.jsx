import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p>Copyright © 2020 Top Sport International</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fas fa-phone"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Datos de Contacto</h3>
          <p>Calle Los Jades 117, Of 202, Surco</p>
          <p>Lima, Perú</p>
          <p>Teléfono: +511 7196900</p>
          <p>Celular: +511 994607784</p>
          <p>Email: ventas@topsportintl.com</p>
        </div>
        <div className="footer-section">
          <h3>Mantente en contacto</h3>
          <p>Déjanos tu correo y nos comunicaremos contigo</p>
          <button className="contact-button">CONTÁCTANOS</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;