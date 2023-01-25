import cod from "../../images/cod.png";
import freeShipping from "../../images/freeshipping.png";
import fastDelivery from "../../images/fastdelivery.png";
import availableLocations from "../../images/location.png";

import "./FeaturesSection.css";
import React from "react";
import GridWrapper from "../../UI/GridWrapper/GridWrapper";
import FeatureCard from "../FeatureCard/FeatureCard";

export default function FeaturesSection() {
  const featuresList = [
    {
      title: "Free Shipping",
      icon: freeShipping,
    },
    {
      title: "Cash On Delivery available",
      icon: cod,
    },
    {
      title: "Fast Delivery",
      icon: fastDelivery,
    },
    {
      title: "Available all over India",
      icon: availableLocations,
    },
  ];
  return (
    <div className="features-section">
      <GridWrapper className="grid--4-cols grid--center-v features-wrapper">
        {featuresList.map((feature, index) => {
          return (
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              key={index}
            />
          );
        })}
      </GridWrapper>
    </div>
  );
}
