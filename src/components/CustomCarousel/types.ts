import { Swiper } from "swiper";

type CarouselConfig = {
  spaceBetween: number,
  slidesPerView: number,
  onSlideChange?: (event: Event) => any,
  onSwiper?: (swiper: Swiper) => any,
  onSelect?: (event: Event) => any,
}

export {
  CarouselConfig,
};
