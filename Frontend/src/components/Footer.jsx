import React from "react";
import logo from "../assets/Logo.jpg";
import { RiFacebookCircleLine } from "@remixicon/react";
import { RiInstagramLine } from "@remixicon/react";
import { RiTwitterLine } from "@remixicon/react";
import { RiYoutubeLine } from "@remixicon/react";
import { assets } from "../assets/assets";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const index = [1, 2, 3];
  const pindex = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="bg-primary flex flex-col justify-center items-center px-4 py-8 text-white mt-20 gap-4 lg:flex-row lg:px-20">
        <div className="h-full w-full flex flex-col justify-center items-center lg:items-start lg:w-1/3">
          <img src={logo} alt="" className="h-[15vh] mb-10 cursor-pointer" />
          <p className="text-white text-center lg:text-left font-body">
            {t(
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente assumenda beatae quam quidem excepturi minus maiores ullam tempora optio veritatis, eum omnis saepe, eveniet modi praesentium neque? Nam, nobis accusamus?"
            )}
          </p>
          <div className="flex items-center gap-4 mt-10">
            <button>
              <RiFacebookCircleLine
                size={32}
                className="hover:text-primary-light"
              />
            </button>
            <button>
              <RiInstagramLine size={32} className="hover:text-primary-light" />
            </button>
            <button>
              <RiTwitterLine size={32} className="hover:text-primary-light" />
            </button>
            <button>
              <RiYoutubeLine size={32} className="hover:text-primary-light" />
            </button>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col justify-center items-center px-4 md:flex-row md:w-full lg:flex-row lg:w-2/3">
          {index.map((dx) => (
            <div key={dx} className="w-full h-full flex flex-col gap-2 m-4">
              <h1 className="text-4xl text-center mb-2 font-heading ">
                {t("Column")} {dx}
              </h1>
              {pindex.map((pdx) => (
                <p
                  key={pdx}
                  className="cursor-pointer text-lg font-body text-center hover:text-primary-light"
                >
                  {t("Option")} {pdx}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <hr className="text-primary-light font-thin" />

      <div className="bg-primary px-4 py-6 text-white flex flex-col justify-between items-center gap-4 lg:flex-row lg:py-4 lg:px-20">
        <h1>{t("Copyright © 2025 Terrific Bites. All rights Reserved")}</h1>
        <div className="flex gap-4">
          <button className="bg-white px-2 rounded-lg hover:bg-success">
            <img src={assets.visa} />
          </button>
          <button className="bg-white px-2 rounded-lg hover:bg-success">
            <img src={assets.paypal} />
          </button>
          <button className="bg-white px-2 rounded-lg hover:bg-success">
            <img src={assets.apple} />
          </button>
          <button className="bg-white px-2 rounded-lg hover:bg-success">
            <img src={assets.money} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
