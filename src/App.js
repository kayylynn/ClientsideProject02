import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import logo2 from './weather2.png';
import Weather from './components/Weather';
import React, { useState } from 'react';

  function App() {
    const [weatherIcon, setWeatherIcon] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [temperature, setTemperature] = useState('');
    const [conditions, setConditions] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind_speed, setWindSpeed] = useState('');

      function fetchWeatherHandler(event){
      const selectedZip = event.target.value;

      fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${selectedZip}&appid=b9db673980eaac7fbd2bb17f5c7aa904&units=imperial`)
      .then(response => response.json())
      .then(data => {
        
        setWeatherIcon(data.weather[0].icon);
        setSelectedCity(data.name);
        setTemperature(data.main.temp);
        setConditions(data.weather[0].description);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="cities">Select a City Below:</label>
        <select className="city-select" onChange={fetchWeatherHandler} name="cities" id="cities">
          <option value="" >Select a City</option>
          <option value="98101">Seattle, WA</option>
          <option value="10001">New York, NY</option>
          <option value="60601">Chicago, IL</option>
          <option value="90001">Los Angeles, CA</option>
          <option value="33101">Miami, FL</option>
          <option value="30301">Atlanta, GA</option>
        </select>

        <br />
        {!selectedCity && <img src={logo2} className="App-logo2" alt="logo2" />}

        {selectedCity && (
        <Weather
            weatherIcon={weatherIcon}
            city={selectedCity}
            temperature={temperature}
            conditions={conditions}
            humidity={humidity}
            wind_speed={wind_speed}
          />
      )}

      </header>
    </div>
    
  );
};

export default App;
