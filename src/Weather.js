import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-search"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>London</h1>
      <ul>
        <li>Tuesday 19:00 </li>
        <li> Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
          />
          11°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 47%</li>
            <li>Humidity: 57%</li>
            <li>Wind: 9 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
