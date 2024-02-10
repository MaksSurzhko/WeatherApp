// import React, { useState, useEffect } from 'react';

// const Geolocation = ({ onGeolocation }) => {
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     handleGeolocationSearch();
//   }, []); // Run the geolocation search on component mount

//   const handleGeolocationSearch = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           try {
//             // Use the latitude and longitude to fetch location data
//             const response = await fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`);
//             const data = await response.json();

//             // Ensure that onGeolocation is called with the location data
//             onGeolocation(data);
//             setError(null);
//           } catch (error) {
//             setError('Error fetching location data.');
//           }
//         },
//         (error) => {
//           setError('Geolocation error: ' + error.message);
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by your browser.');
//     }
//   };

//   return (
//     <div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default Geolocation;