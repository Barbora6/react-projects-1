import { useState } from "react";
import { Search } from "./Search";

export const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const[loading, setLoading] = useState(false);
  const[weatherData, setWeatherData] = useState(null)

  const handleSearch = async () => {
const responce = 


  };
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
