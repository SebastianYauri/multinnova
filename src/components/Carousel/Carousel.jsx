import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles['carousel-container']}>
      <div className={styles['carousel-overlay']}></div> {/* Capa gris */}
      <div className={styles['carousel-text']}>
        <span>Welcome to Lindor Agency</span>
        <h1>SMART WEB</h1>
        <h1>DESIGN AGENCY</h1>
        <a href="#discover" className={styles['carousel-button']}>
          Discover More
        </a>
      </div>
      <Slider {...settings}>
        <div>
          <img src="/image-1.webp" alt="Slide 1" className={styles['carousel-image']} />
        </div>
        <div>
          <img src="/image-2.jpg" alt="Slide 2" className={styles['carousel-image']} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;