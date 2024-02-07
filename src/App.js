import logo from './logo.svg';
import './App.css';
import React from 'react';
import WeatherCard from './components/weatherCard/weatherCard';

function App() {
  return (
    <div>
        <WeatherCard city="Cherkasy" />
    </div>
  );
}

export default App;
