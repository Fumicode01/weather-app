import React, { useState, useContext, useRef, useEffect } from 'react';
import { WeatherContext } from '../contexts/WeatherContext'

const CurrentWeather = () => {
    const { state, dispatch } = useContext(WeatherContext);
    const current = state.currentWeather
    const [location, setLocation] = useState("");
    const input = useRef();
    // console.log(current.icon);
    // console.log(current.condition);

    useEffect(() => {
        setLocation(state.location)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (location !== "") {
          dispatch({ type: "LOADING", payload: true });
          dispatch({
            type: "SETTINGS",
            payload: { ...state.settings, geoLocation: "off" },
          });
          dispatch({ type: "LOCATION", payload: location });
          input.current.blur();
        }
      };


  return (
    <div className="w-96 cursor-pointer border b-gray-400 rounded-3xl flex flex-col justify-center items-center text-center p-6 bg-slate-100">
        <div className="text-md font-bold flex flex-col text-gray-900">
            <form onSubmit={handleSubmit}>
                <input
                className="overview-location"
                ref={input}
                type="text"
                value={location}
                onChange={(e) => {
                    setLocation(e.target.value);
                }}
                placeholder="New Location?"
                />
            </form>
            <span className="uppercase">Now</span> 
        </div>
        <div className="w-32 h-32 flex items-center justify-center">
            <img src={current?.icon} alt="" className='w-96'/>
        </div>
        <p className="text-gray-700 mb-2">{current?.condition}</p>
        <div className="text-3xl font-bold text-gray-900 mb-6">
           {current?.temp}º
        </div>
        
    </div>
    )
};

export default CurrentWeather;
