import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const GoogleMaps = ({ lat, lng }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: lat || 0,
    lng: lng || 0,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs">
      <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10}>
        {/* Додаткові елементи або маркери на карті */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;