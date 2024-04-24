import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./DailyWeatherForecast.css";

export default function DailyWeatherForecast(props) {
  return (
    <div className="DailyWeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Day"> Thu </div>
          <div className="Icon">
            {" "}
            <WeatherIcon code="01d" size={36} />
          </div>
          <div className="Temperatures">
            <span className="Temperature-max"> 19°</span>
            <span className="Temperature-min"> 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
