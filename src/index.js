// import React from 'react'
import React, {Component} from 'react';
import {render} from 'react-dom';
import WeekContainer from './WeekContainer';
import DayContainer from './DayContainer';
import "./App.css";

class WeatherDisplay extends Component {
    constructor() {
        super();
        this.state = {
            weatherData: []
        };
    }
    componentDidMount() {
        const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&lang=ru&units=metric&APPID=${openWeatherApiKey}`;
        fetch(weatherURL)
            .then(res => res.json())
            .then(json => {
                this.setState({ weatherData: json });
            });
    }

    render() {
        const weatherData = this.state.weatherData;
        const city = weatherData.city;
        let name = "";
        for (var key in city) {
            if(key=="name") {
                name = city[key];
            }
        }
        return (
            <div className="container">
                <div className="day-container">
                    <DayContainer/>
                </div>
                <div className="week-container">
                    <h1 className="main-title">Прогноз погоды на 5 дней</h1>
                    <h2 className="city-title">{name}</h2>
                    <WeekContainer/>
                </div>
            </div>
        )
    }
}


render(<WeatherDisplay/>, document.getElementById('root'))