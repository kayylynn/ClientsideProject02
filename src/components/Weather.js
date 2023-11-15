import React from 'react';

const Weather = ({ weatherIcon, city, temperature, conditions, humidity, wind_speed }) => {
  const iconBaseUrl = 'http://openweathermap.org/img/wn/';
  const iconUrl = weatherIcon ? `${iconBaseUrl}${weatherIcon}@2x.png` : null;

  return (
    <div>
      <p>{`Selected City: ${city}`}</p>
      <img src={iconUrl} alt="Weather Icon" />
      <div><span>{`Temperature: ${Math.round(temperature)}°F`}</span><br /></div>
      <div><span>{`Conditions: ${conditions}`}</span><br /></div>
      <div><span>{`Humidity: ${humidity}`}</span><br /></div>
      <div><span>{`Wind Speed: ${wind_speed}`}</span><br /></div>
    </div>
  );
};

export default Weather;