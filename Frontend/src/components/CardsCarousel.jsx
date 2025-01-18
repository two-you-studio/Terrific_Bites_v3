import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";

const CardsCarousel = (props) => {
  const { t, i18n } = useTranslation();
  const slides = [
    {
      img: assets.cupcake9,
      title: "Sprinkle Cupcakes",
      price: "SAR 4.5",
    },
    {
      img: assets.cupcake10,
      title: "Sprinkle Cupcakes",
      price: "SAR 4.5",
    },
    {
      img: assets.cupcake11,
      title: "Sprinkle Cupcakes",
      price: "SAR 4.5",
    },
    {
      img: assets.cupcake12,
      title: "Sprinkle Cupcakes",
      price: "SAR 4.5",
    },
    {
      img: assets.cupcake1,
      title: "Sprinkle Cupcakes",
      price: "SAR 4.5",
    },
    {
      img: assets.cupcake2,
      title: "Sprinkle Cupcakes",
      price: "SAR 4.5",
    },
    {
      img: assets.cupcake3,
      title: "Sprinkle Cupcakes",
      price: "SAR 4.5",
    },
    {
      img: assets.cupcake4,
      title: "Sprinkle Cupcakes",
      price: "SAR 4.5",
    },
  ];
  return (
    <>
      <div className="bg-secondary pt-8 pb-4" style={{ direction: i18n.language === "ar" && "ltr" }}>
        <div className="flex flex-col items-start justify-center px-8 sm:px-12 md:text-center md:items-center bg-secondary">
          <h1 className="font-heading text-4xl text-primary mb-4 md:text-5xl">
            {props.heading}
          </h1>
          <p className="font-body text-gray text-sm">{props.body}</p>
        </div>
        <div className="px-8 sm:px-12 lg:px-36 bg-secondary">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.50": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@0.70": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper h-auto mt-8 mb-8"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="w-full h-auto flex flex-col">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="rounded-xl object-cover mb-2 aspect-square"
                  />
                  <h1 className="text-primary font-body font-medium leading-loose lg:text-xl">
                    {t(slide.title)}
                  </h1>
                  <p className="text-gray text-xs mb-4 font-body lg:text-sm">
                    {t(slide.price)}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CardsCarousel;
