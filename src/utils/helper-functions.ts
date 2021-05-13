import {FlightsType} from '../App';

export const addZero = (time: number) => {
    return time < 10 ? `0${time}` : time;
}

export const getFlightDuration = (flight: FlightsType) => flight.routes.reduce((acc, current) => acc + current.duration, 0)

export const formatDuration = (duration: number) => {
    let result = [];
    let days = Math.floor(duration / (60 * 24));
    let hours = Math.floor(duration / 60 - days * 24);
    let minutes = Math.floor(duration - days * 24 * 60 - hours * 60);
    days > 1 && result.push(`${days} д`);
    hours && result.push(`${hours} ч`);
    minutes && result.push(`${minutes} мин`);
    return result.join(' ');
}