"use client";

import { useState } from 'react';

const WeatherPage = () => {
  const [zipcode, setZipcode] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipcode(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=6092087df5b6497faa0174746230407&q=${zipcode}&aqi=no`
      );
      const data = await response.json();
      setWeatherData(data);
      console.log(data)
      setError('');
    } catch (error) {
      console.error('Error fetching data:', error);
      setWeatherData(null);
      setError('Error fetching weather data');
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Zipcode:
          <input type="text" value={zipcode} onChange={handleInputChange} />
        </label>
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default WeatherPage;