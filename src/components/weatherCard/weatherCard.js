// import React, { useState, useEffect } from 'react';
// import { getWeather } from '../api/api';
// import SearchBar from '../searchBar/searchbar';
// import GoogleMaps from '../map/map';
// import wcss from './weatherCard.module.css';
// import Forecast from '../forecast/forecast';
// import { useTranslation } from 'react-i18next';
// import { getWeatherGeo, getCurrentLocation } from '../api/apiGeo';

// const WeatherCard = () => {
//   const [weatherDataList, setWeatherDataList] = useState([]);
//   const [error, setError] = useState(null);
//   const [isCelsius, setIsCelsius] = useState([]);
//   const { t } = useTranslation();

//   useEffect(() => {
//     const savedCitiesFromLocalStorage = JSON.parse(localStorage.getItem('savedCities')) || [];

//     const fetchData = async () => {
//       try {
//         const location = await getCurrentLocation();
//         const data = await getWeatherGeo(location.lat, location.lon);
//         setWeatherDataList([data]);
//         setIsCelsius([true]);
//         setError(null);

//         const updatedCities = [...new Set([...savedCitiesFromLocalStorage, data.name])];
//         localStorage.setItem('savedCities', JSON.stringify(updatedCities));
//       } catch (error) {
//         console.error('Error getting current location or fetching weather data:', error);
//         setError('Error fetching weather data.');
//       }
//     };

//     fetchData();
//   }, []);

  
//   const kelvinToCelsius = (kelvin) => {
//     return kelvin - 273.15;
//   };

//   const kelvinToFahrenheit = (kelvin) => {
//     return (kelvin * 9) / 5 - 459.67;
//   };

//   const toggleToCelsius = (index) => {
//     setIsCelsius((prevIsCelsius) => {
//       const updatedIsCelsius = [...prevIsCelsius];
//       updatedIsCelsius[index] = true;
//       return updatedIsCelsius;
//     });
//   };

//   const toggleToFahrenheit = (index) => {
//     setIsCelsius((prevIsCelsius) => {
//       const updatedIsCelsius = [...prevIsCelsius];
//       updatedIsCelsius[index] = false;
//       return updatedIsCelsius;
//     });
//   };

//   const handleSearch = async (city) => {
//     try {
//       const data = await getWeather(city);
//       setWeatherDataList([data]);
//       setIsCelsius([true]);
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

//     const updatedIsCelsius = [...isCelsius];
//     updatedIsCelsius.splice(index, 1);
//     setIsCelsius(updatedIsCelsius);

//     const updatedCities = updatedWeatherDataList.map((weatherData) => weatherData.name);
//     localStorage.setItem('savedCities', JSON.stringify(updatedCities));
//   };

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} />
//       {error && <p className={wcss.error} style={{ color: 'red' }}>{error}</p>}

//       {weatherDataList.length > 0 &&
//         weatherDataList.map((weatherData, index) => (
//           <div key={index} className={wcss.box}>
//             <div className={wcss.boxTwo}>
//               <h2 className={wcss.title}>{weatherData.name}</h2>
//               <p className={wcss.text}>{new Date(weatherData.dt * 1000).toLocaleString()}</p>

//               <div className={wcss.boxThree}>
//                 <p className={wcss.textt}>
//                   {isCelsius[index]
//                     ? `${kelvinToCelsius(weatherData.main.temp).toFixed(0)} °C`
//                     : `${kelvinToFahrenheit(weatherData.main.temp).toFixed(0)} °F`}
//                 </p>
//               </div>

//               <p className={wcss.text}>
//                 {t('Feels like')}{' '}
//                 {isCelsius[index]
//                   ? `${kelvinToCelsius(weatherData.main.feels_like).toFixed(0)} °C`
//                   : `${kelvinToFahrenheit(weatherData.main.feels_like).toFixed(0)} °F`}  .
//                 {weatherData.weather[0].description} .
//                 {`${t('Wind')}: ${weatherData.wind.speed}`}
//               </p>
//               <div className={wcss.boxBtn}>
//                 <button className={wcss.btngr} onClick={() => toggleToCelsius(index)}>
//                   °C
//                 </button>
//                 <button className={wcss.btngr} onClick={() => toggleToFahrenheit(index)}>
//                   °F
//                 </button>
//               </div>
//               <div className={wcss.boxForecast}>
//                 <Forecast city={weatherData.name} />
//               </div>
//             </div>
//             <button className={wcss.bremove} onClick={() => handleRemoveCity(index)}>
//               {t('Remove')}
//             </button>
//             <div className={wcss.boxMap}>
//               <GoogleMaps
//                 key={`${weatherData.coord.lat}-${weatherData.coord.lon}`}
//                 lat={weatherData.coord.lat}
//                 lng={weatherData.coord.lon}
//               />
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default WeatherCard;




