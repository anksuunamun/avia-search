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


export const filterByStopsCount = (flights: Array<FlightsType>, stopsCount: number) => {
    return [...flights].filter(flight => {
        let stops = flight.routes.reduce((acc, current) => Math.max(acc, current.stops), 0)
        return stops <= stopsCount;
    })
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

// let flights = [{flightCaption: "LOT Polish Airlines",
//     key: "ea4bf134-b49e-11eb-8a51-0906203a6a54",
//     price: "21049",
//     routes: [{
//         airline: {uid: 'LO', caption: 'LOT Polish Airlines', airlineCode: 'LO'},
//         arrivalAirport: {uid: 'WAW', caption: 'ВАРШАВА (ФРЕДЕРИК ШОПЕН)'},
//         arrivalCity: {uid: 'WAW', caption: 'ВАРШАВА (ФРЕДЕРИК ШОПЕН)'},
//         arrivalDate: '2020-08-18T21:55:00',
//         departureAirport: {uid: 'SVO', caption: 'ШЕРЕМЕТЬЕВО'},
//         departureCity: {uid: 'MOW', caption: 'Москва'},
//         departureDate: '2020-08-18T20:40:00',
//         duration: 885,
//         key: 'ea4bf132-b49e-11eb-8a51-0906203a6a54',
//         stops: 0
//     } ]}]

// const getFilteredFlights = (flights, stopsCount, min, max, companies) => {
//     return flights
//         .filter(flight => {
//             let stops = flight.routes.reduce((acc, current) => Math.max(acc, current.stops), 0);
//             let rangeFilterResult = (+flight.price >= min && +flight.price <= max);
//             return stops <= stopsCount && rangeFilterResult
//         })
// }