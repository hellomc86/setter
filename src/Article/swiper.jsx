
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';
import { FreeMode, Pagination } from 'swiper/modules';
import GridItem from '../components/Gallery/gridItem';

function SwipeArticles({ articles }) {
  
  return (
    <div className="swipeClass">
      <Swiper
         slidesPerView={3}
         centeredSlides={false}
         spaceBetween={30}
         grabCursor={true}
         freeMode={true}
         modules={[FreeMode]}
         className="mySwiper"
      >
         
        {articles.map((article) => (
          <SwiperSlide key={article._id}> 
            <GridItem key={article._id} item={article} />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwipeArticles;