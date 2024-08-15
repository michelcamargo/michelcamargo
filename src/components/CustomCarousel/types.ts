import { ReactEventHandler } from "react";

import { Swiper } from "swiper";

export type CarouselConfig = {
  spaceBetween: number,
  slidesPerView: number,
  // eslint-disable-next-line no-unused-vars
  onSlideChange?: (swiper: Swiper) => void,
  // eslint-disable-next-line no-unused-vars
  onSwiper?: (swiper: Swiper) => void,
  onSelect?: ReactEventHandler<HTMLElement> | undefined,
}
