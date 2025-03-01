import React from "react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";
import ScrollableSection from "./ScrollableSection";

const SquareCards = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const cards = [
    {
      img: assets.cupcake1,
      title: "Swiss Frosting",
    },
    {
      img: assets.cupcake2,
      title: "Mouse Cream",
    },
    {
      img: assets.cupcake3,
      title: "Butter Frosting",
    },
    {
      img: assets.cupcake4,
      title: "Light Sponge",
    },
  ];
  return (
    <>
      <ScrollableSection heading={props.heading} body={props.body} />
      <div className="grid gap-4 mt-10 mb-14 grid-cols-2 px-8 sm:px-12 md:grid-cols-4 lg:px-36 lg:gap-14">
        {cards.map((card, index) => (
          <div key={index} className="w-full h-full flex flex-col">
            <img
              src={card.img}
              alt={card.title}
              className="rounded-xl object-cover mb-2"
            />
            <h1
              className={`text-primary font-body font-medium leading-loose lg:text-xl  ${
                lang === "ar" && "text-xl sm:text-2xl lg:text-4xl"
              }`}
            >
              {t(card.title)}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default SquareCards;
