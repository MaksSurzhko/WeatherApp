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

// import React, { useState, useEffect } from 'react';
// import { getWeather } from '../api/api';
// import SearchBar from '../searchBar/searchbar';

// const WeatherCard = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [selectedCity, setSelectedCity] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         if (selectedCity) {
//           const data = await getWeather(selectedCity);
//           setWeatherData(data);
//           setError(null);
//         }
//       } catch (error) {
//         setWeatherData(null);
//         setError('Wrong city name.');
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
//       {error && <p style={{ color: 'red' }}>{error}</p>}
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
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedCitiesFromLocalStorage = JSON.parse(localStorage.getItem('savedCities')) || [];
    fetchWeatherForSavedCities(savedCitiesFromLocalStorage);
  }, []);

  const fetchWeatherData = async (city) => {
    try {
      const data = await getWeather(city);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const fetchWeatherForSavedCities = async (cities) => {
    try {
      const weatherDataArray = await Promise.all(cities.map(fetchWeatherData));
      setWeatherDataList(weatherDataArray);
    } catch (error) {
      setError('Error fetching weather data.');
    }
  };

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const handleSearch = async (city) => {
    try {
      const data = await getWeather(city);
      setWeatherDataList([...weatherDataList, data]);
      setError(null);

      const updatedCities = [...new Set([...JSON.parse(localStorage.getItem('savedCities')) || [], city])];
      localStorage.setItem('savedCities', JSON.stringify(updatedCities));
    } catch (error) {
      setError('Wrong city name.');
    }
  };

  const handleRemoveCity = (index) => {
    const updatedWeatherDataList = [...weatherDataList];
    updatedWeatherDataList.splice(index, 1);
    setWeatherDataList(updatedWeatherDataList);

    const updatedCities = updatedWeatherDataList.map((weatherData) => weatherData.name);
    localStorage.setItem('savedCities', JSON.stringify(updatedCities));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherDataList.map((weatherData, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>{weatherData.name}</h2>
          <p>{kelvinToCelsius(weatherData.main.temp).toFixed(0)} °C</p>
          <p>{weatherData.weather[0].description}</p>
          <button onClick={() => handleRemoveCity(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;

