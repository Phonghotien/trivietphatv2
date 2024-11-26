function functionSlider(element, customizeOption, typePagi) {
  const swiperSlider = document.querySelectorAll(element);
  if (swiperSlider) {
    swiperSlider.forEach((item) => {
      const swiper = item.querySelector(".swiper");
      const pagi = item.querySelector(".swiper-pagination");
      const next = item.querySelector(".swiper-next");
      const prev = item.querySelector(".swiper-prev");
      if (!typePagi) {
        typePagi = "bullets";
      }
      var nameSlide = new Swiper(swiper, {
        watchSlidesProgress: true,
        pagination: {
          el: pagi,
          type: typePagi,
          clickable: true,
        },
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        fadeEffect: {
          crossFade: true,
        },
        ...customizeOption,
      });
    });
  }
}
const splides = document.querySelectorAll(".homes-brand-splide  .splide");
if (splides) {
  splides.forEach((splidex, index) => {
    new Splide(splidex, {
      type: "loop",
      drag: "free",
      focus: "center",
      perMove: 1,
      perPage: 8,
      gap: 24,
      autoScroll: {
        speed: 1,
      },
      breakpoints: {
        420: {
          perPage: 3,
        },
        501: {
          perPage: 4,
        },
        769: {
          perPage: 6,
        },
      },
    }).mount(window.splide.Extensions);
  });
}

functionSlider(".core-slide", {
  speed: 1200,
  // slidesPerGroup: 2,
  slidesPerView: "auto",
  initialSlide: 0,
  centeredSlides: false,
  //  loop: true,
  spaceBetween: 0,
  effect: "slide",
});
functionSlider(".slideSw", {
  speed: 1200,
  slidesPerView: "auto",
  initialSlide: 0,
  centeredSlides: false,
  spaceBetween: 0,
  effect: "slide",
});
functionSlider(".deliver-net-slide", {
  speed: 1200,
  // slidesPerGroup: 2,
  slidesPerView: "auto",
  initialSlide: 0,
  centeredSlides: false,
  loop: false,
  spaceBetween: 0,
  effect: "slide",
});
