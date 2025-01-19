import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";
import { dir } from "i18next";

const ImageSection = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <div
        className={`flex flex-col-reverse items-center justify-center bg-secondary gap-4 sm:flex-row lg:h-[75vh]`}
      >
        <div className={`flex flex-col items-center justify-center text-center py-4 px-4 gap-3 sm:w-1/2 sm:px-4 md:px-12 md:gap-6 lg:px-20 ${lang === "ar" && ""}`}>
          <h1 className="font-heading text-4xl text-primary md:text-5xl lg:text-6xl">
            {t(" Event Catering & Customized Gifting")}
          </h1>
          <p
            className={`font-body text-sm text-gray lg:text-base ${
              lang === "ar" && "text-lg md:text-xl lg:text-2xl"
            }`}
          >
            {t(
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos temporibus dolores at ex deserunt quas eaque cumque ipsam quisquam atque nulla ab."
            )}
          </p>
          <button className={`bg-primary text-white mt-2 py-2 px-3 rounded-lg font-body hover:bg-primary-light md:mt-8 ${lang === "ar" && "text-xl md:text-2xl"}`}>
            {t("Let's Shop Now")}
          </button>
        </div>
        <div className="sm:w-1/2 lg:h-full">
          <img src={assets.cookie} className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default ImageSection;
