import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'

import { WeatherContext } from './contexts/WeatherContext';
import Home from './pages/Home';

const config = {
    headers: {
        'location':'sydney'
    }
}

const App = () => {
    const { state, dispatch } = useContext(WeatherContext);
    // const current = state.currentWeather
    // const forecast =state.forecastWeather
   
    // useEffect (() => {
    //     console.log("current :", current)
    //     console.log("forecast :", forecast)
    // }, [current, forecast])


    useEffect(async () => {
        const getWeather = async () => {
            dispatch({ type: "LOADING", payload: true });
            const tempForecast = []
            const response = await axios.get(`http://localhost:5000/`, config)
            let currentWeatherData = {
                temp:response.data.current.temp_c,
                condition:response.data.current.condition.text,
                icon:response.data.current.condition.icon
            }
            await response.data.forecast.forecastday.forEach(async (snapshot) => {
                let forecastWeatherData = {
                    date:snapshot.date,
                    maxTemp:snapshot.day.maxtemp_c,
                    minTemp:snapshot.day.mintemp_c,
                    condition:snapshot.day.condition.text,
                    icon:snapshot.day.condition.icon
                }
               tempForecast.push(forecastWeatherData)
           })
        dispatch({ type: "CURRENT", payload: currentWeatherData });
        dispatch({ type: "FORECAST", payload: tempForecast });
        }
        await getWeather()
        dispatch({ type: "LOADING", payload: false });
    },[])


  return (
      <div className="">
          sample
        <Home />
      </div>

  )
};

export default App;
