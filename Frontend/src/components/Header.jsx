import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownSLine } from "@remixicon/react";
import { RiAccountCircleFill } from "@remixicon/react";
import { RiShoppingCartLine } from "@remixicon/react";
import { assets } from "../assets/assets.js";
import Wave from "./Wave.jsx";
import { use } from "react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("English");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang === "English" ? "en" : "ar");

    setDropdownOpen(false);
  };

  useEffect(() => {
    console.log(`Language changed to: ${language}`);
    if (language === "العربية") {
      document.body.dir = "rtl";
      console.log("Document direction set to rtl");
    } else {
      document.body.dir = "ltr";
      console.log("Document direction set to ltr");
    }
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      {isTop && (
        <div>
          <div
            className={`bg-secondary font-body text-center text-xs p-4 ${
              language === "العربية" && "text-sm"
            }`}
          >
            {t("ORDER DESSERTS FOR LOCAL PICK UP")}
          </div>
          <Wave />
        </div>
      )}
      <nav className="flex justify-between items-center px-4 text-gray-800 lg:px-20 relative z-10 font-body text-primary leading-snug">
        <div className="relative">
          <button onClick={toggleDropdown} className={`flex items-center ${language === "العربية" && "flex-row-reverse gap-2"}`}>
            <img
              src={language === "English" ? assets.english : assets.arabic}
              alt={language}
              className="h-5 w-5 mr-2"
            />
            <p className="hidden md:block"> {language} </p>
            <RiArrowDownSLine size={24} />
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 w-32 bg-white text-black rounded shadow-lg">
              <button
                onClick={() => selectLanguage("English")}
                className="flex items-center px-4 py-2 w-full text-left"
              >
                <img
                  src={assets.english}
                  alt="English"
                  className="h-5 w-5 mr-2"
                />
                English
              </button>
              <button
                onClick={() => selectLanguage("العربية")}
                className="flex items-center px-4 py-2 w-full text-left"
              >
                <img
                  src={assets.arabic}
                  alt="Arabic"
                  className="h-5 w-5 mr-2"
                />
                العربية
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-center h-24">
          <img src={assets.logo} alt="Logo" className="object-contain" />
        </div>
        <div className={`flex items-center ${language === "العربية" && "gap-6 "}`}>
          <button className={`mr-4 flex items-center ${language === "العربية" && "gap-2 "}`}>
            <RiAccountCircleFill size={24} className="mr-1" />
            <p
              className={`hidden md:block ${
                language === "العربية" ? "text-xl" : ""
              }`}
            >
              {t("My Account")}
            </p>
          </button>
          <button className={`text-base flex items-center ${language === "العربية" && "gap-2 "} `}>
            <RiShoppingCartLine size={24} />
            <p
              className={`hidden md:block ml-1 ${
                language === "العربية" && "text-xl"
              }`}
            >
              {t("Cart")}
            </p>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
