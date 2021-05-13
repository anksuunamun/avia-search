import {FlightsType} from '../App';

export const addZero = (time: number) => {
    return time < 10 ? `0${time}` : time;
}

