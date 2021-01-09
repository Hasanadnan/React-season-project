import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  winter: {
    text: " Uff, khub thanda ..Mojai moja 😍",
    iconName: "snowflake",
  },
  summer: {
    text: "gorom manei jhamla 😪 ",
    iconName: "sun",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 25 ? "Summer" : "winter";
  } else {
    return lat < 25 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left huge ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right huge ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
