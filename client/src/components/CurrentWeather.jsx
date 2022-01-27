import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

const CurrentWeather = () => {
    const { state, dispatch } = useContext(WeatherContext);
    const current = state.currentWeather

  return (
    <div>

    </div>
    )
};

export default CurrentWeather;
