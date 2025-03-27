import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Redes sociales</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fas fa-envelope"></i></a>
            <a href="#"><i className="fas fa-phone"></i></a>
          </div>
        </div>
        <div className="footer-section explora">
          <h3>Explora</h3>
          <p><a href="#">Inicio</a></p>
          <p><a href="#">Nosotros</a></p>
          <p><a href="#">Servicios</a></p>
          <p><a href="#">Proyectos</a></p>
          <p><a href="#">Contacto</a></p>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p><i className="fas fa-map-marker-alt"></i> Coop.Huancayo Mz. K Lote 1 – El Agustino Lima, Perú</p>
          <p><i className="fas fa-phone-alt"></i> Teléfono: +01 623 – 5577</p>
          <p><i className="fas fa-mobile-alt"></i> Celular: 953 796 029</p>
          <p><i className="fas fa-envelope"></i>ftrujillo@multinnovasportperu.com</p>
        </div>
        <div className="footer-section">
          <h3>Escribenos</h3>
          <p>Déjanos tu correo y nos comunicaremos contigo</p>
          <button className="contact-button">CONTÁCTANOS</button>
        </div>
      </div>
      <button className="back-to-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </button>
      <p className="footer-copyright">
        Copyright © 2025 MultinnovaSportPerú
      </p>
    </footer>
  );
}

export default Footer;