import React, { useState, useEffect } from 'react';
import { getWeather } from '../api/api';
import SearchBar from '../searchBar/searchbar';
import GoogleMaps from '../map/map';
import wcss from './weatherCard.module.css';
import Forecast from '../forecast/forecast';
import { useTranslation } from 'react-i18next';
import { getWeatherGeo, getCurrentLocation } from '../api/apiGeo';

const WeatherCard = () => {
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [error, setError] = useState(null);
  const [isCelsius, setIsCelsius] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const savedCitiesFromLocalStorage = JSON.parse(localStorage.getItem('savedCities')) || [];

    const fetchData = async () => {
      try {
        const location = await getCurrentLocation();
        const data = await getWeatherGeo(location.lat, location.lon);
        setWeatherDataList([data]);
        setIsCelsius([true]);
        setError(null);

        const updatedCities = [...new Set([...savedCitiesFromLocalStorage, data.name])];
        localStorage.setItem('savedCities', JSON.stringify(updatedCities));
      } catch (error) {
        console.error('Error getting current location or fetching weather data:', error);
        setError('Error fetching weather data.');
      }
    };

    fetchData();
  }, []);

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const kelvinToFahrenheit = (kelvin) => {
    return (kelvin * 9) / 5 - 459.67;
  };

  const toggleToCelsius = (index) => {
    setIsCelsius((prevIsCelsius) => {
      const updatedIsCelsius = [...prevIsCelsius];
      updatedIsCelsius[index] = true;
      return updatedIsCelsius;
    });
  };

  const toggleToFahrenheit = (index) => {
    setIsCelsius((prevIsCelsius) => {
      const updatedIsCelsius = [...prevIsCelsius];
      updatedIsCelsius[index] = false;
      return updatedIsCelsius;
    });
  };

  const handleSearch = async (city) => {
    try {
      const data = await getWeather(city);
      setWeatherDataList([data]);
      setIsCelsius([true]);
      setError(null);

      const updatedCities = [...new Set([...JSON.parse(localStorage.getItem('savedCities')) || [], city])];
      localStorage.setItem('savedCities', JSON.stringify(updatedCities));
    } catch (error) {
      setError('Wrong city name.');
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <p className={wcss.error} style={{ color: 'red' }}>{error}</p>}

      {weatherDataList.length > 0 &&
        weatherDataList.map((weatherData, index) => (
          <div key={index} className={wcss.box}>
            <div className={wcss.boxTwo}>
              <h2 className={wcss.title}>{weatherData.name}</h2>
              <p className={wcss.text}>{new Date(weatherData.dt * 1000).toLocaleString()}</p>

              <div className={wcss.boxThree}>
                <p className={wcss.textt}>
                  {isCelsius[index]
                    ? `${kelvinToCelsius(weatherData.main.temp).toFixed(0)} °C`
                    : `${kelvinToFahrenheit(weatherData.main.temp).toFixed(0)} °F`}
                </p>
              </div>

              <p className={wcss.text}>
                {t('FeelsLike')}{' '}
                {isCelsius[index]
                ? `${kelvinToCelsius(weatherData.main.feels_like).toFixed(0)} ${t('Celsius')}`
                : `${kelvinToFahrenheit(weatherData.main.feels_like).toFixed(0)} ${t('Fahrenheit')}`}  .
                  {weatherData.weather[0].description} .
                  {`${t('Wind')}: ${weatherData.wind.speed}`}
              </p>
              <div className={wcss.boxBtn}>
                <button className={wcss.btngr} onClick={() => toggleToCelsius(index)}>
                  °C
                </button>
                <button className={wcss.btngr} onClick={() => toggleToFahrenheit(index)}>
                  °F
                </button>
              </div>
              <div className={wcss.boxForecast}>
                <Forecast city={weatherData.name} />
              </div>
            </div>
            
            <div className={wcss.boxMap}>
              <GoogleMaps
                key={`${weatherData.coord.lat}-${weatherData.coord.lon}`}
                lat={weatherData.coord.lat}
                lng={weatherData.coord.lon}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default WeatherCard;