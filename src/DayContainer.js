import React, {Component} from 'react';

class WeatherDisplay extends Component {
    constructor() {
        super();
        this.state = {
            weatherData: null
        };
    }
    componentDidMount() {
        const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';
        const weatherApiLink = `https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&lang=ru&units=metric&mode=json&appid=${openWeatherApiKey}`;
        fetch(weatherApiLink).then(res => res.json()).then(json => {
            this.setState({ weatherData: json });
        });
    }
    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div className="card-main">
                <h1>
                    {weather.description} in {weatherData.name}
                    <img src={iconUrl} alt={weatherData.description} />
                </h1>
                <h3>Текущая температура: {weatherData.main.temp}°</h3>
                <h4>Максимальная температура: {weatherData.main.temp_max}°</h4>
                <h4>Минимальная температура: {weatherData.main.temp_min}°</h4>
                <h4>Скорость ветра: {weatherData.wind.speed} м/c</h4>
            </div>
        );
    }
}

class DayContainer extends Component {
    render() {
        return (
            <div className="App">
                <WeatherDisplay/>
            </div>
        );
    }
}

export default DayContainer