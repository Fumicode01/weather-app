import React, { useState, useEffect} from 'react';
import axios from 'axios'

const config = {
    headers: {
        'location':'sydney'
    }
}

const Card = () => {
    const [weather, setWeather] = useState("")

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await axios.get(`http://localhost:5000/`, config)
            console.log(response);
        }
        fetchWeather()
    },[])
    
  return (
    <div className='flex flex-col'>
        <h3>Sydney</h3>
    </div>
    )
};

export default Card;
