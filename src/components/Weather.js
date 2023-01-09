import React, { useState } from "react";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((res) => res.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;

        setResult(
          "Temperature at" + " " + city + "\n" + Math.round(celsius) + "C"
        );
        setCity("");
      });
  };

  // api key

  //https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb

  return (
    <div>
      <center>
        <div className="weather">
          <div className="weather_body">
            <h2 className="weather_title">Weather Temperature App </h2>
            <br />

            <form onSubmit={submitHandler}>
              <input
                type="text"
                name="city"
                value={city}
                onChange={changeHandler}
              />
              <br />
              <br />
              <input type="submit" value="Get Temperature" />
            </form>

            <h1>{result}</h1>
          </div>
        </div>
      </center>
    </div>
  );
};
