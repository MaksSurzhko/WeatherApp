import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header/header';
import WeatherCard from './components/weatherCard/weatherCard';

function App() {
  return (
    <div>
      <Header />
      <WeatherCard city="Cherkasy" />
    </div>
  );
}

export default App;
