import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p>Copyright © 2025 MultinnovaSportPerú</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fas fa-envelope"></i></a>
            <a href="#"><i className="fas fa-phone"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Datos de Contacto</h3>
          <p>Coop. Huancayo Mz. K Lote 1 – El Agustino</p>
          <p>Lima, Perú</p>
          <p>Teléfono: +01 623 – 5577</p>
          <p>Celular: 953 796 029</p>
          <p>Email: ftrujillo@multinnovasportperu.com</p>
        </div>
        <div className="footer-section">
          <h3>Mantente en contacto</h3>
          <p>Déjanos tu correo y nos comunicaremos contigo</p>
          <button className="contact-button">CONTÁCTANOS</button>
        </div>
      </div>
      <button className="back-to-top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
}

export default Footer;