import React from "react";
import heroImage from "../../images/heroimage.png";
import GridWrapper from "../../UI/GridWrapper/GridWrapper";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <GridWrapper className="hero grid--2-cols grid--center-v">
        <div className="hero-imagebox">
          <img
            src={heroImage}
            alt="family with shopping bags jumping in joy"
            className="hero-img"
          />
        </div>
        <div className="hero-textbox">
          <h1 className="heading-primary">
            Kick off the new year with the best of the categories
          </h1>
          <p className="hero-description">
            Electronics, Jewellery, Clothing, and more
          </p>
          <a href="#home" className="btn btn-cta">
            Shop now &rarr;
          </a>
        </div>
      </GridWrapper>
    </section>
  );
}
