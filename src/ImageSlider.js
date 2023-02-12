import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img from "./images/t6.jpg";
import img1 from "./images/Scrolling Images/1.png";
import img2 from "./images/Scrolling Images/2.png";
import img3 from "./images/Scrolling Images/3.png";
import img4 from "./images/Scrolling Images/4.png";
import img5 from "./images/Scrolling Images/5.png";
import img6 from "./images/Scrolling Images/6.png";
import "./ImageSlider.css";

const images = [
  {
    id: 1,
    src: img1,
    alt: "Image 1",
  },
  {
    id: 2,
    src: img2,
    alt: "Image 2",
  },
  {
    id: 3,
    src: img3,
    alt: "Image 3",
  },
  // {
  //   id: 4,
  //   src: img4,
  //   alt: "Image 4",
  // },
  // {
  //   id: 5,
  //   src: img5,
  //   alt: "Image 4",
  // },
  // {
  //   id: 6,
  //   src: img6,
  //   alt: "Image 4",
  // },
];

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
      <div className="tag"></div>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
