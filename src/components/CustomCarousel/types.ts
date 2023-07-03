import { Swiper } from "swiper";

export type CarouselConfig = {
  spaceBetween: number,
  slidesPerView: number,
  onSlideChange?: (swiper: Swiper) => void,
  onSwiper?: (swiper: Swiper) => void,
  onSelect?: (swiper: Swiper) => void,
}
