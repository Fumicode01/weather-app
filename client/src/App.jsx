import React, { useContext, useEffect } from 'react';
import axios from 'axios'

import { WeatherContext } from './contexts/WeatherContext';
import Card from './components/Card';
import CurrentWeather from './components/CurrentWeather';


const App = () => {
    const { state, dispatch } = useContext(WeatherContext);
    // const current = state.currentWeather
    const forecastWeathers =state.forecastWeather
    const location = state.location
    console.log(location);

    const config = {
        headers: {
            'location':location
        }
    }
   
    // useEffect (() => {
    //     console.log("current :", current)
    //     console.log("forecast :", forecast)
    // }, [current, forecast])


    useEffect(async () => {
        const getWeather = async () => {
            dispatch({ type: "LOADING", payload: true });
            const tempForecast = []
            const response = await axios.get(`http://localhost:5000/`, config)
            console.log(response);
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
    },[location])


  return (
      <div className="flex flex-col justify-center items-center">
        <CurrentWeather />
        <Card />
      </div>

  )
};

export default App;
