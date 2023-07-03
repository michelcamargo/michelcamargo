import { Swiper } from "swiper";

export type CarouselConfig = {
  spaceBetween: number,
  slidesPerView: number,
  onSlideChange?: (event: Event) => never,
  onSwiper?: (swiper: Swiper) => never,
  onSelect?: (event: Event) => never,
}
