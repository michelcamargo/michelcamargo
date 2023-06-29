import React, { ReactElement } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CarouselConfig } from "@/components/CustomCarousel/types";

interface Props {
  items: Array<ReactElement>,
  config?: any,
  activeIndex?: number,
}

const DEFAULT_CFG: CarouselConfig = {
  spaceBetween: 16,
  slidesPerView: 3,
};

const CustomCarousel = ({items, config = DEFAULT_CFG}: Props) => {
  const {
    spaceBetween, slidesPerView, onSlideChange, onSwiper, onSelect
  } = config;
  
  return (
    <Swiper
      style={{display: 'flex'}}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={onSlideChange}
      onSwiper={onSwiper}
      navigation
      pagination={{ clickable: true, type: 'bullets' }}
      scrollbar={{ draggable: true }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}
          style={{border: '1px solid grey', display: 'flex', justifyContent: 'center'}}
          title={'teste'}
          onSelect={onSelect}
        >
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomCarousel;
