import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
    const weather = useWeather();
    console.log(weather);

  return (
    <input
      className="input-field"
      placeholder="Search here"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    ></input>
  );
};

export default Input;
