import { useState } from "react";
import { Search } from "./Search";

export const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (param) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q={param}&appid=927d9593b1e91050f32ce5347dd25b3b`
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

  console.log(loading);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      Počasí
    </div>
  );
};
