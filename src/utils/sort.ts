import {FlightsType} from '../App';

export const sortByPriceDescending = (flights: Array<FlightsType>) => {
    return [...flights].sort((flight1, flight2) => +flight1.price - +flight2.price)
}

export const sortByPriceAscending = (flights: Array<FlightsType>) => {
    return [...flights].sort((flight1, flight2) => +flight2.price - +flight1.price)
}
export const sortByTravelTime = (flights: Array<FlightsType>) => {

}