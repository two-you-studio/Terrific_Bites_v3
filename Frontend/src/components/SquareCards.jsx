import React from "react";
import Section from "./Section";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const SquareCards = (props) => {
  const { t, i18n } = useTranslation();
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
      <Section heading={props.heading} body={props.body} />
      <div className="grid gap-4 mt-10 mb-20 grid-cols-2 px-8 sm:px-12 md:grid-cols-4 lg:px-36 lg:gap-14" >
        {cards.map((card, index) => (
          <div key={index} className="w-full h-full flex flex-col">
            <img src={card.img} alt={card.title} className="rounded-xl object-cover mb-2"/>
            <h1 className="text-primary font-body font-medium leading-loose mb-4 lg:text-xl">{t(card.title)}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default SquareCards;
