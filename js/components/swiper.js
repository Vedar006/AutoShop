import Swiper, {
  Pagination
} from 'swiper';
export function sliderSw() {
  const slider = document.querySelector('.swiper');
  Swiper.use([Pagination]);

  const swiper = new Swiper(slider, {


    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    // slidesPerView: 4,
    // slidesPerGroup: 4,
    breakpoints: {
      310: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: false,
        spaceBetween: 50
      },
      570: {


      },
      1240: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    },

  });
}

