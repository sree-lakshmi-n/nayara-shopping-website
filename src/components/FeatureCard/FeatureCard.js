import "./FeatureCard.css";

import React from "react";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";

export default function FeatureCard(props) {
  return (
    <FlexWrapper
      className="feature flex-dirn-col flex-center-align"
      element="div"
    >
      <div className="feature-icon">
        <img src={props.icon} alt="feature icon" className="feature-icon-img" />
      </div>
      <p className="feature-title">{props.title}</p>
    </FlexWrapper>
  );
}
