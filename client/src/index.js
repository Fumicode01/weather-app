import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WeatherContextProvider from './contexts/WeatherContext'

ReactDOM.render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>,
  document.getElementById('root')
);

