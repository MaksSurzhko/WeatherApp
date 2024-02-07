// import React, { useState, useEffect } from 'react';
// import { getWeather } from '../api/api';
// import SearchBar from '../searchBar/searchbar';

// const WeatherCard = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [selectedCity, setSelectedCity] = useState('');

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         if (selectedCity) {
//           const data = await getWeather(selectedCity);
//           setWeatherData(data);
//         }
//       } catch (error) {
//         // Handle error
//       }
//     };

//     fetchWeatherData();
//   }, [selectedCity]);

//   const kelvinToCelsius = (kelvin) => {
//     return kelvin - 273.15;
//   };

//   const handleSearch = async (city) => {
//     setSelectedCity(city);
//   };

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} />
//       {weatherData && (
//         <div>
//           <h2>{weatherData.name}</h2>
//           <p>{kelvinToCelsius(weatherData.main.temp).toFixed(0)} °C</p>
//           <p>{weatherData.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherCard;

import React, { useState, useEffect } from 'react';
import { getWeather } from '../api/api';
import SearchBar from '../searchBar/searchbar';

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (selectedCity) {
          const data = await getWeather(selectedCity);
          setWeatherData(data);
          setError(null);
        }
      } catch (error) {
        setWeatherData(null);
        setError('Wrong city name.'); 
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const handleSearch = async (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{kelvinToCelsius(weatherData.main.temp).toFixed(0)} °C</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;

