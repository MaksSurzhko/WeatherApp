import axios from 'axios';

const apiKey = "820290b87322a7c3595da95c899c3746";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city) => {
 
    try {
        const response = await axios(`${apiUrl}?q=${city}&appid=${apiKey}`)
        return response.data
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
};

export { getWeather };


// import axios from 'axios';

//  const apiKey = "820290b87322a7c3595da95c899c3746";
//  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// const getWeather = async (lat, lon) => {
//   try {
//     const response = await axios.get(`${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//     throw error;
//   }
// };

// export { getWeather };