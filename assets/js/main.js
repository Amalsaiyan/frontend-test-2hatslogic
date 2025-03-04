document.addEventListener("DOMContentLoaded", () => {
  let testimonialHeight = document
    .querySelector("main")
    .getBoundingClientRect().height;
  console.log(testimonialHeight);

  if (testimonialHeight) {
    document.documentElement.style.setProperty(
      "--testimonial-height",
      `${testimonialHeight}px`
    );
  }

  var swiper = new Swiper(".testimonialSwiper1", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 33,
    speed: 15000,
    autoplay: {
      delay: 0,
    },
    loop: true,
    allowTouchMove: false,
    disableOnInteraction: true,
  });

  var swiper = new Swiper(".testimonialSwiper2", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 33,
    speed: 15000,
    autoplay: {
      delay: 0,
      reverseDirection: true,
    },
    loop: true,
    allowTouchMove: false,
    disableOnInteraction: true,
  });

  var swiper = new Swiper(".testimonialSwiperMob", {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 10000,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
        768: {
          slidesPerView: 5,
        }
      },
    loop: true,
    allowTouchMove: false,
    disableOnInteraction: true,
  });
});
