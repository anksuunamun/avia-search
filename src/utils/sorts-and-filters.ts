import {FlightsType} from '../App';
import {getFlightDuration} from './helper-functions';

export const sortByPriceDescending = (flights: Array<FlightsType>) => {
    return [...flights].sort((flight1, flight2) => +flight1.price - +flight2.price)
}

export const sortByPriceAscending = (flights: Array<FlightsType>) => {
    return [...flights].sort((flight1, flight2) => +flight2.price - +flight1.price)
}
export const sortByTravelTime = (flights: Array<FlightsType>) => {
    return [...flights].sort((flight1, flight2) => getFlightDuration(flight1) - getFlightDuration(flight2))
}

export const filterByStopsCount = (flights: Array<FlightsType>, stopsCount: number) => {
    return [...flights].filter(flight => {
        let stops = flight.routes.reduce((acc, current) => Math.max(acc, current.stops), 0)
        return stops === stopsCount;
    })
}