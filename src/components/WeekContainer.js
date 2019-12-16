import React, {Component} from 'react';
import DayCard from './DayCard';

function WeekContainer(props) {
    let days = [];
    for (let key in props.api.list) {
        if(props.api.list[key].dt_txt.includes("12:00:00")) {
            days.push(props.api.list[key]);
        }
    }
    return days.map(function (day, index) {
        return <DayCard day={day} key={index}/>
    });
};

export default WeekContainer