import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";
import { dir } from "i18next";

const ImageSection = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div
        className={`flex flex-col-reverse items-center justify-center bg-white gap-4 sm:flex-row-reverse sm:my-4 md:my-6 md:mb-8  lg:h-[75vh]`}
      >
        <div className="flex flex-col items-center justify-center text-center py-4 gap-3 sm:w-1/2 sm:px-4 md:px-12 md:gap-6 lg:px-20">
          <h1 className="font-heading text-4xl text-primary md:text-5xl lg:text-6xl">
            {t("Cupcake Perfection: Love-Baked by Terrific Bites")}
          </h1>
          <p className="font-body text-sm text-gray lg:text-base">
            {t(
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos temporibus dolores at ex deserunt quas eaque cumque ipsam quisquam atque nulla ab."
            )}
          </p>
          <button className="bg-primary text-white mt-2 py-2 px-3 rounded-lg font-body hover:bg-primary-light md:mt-8">
            {t("Let's Shop Now")}
          </button>
        </div>
        <div className="sm:w-1/2 lg:h-full">
          <img
            src={assets.curvedDesign}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ImageSection;
