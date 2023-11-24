import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../img/slide1.jpg'
import slide2 from '../../img/slide2.jpg'
import slide3 from '../../img/slide3.jpg'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";


export const Carrousel = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="w-full h-full">
          <SwiperSlide>
            <img src={slide1} alt="" className="w-full h-32 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" className="w-full h-full object-cover" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
