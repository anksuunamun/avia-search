import {CurrentSortType, FlightsType} from '../App';
import {getFlightDuration} from './helper-functions';

export const sortByPriceDescending = (flights: Array<FlightsType>) => {
    return [...flights].sort((flight1, flight2) => +flight2.price - +flight1.price)
}

export const sortByPriceAscending = (flights: Array<FlightsType>) => {
    return [...flights].sort((flight1, flight2) => +flight1.price - +flight2.price)
}
export const sortByTravelTime = (flights: Array<FlightsType>) => {
    return [...flights].sort((flight1, flight2) => getFlightDuration(flight1) - getFlightDuration(flight2))
}

export const filterByCompanyName = (flights: Array<FlightsType>, companies: string[]) => {
    return companies.length > 0 ? flights.filter(flight => companies.some(company => company === flight.flightCaption)) : flights;
}

export const getFilteredFlights = (flights: Array<FlightsType>, stopsCount: number[], min: number, max: number, companies: string[]) => {
    return filterByCompanyName(flights.filter(flight => {
        let stops = flight.routes.reduce((acc, current) => Math.max(acc, current.stops), 0);
        let rangeFilterResult = (+flight.price >= min && +flight.price <= max);
        let stopsFilterResult = stopsCount.some(stop => stop === stops)
        return stopsFilterResult && rangeFilterResult
    }), companies)
}

export const getSortedFlights = (flights: Array<FlightsType>, sortType: CurrentSortType) => {
    if (sortType === 'priceAscending') return sortByPriceAscending(flights);
    if (sortType === 'priceDescending') return sortByPriceDescending(flights);
    if (sortType === 'travelTime') return sortByTravelTime(flights);
    return flights;
}