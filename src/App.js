import './App.css';
import React from 'react';
import Header from './components/header/header';
import WeatherCard from './components/weatherCard/weatherCard';
import Footer from './components/footer/footer'

function App() {
  return (
    <div>
      <Header />
      <WeatherCard city="" />
      <Footer />
    </div>
  );
}

export default App;





