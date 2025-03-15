import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="/image1.jpg" alt="Slide 1" className="carousel-image" />
          <div className="carousel-caption">
            <h2>PANAMERICANOS LIMA 2019</h2>
            <p>Complejo Deportivo Andrés Avelino Cáceres</p>
            <button className="carousel-button">VER MÁS</button>
          </div>
        </div>
        <div>
          <img src="/image2.jpg" alt="Slide 2" className="carousel-image" />
          <div className="carousel-caption">
            <h2>Otro Evento</h2>
            <p>Descripción del evento</p>
            <button className="carousel-button">VER MÁS</button>
          </div>
        </div>
        {/* Agrega más slides según sea necesario */}
      </Slider>
    </div>
  );
};

export default Carousel;