import React, { useEffect, useState } from 'react';
import { getWeatherForecast } from '../api/apiForecast';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';

const Forecast = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const data = await getWeatherForecast(city);
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchForecastData();
  }, [city]);

  const convertKelvinToCelsius = kelvin => (kelvin - 273.15).toFixed(0);

  const createChartData = () => {
    if (!forecastData) return [];

    return forecastData.list.map(entry => ({
      name: moment.unix(entry.dt).format('YYYY-MM-DD HH:mm:ss'),
      temperature: convertKelvinToCelsius(entry.main.temp),
    }));
  };

  return (
    <div>
      <h2>Weather Forecast for {city}</h2>
      {forecastData && (
        <div>
          <LineChart width={800} height={400} data={createChartData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#8884d8" name="Temperature (°C)" />
          </LineChart>
        </div>
      )}
    </div>
  );
};

export default Forecast;