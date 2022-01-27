import React, {useContext} from 'react';
import { WeatherContext } from '../contexts/WeatherContext'

const Card = () => {
    const { state } = useContext(WeatherContext);
    const forecastWeathers =state.forecastWeather
    console.log(forecastWeathers);

    const getDayOfWeek = (date) => {
        return new Date(date).toLocaleString('en-us', {weekday:'long'})
    }

  return (
        <div className="flex">
            {forecastWeathers?.map((weather) => (
                <div key={weather.date} className="w-64 cursor-pointer border b-gray-400 rounded-3xl flex flex-col justify-center items-center text-center p-6 bg-slate-100">
                    <div className="text-md font-bold flex flex-col text-gray-900">
                        <span className="uppercase">{getDayOfWeek(weather.date)}</span> 
                    </div>
                    <div className="w-32 h-32 flex items-center justify-center">
                        <img src={weather.icon} alt="" />
                    </div>
                    <p className="text-gray-700 mb-2">{weather.condition}</p>
                    <div className="text-3xl font-bold text-gray-900 mb-6">
                        {weather.maxTemp}º
                        <span className="font-normal text-gray-700 mx-1">/</span>
                        {weather.minTemp}º
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Card;
