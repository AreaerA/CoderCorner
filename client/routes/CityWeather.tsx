import React, { useEffect, useState } from "react";
import '../stylesheets/weather.css'

//api key information: https://openweathermap.org/appid
//api docs: https://openweathermap.org/api/one-call-3#how
// const API_KEY = process.env.REACT_APP_OW_API_KEY


//Geocoding API:
// https://openweathermap.org/api/geocoding-api
  // city name
  //state code 
  // country code 


export default function CityWeather() {
    //state needed
    const [weather, setWeather] = useState({});

    //useEffect for API call
        //data needed
            //timezone
            //current => temp
            //weather {icon, main, description}

    useEffect(() => {
        fetch('./api')
            .then( res => res.json())
            .then(data => {
                const obj = {};
                if(data.hasOwnProperty('timezone')) obj.timezone = data[timezone]
                if(data.hasOwnProperty('current')) obj.current = data[current]
                setWeather(obj)
            })
            .catch(err => console.log('error in api call'))
    }, [])

    //functions for modular component
        //location
        //icon
        //weather
        //temp



    return (
        <div className='main-div'>
            <input></input>
            <button></button>
            <div className='modular-div'>
              <div className='location'></div>
              <div className='icon'></div>
              <div className='weather'></div>
              <div className='temp'></div>
            </div>
            <h1>It's Cold</h1>
        </div>
    )
}
//! Example API Call:
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


//`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//! Example API
    /*  {
      "lat": 39.31,
      "lon": -74.5,
      "timezone": "America/New_York",
      "timezone_offset": -18000,
      "current": {
        "dt": 1646318698,
        "sunrise": 1646306882,
        "sunset": 1646347929,
        "temp": 282.21,
        "feels_like": 278.41,
        "pressure": 1014,
        "humidity": 65,
        "dew_point": 275.99,
        "uvi": 2.55,
        "clouds": 40,
        "visibility": 10000,
        "wind_speed": 8.75,
        "wind_deg": 360,
        "wind_gust": 13.89,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ]
      },
      "minutely": [
        {
          "dt": 1646318700,
          "precipitation": 0
        },
        ...
      },
        "hourly": [
        {
          "dt": 1646316000,
          "temp": 281.94,
          "feels_like": 278.49,
          "pressure": 1014,
          "humidity": 67,
          "dew_point": 276.16,
          "uvi": 1.49,
          "clouds": 52,
          "visibility": 10000,
          "wind_speed": 7.16,
          "wind_deg": 313,
          "wind_gust": 10.71,
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "pop": 0.03
        },
        ...
      }
        "daily": [
        {
          "dt": 1646326800,
          "sunrise": 1646306882,
          "sunset": 1646347929,
          "moonrise": 1646309880,
          "moonset": 1646352120,
          "moon_phase": 0.03,
          "temp": {
            "day": 281.63,
            "min": 271.72,
            "max": 282.21,
            "night": 271.72,
            "eve": 277.99,
            "morn": 280.92
          },
          "feels_like": {
            "day": 277.83,
            "night": 264.72,
            "eve": 273.35,
            "morn": 277.66
          },
          "pressure": 1016,
          "humidity": 55,
          "dew_point": 273.12,
          "wind_speed": 9.29,
          "wind_deg": 3,
          "wind_gust": 16.48,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": 49,
          "pop": 0.25,
          "rain": 0.11,
          "uvi": 3.38
        },
        ...
        },
        */