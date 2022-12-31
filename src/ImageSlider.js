import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from './images/t6.jpg'
import './ImageSlider.css'



const images = [
  {
    id: 1,
    src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: img,
    alt: 'Image 2',
  },

]


export default function ImageSlider() {

  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 4000,
   
  };
  return (
    <>
    <div className="tag">
          
    </div>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
          </>
  )
}





