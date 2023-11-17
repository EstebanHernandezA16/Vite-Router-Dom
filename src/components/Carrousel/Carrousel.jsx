import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";


export const Carrousel = () => {
  return (
    <div className="container mx-auto bg-green-400 h-96">
      <text>Carrousel</text>
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};
