import axios from 'axios';

 const apiKey = "820290b87322a7c3595da95c899c3746";
 const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherGeo = async (lat, lon) => {
  try {
    const response = await axios.get(`${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export { getWeatherGeo };


const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ lat: latitude, lon: longitude });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error('Geolocation is not supported.'));
    }
  });
};

export { getCurrentLocation };


