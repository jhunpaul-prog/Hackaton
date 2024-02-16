import React from 'react';
import Slider from 'react-slick';
import './css/Slideshow.css'; // Importing the CSS file for Slideshow
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = ({ documents }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {documents.map((document, index) => (
          <div key={index}>
            <img src={document} alt={`Document ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
