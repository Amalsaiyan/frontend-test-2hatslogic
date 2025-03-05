document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  let testimonialHeight = document
    .querySelector("main")
    .getBoundingClientRect().height;

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
      },
    },
    loop: true,
    allowTouchMove: false,
    disableOnInteraction: true,
  });

  const loader = document.querySelector(".loader");
  const loaderTitle = document.querySelector(".loader-ttl");
  const main = document.querySelector("main");
  const fade = document.querySelectorAll(".fade-up");
  const testimonialFade = document.querySelector(".testimonial-fade");
  let bannerCtx;

  const BannerAnimation = () => {
    bannerCtx && bannerCtx.revert();

    bannerCtx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(loaderTitle, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        filter: "blur(0px)",
      });

      tl.to(
        loader,
        {
          duration: 1.2,
          opacity: 0,
          delay: 0.6,
          //   ease: "expo.in",
          onComplete: () => {
            document.body.classList.add("loaded");
          },
        },
        ">"
      );
      tl.to(
        loaderTitle,
        {
          opacity: 0,
          y: -25,
          duration: .8,
        },
        "<-=.2"
      );
      tl.to(
        fade,
        {
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          y: 0,
        },
        "<+=.3"
      );
      tl.to(
        testimonialFade,
        {
          opacity: 1,
          duration: 0.8,
        },
        "<"
      );
    });
  };

  if (window.innerWidth >= 1200) {
    BannerAnimation();
  }

  window.addEventListener("resize", () => {
    BannerAnimation();
  });
});
