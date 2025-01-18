import React, { useRef, useState } from "react";
import { RiArrowRightSLine } from "@remixicon/react";
import { RiArrowLeftSLine } from "@remixicon/react";
import { assets } from "../assets/assets";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Carousel = () => {
  const { t, i18n } = useTranslation();
  const slides = [
    { img: assets.slide1, background: "dark" },
    { img: assets.slide2, background: "light" },
  ];

  const flippedSlides = [
    { img: assets.flipSlide1, background: "dark" },
    { img: assets.flipSlide2, background: "light" },
  ];
  // const flippedSlideDirection = () => {
  //   if (i18n.language === "ar") {
  //     document.getElementById("flippedSlideDirection").dir = "ltr";
  //   }
  // };

  return (
    <>
      <div style={{ direction: i18n.language === "ar" && "ltr" }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[30vh] w-full mt-36 sm:h-[40vh] md:h-[60vh] lg:h-[80vh] lg:mt-38 "
        >
          {i18n.language === "en"
            ? slides.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className={`relative ${
                    slide.background === "dark" ? "text-white" : "text-primary"
                  } `}
                >
                  <div className="flex justify-between items-center h-full w-full absolute z-10">
                    <div className="custom-prev cursor-pointer">
                      <RiArrowLeftSLine size={36} />
                    </div>
                    <div className="absolute flex flex-col top-1/4 left-16 gap-2 ">
                      <h1 className="text-2xl font-heading leading-5 w-1/3 sm:text-4xl sm:w-1/2 md:text-6xl md:w-2/3 lg:text-8xl">
                        {t("Not just açaí, it's terrific bites")}
                      </h1>
                      <p className="text-sm font-body font-light leading-4 w-1/2 sm:w-3/4 md:my-4 lg:text-xl">
                        {t(
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        )}
                      </p>
                      <button className="bg-primary px-2 py-2 rounded-3xl text-xs font-body leading-tight text-white w-1/3 mt-2 sm:text-sm md:text-base hover:bg-primary-light lg:text-xl">
                        {t("Choose Now")}
                      </button>
                    </div>
                    <div className="custom-next cursor-pointer">
                      <RiArrowRightSLine size={36} />
                    </div>
                  </div>

                  <img
                    src={slide.img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </SwiperSlide>
              ))
            : flippedSlides.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  id="flippedSlideDirection"
                  className={`relative ${
                    slide.background === "dark" ? "text-white" : "text-primary"
                  } `}
                >
                  <div className="flex justify-between items-center h-full w-full absolute z-10">
                    <div className="custom-prev cursor-pointer">
                      <RiArrowLeftSLine size={36} />
                    </div>
                    <div className="absolute flex flex-col items-end top-1/4 right-14 text-right gap-2 ">
                      <h1 className="text-2xl font-heading leading-5 w-3/4 sm:text-4xl sm:w-3/4 md:text-6xl md:w-2/3 lg:text-8xl">
                        {t("Not just açaí, it's terrific bites")}
                      </h1>
                      <p className="text-sm font-body font-light leading-4 w-3/4 sm:w-3/4 sm:text-lg md:my-4 md:text-3xl md:w-2/3 lg:text-4xl">
                        {t(
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        )}
                      </p>
                      <button className="bg-primary px-2 py-2 rounded-3xl text-xs font-body leading-tight text-white w-1/3 mt-2 sm:text-sm md:text-base hover:bg-primary-light lg:text-3xl">
                        {t("Choose Now")}
                      </button>
                    </div>
                    <div className="custom-next cursor-pointer">
                      <RiArrowRightSLine size={36} />
                    </div>
                  </div>

                  <img
                    src={slide.img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
