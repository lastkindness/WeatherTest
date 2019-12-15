import React from 'react';
import Card from './DayCard';
const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&lang=ru&units=metric&APPID=c792484ade42380886f51003cfcaf04d";

class WeekContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            days: []
        };
    }

    componentDidMount() {
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({days: dailyData})
            });
    }

    formatCards = () => {
        return this.state.days.map((day, index) => <Card day={day} key={index}/>)
    }

    render() {
        return (
            <div className="cards">
                {this.formatCards()}
            </div>
        )
    }
}

export default WeekContainer