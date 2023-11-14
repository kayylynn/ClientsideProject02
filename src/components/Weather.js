import React from 'react';

const Weather = ({ weatherIcon, city, temperature, conditions, humidity, wind_speed }) => {
  const iconBaseUrl = 'http://openweathermap.org/img/wn/';
  const iconUrl = weatherIcon ? `${iconBaseUrl}${weatherIcon}@2x.png` : null;

  return (
    <div>
      <p>{`Selected City: ${city}`}</p>
      {iconUrl && <img src={iconUrl} alt="Weather Icon" />}
      {temperature !== null && (
        <div>
          <span>{`Temperature: ${Math.round(temperature)}°F`}</span><br />
        </div>
      )}
      {conditions !== null && <div><span>{`Conditions: ${conditions}`}</span><br /></div>}
      {humidity !== null && <div><span>{`Humidity: ${humidity}`}</span><br /></div>}
      {wind_speed !== null && <div><span>{`Wind Speed: ${wind_speed}`}</span><br /></div>}
    </div>
  );
}

export default Weather;