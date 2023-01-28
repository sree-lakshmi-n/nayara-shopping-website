import "./Home.css";
import React from "react";

import HeroSection from "../../components/HeroSection/HeroSection";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";

export default function Home(props) {
  return (
    <div>
      <HeroSection />
      <CategoriesSection categories={props.categories} />
      <FeaturesSection />
    </div>
  );
}
