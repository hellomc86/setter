import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

import GridItem from '../components/Gallery/gridItem';

function SwipeArticles({ images }) {
  return (
    <div className="swipeClass">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          enabled : false,
          clickable: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide> <GridItem key={index} image={image} index={index} /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwipeArticles;