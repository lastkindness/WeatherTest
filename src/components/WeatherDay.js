import React, {Component} from 'react';

function WeatherDay(props) {
    const weatherData = props.apiWeather;
    let weatherCity = "",
        weatherDescr = "",
        weatherIcon = "",
        weatherMainTemp = "",
        weatherMinTemp = "",
        weatherMaxTemp = "",
        weatherWind = "";
    for (let key in weatherData.city) {
        if(key==="name") {
            weatherCity = weatherData.city[key];
            break;
        }
    }
    for (let key in weatherData.list) {
        if(key==="0") {
            for (let key1 in weatherData.list[key]) {
                if(key1==="main") {
                    weatherMainTemp = weatherData.list[key][key1].temp;
                    weatherMinTemp = weatherData.list[key][key1].temp_min;
                    weatherMaxTemp = weatherData.list[key][key1].temp_max;
                }
                else if(key1==="weather") {
                    weatherDescr = weatherData.list[key][key1][0].description;
                    weatherIcon = weatherData.list[key][key1][0].icon;
                }
                else if (key1==="wind") {
                    weatherWind = weatherData.list[key][key1].speed;
                }
            }
        }
        break;
    }
    const iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
    return (
        <div className="card-main">
            <h1>
                {weatherDescr} in {weatherCity}
                <img src={iconUrl} alt={weatherDescr} />
            </h1>
            <h3>Текущая температура: {weatherMainTemp}°</h3>
            <h4>Максимальная температура: {weatherMaxTemp}°</h4>
            <h4>Минимальная температура: {weatherMinTemp}°</h4>
            <h4>Скорость ветра: {weatherWind} м/c</h4>
        </div>
    );
};

export default WeatherDay;