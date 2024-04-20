import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Find a forecast</h1>
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a href="www.linkedin.com/in/hannah-lander-b02311b0">Hannah Lander</a>{" "}
          and is open-sourced on{" "}
          <a href="https://github.com/HanLander/react-weather-app">GitHub</a>
        </footer>
      </div>
    </div>
  );
}
