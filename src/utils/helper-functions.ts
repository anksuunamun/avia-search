import {FlightsType} from '../App';

export const addZero = (time: number) => {
    return time < 10 ? `0${time}` : time;
}

export const getFlightDuration = (flight: FlightsType) => flight.routes.reduce((acc, current) => acc + current.duration, 0)
