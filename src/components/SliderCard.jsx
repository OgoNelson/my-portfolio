import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../database/data";
import ButtonLive from "./ButtonLive";

const SliderCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="mt-14">
      <Slider {...settings}>
        {data.map((data) => (
          <div className="h-[70vh] border-[0.01rem] p-4 border-[#6978D1] rounded-xl">
            <div>{data.img}</div>
            <div>
              <h3>{data.title}</h3>
              <h4>{data.Des}</h4>
            </div>
            <div>
              <ButtonLive action="live preview" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCard;
