import { useEffect, useState } from "react";
import { Search } from "./Search";
import "./WeatherApp.css";

export const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (param) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=927d9593b1e91050f32ce5347dd25b3b`
      );
      const data = await response.json();
      console.log(data, "data");

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const handleSearch = () => {
    fetchWeatherData(search);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("cz-Cz", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };

  const kelvinToCelsius = (k) => (k - 273.15).toFixed(1);

  useEffect(() => {
    fetchWeatherData("prague");
  }, []);

  console.log(weatherData);

  return (
    <div className="weather-container">
      <h1>Předpověď počasí</h1>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Data se načítají...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name} <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <p>Teplota:</p>
          <div className="temp">
            {weatherData?.main?.temp
              ? `${kelvinToCelsius(weatherData.main.temp)} °C`
              : ""}
          </div>
          <p>Předpověď:</p>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">
                  Rychlost větru: {weatherData?.wind?.speed}
                </p>
              </div>
              <div>
                <p className="humidity">
                  Vlhost: {weatherData?.main?.humidity}%
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// volitelné řetězení (optional chaining)
// operátor ?. umožňuje bezpečný přístup k vlastnostem objektu, který nemusí existovat.
// weatherData?.name znamená, pokud weatherData existuje, vrať jeho vlastnost name a zároveň weatherData.sys
// jinak vrať undefined
