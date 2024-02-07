// import React, { useState, useEffect } from 'react';
// import { getWeather } from '../api/api';
// import SearchBar from '../searchBar/searchbar';

// const WeatherCard = () => {
//   const [weatherDataList, setWeatherDataList] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const savedCitiesFromLocalStorage = JSON.parse(localStorage.getItem('savedCities')) || [];
//     fetchWeatherForSavedCities(savedCitiesFromLocalStorage);
//   }, []);

//   const fetchWeatherData = async (city) => {
//     try {
//       const data = await getWeather(city);
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const fetchWeatherForSavedCities = async (cities) => {
//     try {
//       const weatherDataArray = await Promise.all(cities.map(fetchWeatherData));
//       setWeatherDataList(weatherDataArray);
//     } catch (error) {
//       setError('Error fetching weather data.');
//     }
//   };

//   const kelvinToCelsius = (kelvin) => {
//     return kelvin - 273.15;
//   };

//   const handleSearch = async (city) => {
//     try {
//       const data = await getWeather(city);
//       setWeatherDataList([...weatherDataList, data]);
//       setError(null);

//       const updatedCities = [...new Set([...JSON.parse(localStorage.getItem('savedCities')) || [], city])];
//       localStorage.setItem('savedCities', JSON.stringify(updatedCities));
//     } catch (error) {
//       setError('Wrong city name.');
//     }
//   };

//   const handleRemoveCity = (index) => {
//     const updatedWeatherDataList = [...weatherDataList];
//     updatedWeatherDataList.splice(index, 1);
//     setWeatherDataList(updatedWeatherDataList);

//     const updatedCities = updatedWeatherDataList.map((weatherData) => weatherData.name);
//     localStorage.setItem('savedCities', JSON.stringify(updatedCities));
//   };

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} />
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {weatherDataList.map((weatherData, index) => (
//         <div key={index} style={{ marginBottom: '20px' }}>
//           <h2>{weatherData.name}</h2>
//           <p>{kelvinToCelsius(weatherData.main.temp).toFixed(0)} °C</p>
//           <p>{weatherData.weather[0].description}</p>
//           <button onClick={() => handleRemoveCity(index)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default WeatherCard;

// import React, { useState, useEffect } from 'react';
// import { getWeather } from '../api/api';
// import SearchBar from '../searchBar/searchbar';
// import GoogleMaps from '../map/map';

// const WeatherCard = () => {
//   const [weatherDataList, setWeatherDataList] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const savedCitiesFromLocalStorage = JSON.parse(localStorage.getItem('savedCities')) || [];
//     fetchWeatherForSavedCities(savedCitiesFromLocalStorage);
//   }, []);

//   const fetchWeatherData = async (city) => {
//     try {
//       const data = await getWeather(city);
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const fetchWeatherForSavedCities = async (cities) => {
//     try {
//       const weatherDataArray = await Promise.all(cities.map(fetchWeatherData));
//       setWeatherDataList(weatherDataArray);
//     } catch (error) {
//       setError('Error fetching weather data.');
//     }
//   };

//   const kelvinToCelsius = (kelvin) => {
//     return kelvin - 273.15;
//   };

//   const handleSearch = async (city) => {
//   try {
//     const data = await getWeather(city);
//     setWeatherDataList((prevWeatherDataList) => [...prevWeatherDataList, data]);
//     setError(null);

//     const updatedCities = [...new Set([...JSON.parse(localStorage.getItem('savedCities')) || [], city])];
//     localStorage.setItem('savedCities', JSON.stringify(updatedCities));
//   } catch (error) {
//     setError('Wrong city name.');
//   }
// };

// const handleRemoveCity = (index) => {
//   const updatedWeatherDataList = [...weatherDataList];
//   updatedWeatherDataList.splice(index, 1);
//   setWeatherDataList(updatedWeatherDataList);

//   const updatedCities = updatedWeatherDataList.map((weatherData) => weatherData.name);
//   localStorage.setItem('savedCities', JSON.stringify(updatedCities));
// };
  
//   return (
//   <div>
//     <SearchBar onSearch={handleSearch} />
//     {error && <p style={{ color: 'red' }}>{error}</p>}
//     {weatherDataList.map((weatherData, index) => (
//       <div key={index} style={{ marginBottom: '20px' }}>
//         <h2>{weatherData.name}</h2>
//         <p>{kelvinToCelsius(weatherData.main.temp).toFixed(0)} °C</p>
//         <p>{weatherData.weather[0].description}</p>
//         <button onClick={() => handleRemoveCity(index)}>Remove</button>
//         <div className='div'>
//           <GoogleMaps key={`${weatherData.coord.lat}-${weatherData.coord.lon}`} lat={weatherData.coord.lat} lng={weatherData.coord.lon} />
//         </div>
//       </div>
//     ))}
//   </div>
// );
// };

// export default WeatherCard;


import React, { useState, useEffect } from 'react';
import { getWeather } from '../api/api';
import SearchBar from '../searchBar/searchbar';
import GoogleMaps from '../map/map';

const WeatherCard = () => {
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [error, setError] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

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

  const kelvinToFahrenheit = (kelvin) => {
    return (kelvin * 9) / 5 - 459.67;
  };

  const toggleToCelsius = () => {
    setIsCelsius(true);
  };

  const toggleToFahrenheit = () => {
    setIsCelsius(false);
  };

  const handleSearch = async (city) => {
    try {
      const data = await getWeather(city);
      setWeatherDataList((prevWeatherDataList) => [...prevWeatherDataList, data]);
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
          <p>{isCelsius ? kelvinToCelsius(weatherData.main.temp).toFixed(0) + " °C" : kelvinToFahrenheit(weatherData.main.temp).toFixed(0) + " °F"}</p>
          <p>{weatherData.weather[0].description}</p>
          <button onClick={() => handleRemoveCity(index)}>Remove</button>
          <div className='div'>
            <GoogleMaps key={`${weatherData.coord.lat}-${weatherData.coord.lon}`} lat={weatherData.coord.lat} lng={weatherData.coord.lon} />
          </div>
        </div>
      ))}
      <button onClick={toggleToCelsius}>°C</button>
      <button onClick={toggleToFahrenheit}>°F</button>
    </div>
  );
};

export default WeatherCard;
