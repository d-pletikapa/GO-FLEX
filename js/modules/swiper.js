import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
// TODO: Необходимо реализовать слайдер галерею с помощью swiper
// Альтернативный метод
// import Swiper from '../../node_modules/swiper/swiper-bundle.min.mjs';

new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 6000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  keyboard: true,
});
