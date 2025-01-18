import React from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import SquareCards from './components/SquareCards'
import { useTranslation } from "react-i18next";
import CircleCards from './components/CircleCards';
import CardsCarousel from './components/CardsCarousel';
import ImageSection from './components/ImageSection';
import BottomSection from './components/BottomSection'
import Footer from './components/Footer';

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <Header />
    <Carousel />
    <SquareCards heading={t("Our Products")} body={t("Lorem ipsum dolor sit amet consectetur adipisicing elit.")}/>
    <CircleCards heading={t("Gift For Every Moment")} body={t("Lorem ipsum dolor sit amet consectetur adipisicing elit.")}/>
    <CardsCarousel heading={t("Divine Treats & Indulgent Desserts")} body={t("Lorem ipsum dolor sit amet consectetur adipisicing elit.")}/>
    <SquareCards heading={t("What's new")} body={t("Lorem ipsum dolor sit amet consectetur adipisicing elit.")}/>
    <ImageSection />
    <BottomSection />
    <Footer />
    </>
  )
}

export default App