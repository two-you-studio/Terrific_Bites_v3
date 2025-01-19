import React from "react";
import { useTranslation } from "react-i18next";

const Section = ({ heading, body }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  console.log(lang);
  return (
    <>
      <div
        className={`flex items-center justify-between h-full w-full px-4 mt-10 sm:px-8 lg:px-36`}
      >
        <div className="flex flex-col items-start justify-center w-3/4">
          <h1 className={`font-heading text-5xl text-primary mb-4  ${lang === "ar" && "lg:text-6xl"}`}>
            {heading}
          </h1>
          <p
            className={`font-body text-gray text-sm  ${
              lang === "ar" && "text-lg md:text-2xl md:font-extralight lg:text-3xl"
            }`}
          >
            {body}
          </p>
        </div>
        <button
          className={`bg-primary text-white py-2 px-3 rounded-lg font-body lg:py-3 lg:px-6 lg:text-lg hover:bg-primary-light `}
        >
          {t("View More")}
        </button>
      </div>
    </>
  );
};

export default Section;
