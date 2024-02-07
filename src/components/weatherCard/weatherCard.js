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


// import React, { useState, useEffect } from 'react';
// import { getWeather } from '../api/api';
// import SearchBar from '../searchBar/searchbar';
// import GoogleMaps from '../map/map';
// import wcss from './weatherCard.module.css'

// const WeatherCard = () => {
//   const [weatherDataList, setWeatherDataList] = useState([]);
//   const [error, setError] = useState(null);
//   const [isCelsius, setIsCelsius] = useState(true);

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

//   const kelvinToFahrenheit = (kelvin) => {
//     return (kelvin * 9) / 5 - 459.67;
//   };

//   const toggleToCelsius = () => {
//     setIsCelsius(true);
//   };

//   const toggleToFahrenheit = () => {
//     setIsCelsius(false);
//   };

//   const handleSearch = async (city) => {
//     try {
//       const data = await getWeather(city);
//       setWeatherDataList((prevWeatherDataList) => [...prevWeatherDataList, data]);
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
//     <div >
//       <SearchBar onSearch={handleSearch} />
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {weatherDataList.map((weatherData, index) => (
//         <div key={index} className={wcss.box}>
//           <div  className={wcss.boxTwo}>
//           <h2 className={wcss.title}>{weatherData.name}</h2>
//           <p className={wcss.text}>{isCelsius ? kelvinToCelsius(weatherData.main.temp).toFixed(0) + " °C" : kelvinToFahrenheit(weatherData.main.temp).toFixed(0) + " °F"}</p>
//           <p className={wcss.text}>{weatherData.weather[0].description}</p>
          
//           <button className={wcss.btngr} onClick={toggleToCelsius}>°C</button>
//             <button className={wcss.btngr} onClick={toggleToFahrenheit}>°F</button>
//           </div> 
//           <button className={wcss.bremove} onClick={() => handleRemoveCity(index)}>Remove</button>
//           <div className={wcss.boxMap}>
//             <GoogleMaps key={`${weatherData.coord.lat}-${weatherData.coord.lon}`} lat={weatherData.coord.lat} lng={weatherData.coord.lon} />
//           </div>   
//         </div>
//       ))}

//     </div>
//   );
// };

// export default WeatherCard;


import React, { useState, useEffect } from 'react';
import { getWeather } from '../api/api';
import SearchBar from '../searchBar/searchbar';
import GoogleMaps from '../map/map';
import wcss from './weatherCard.module.css'

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
        <div key={index} className={wcss.box}>
          <div className={wcss.boxTwo}>
            <h2 className={wcss.title}>{weatherData.name}</h2>
            <p className={wcss.text}>{new Date(weatherData.dt * 1000).toLocaleString()}</p>
            <p className={wcss.text}>
              {isCelsius
                ? `${kelvinToCelsius(weatherData.main.temp).toFixed(0)} °C`
                : `${kelvinToFahrenheit(weatherData.main.temp).toFixed(0)} °F`}
            </p>
            <p className={wcss.text}>{weatherData.weather[0].description}</p>
            <button className={wcss.btngr} onClick={toggleToCelsius}>
              °C
            </button>
            <button className={wcss.btngr} onClick={toggleToFahrenheit}>
              °F
            </button>
          </div>
          <button className={wcss.bremove} onClick={() => handleRemoveCity(index)}>
            Remove
          </button>
          <div className={wcss.boxMap}>
            <GoogleMaps key={`${weatherData.coord.lat}-${weatherData.coord.lon}`} lat={weatherData.coord.lat} lng={weatherData.coord.lon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;