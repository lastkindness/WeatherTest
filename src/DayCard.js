import React from 'react';

class Card extends React.Component {
    render() {
        const ms = this.props.day.dt * 1000;
        const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
        const weekdayDate = new Date(ms).toLocaleString('ru', {day: 'numeric'});
        const weekdayMonth = new Date(ms).toLocaleString('ru', {month: 'long'});
        const weekdayYear = new Date(ms).toLocaleString('ru', {year: 'numeric'});
        const imgURL = "http://openweathermap.org/img/w/" + this.props.day.weather[0].icon + ".png";
        return (
            <div className="card">
                <div className="card-wrap">
                    <h3 className="card-title">
                        {weekdayName}
                        <span className="date">{weekdayDate} {weekdayMonth} {weekdayYear}</span>
                    </h3>
                    <div className="card-body">
                        <img src={imgURL}/>
                        <p className="card-text">{this.props.day.weather[0].description}</p>
                    </div>
                    <h3>Текущая температура: {Math.round(this.props.day.main.temp)} °C</h3>
                    <h4>Минимальная температура: {Math.round(this.props.day.main.temp_min)} °C</h4>
                    <h4>Максимальная температура: {Math.round(this.props.day.main.temp_max)} °C</h4>
                    <h4>Скорость ветра: {Math.round(this.props.day.wind.speed)} м/c</h4>
                </div>
            </div>
        )
    }
}


export default Card