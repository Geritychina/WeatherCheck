import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(`https://wttr.in/${city}?format=j1`);
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error('Грешка при извличане на времето:', err);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Weather Forecast</h2>
      <input
        type="text"
        placeholder="Insert City name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Check</button>

      {weather && (
       <div className="weather-result">
       <h3>{city}</h3>
       <p>Temperature: {weather.current_condition[0].temp_C}°C</p>
       <p>Description: {weather.current_condition[0].weatherDesc[0].value}</p>
       <p>Humidity: {weather.current_condition[0].humidity}%</p>
    </div>
      )}
    </div>
  );
};

export default Weather;