import React, {Component} from 'react';
import WeatherDay from './WeatherDay';

function DayContainer(props) {
    const WeatherApi = props.api;
    return (
        <div className="App">
            <WeatherDay apiWeather={WeatherApi}/>
        </div>
    );
};

export default DayContainer