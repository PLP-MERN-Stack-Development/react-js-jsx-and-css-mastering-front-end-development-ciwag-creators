import { useState } from "react";
import { getWeather } from "../api/weather.js";
import Button from "../components/Button.jsx";
import "../App.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleFetchWeather = async () => {
    setError("");
    setWeather(null);
    if (!city) return setError("Please enter a city");

    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="card mt-8">
      <h2>Weather Checker</h2>
      <div className="weather-form">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input"
        />
        <Button variant="primary" size="md" onClick={handleFetchWeather}>
          Get Weather
        </Button>
      </div>

      {error && <p className="error-text">{error}</p>}

      {weather && (
        <div className="weather-result">
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}
