import React, {useEffect, useState} from 'react';
import './App.css';
import Flight from './Flight/Flight';
import Filters from './components/Filters/Filters';
import {getFlights} from './dal/flights';
import {
    filterByCompanyName,
    filterByStopsCount,
    sortByPriceAscending,
    sortByPriceDescending,
    sortByTravelTime
} from './utils/sorts-and-filters';
import {getAirlinesNames} from './utils/helper-functions';

export type FlightType = {
    airline: { uid: string, caption: string, airlineCode: string }
    arrivalAirport: { uid: string, caption: string }
    arrivalCity: { uid: string, caption: string }
    arrivalDate: string
    departureAirport: { uid: string, caption: string }
    departureCity: { uid: string, caption: string }
    departureDate: string
    key: string
    stops: number
    duration: number
}

export type FlightsType = {
    flightCaption: string
    key: string
    price: string
    routes: Array<FlightType>
}

export type CurrentSortType = 'priceAscending' | 'priceDescending' | 'travelTime'

function App() {

    const [flights, setFlights] = useState<Array<FlightsType>>([]);
    const [airlines, setAirlines] = useState<Array<string>>([]);

    const [currentSort, setCurrentSort] = useState<CurrentSortType>('priceAscending');

    const [flightsForRender, setFlightsForRender] = useState<Array<FlightsType>>([]);

    useEffect(() => {
        const flights = getFlights()
        setFlights(flights);
        setFlightsForRender(sortByPriceAscending(flights));
        setAirlines(getAirlinesNames(flights));
    }, [])


    const flightsItems = flightsForRender?.map(item => <Flight {...item} />)

    const sortByPriceDescendingHandler = () => {
        setCurrentSort('priceDescending');
        setFlightsForRender(sortByPriceDescending(flights));
    }
    const sortByPriceAscendingHandler = () => {
        setCurrentSort('priceAscending')
        setFlightsForRender(sortByPriceAscending(flights));
    }
    const sortByTravelTimeHandler = () => {
        setCurrentSort('travelTime');
        setFlightsForRender(sortByTravelTime(flights));
    }
    const filterByStopsCountHandler = (stopsCount: number) => {
        setFlightsForRender(filterByStopsCount(flights, stopsCount));
    }
    const filterByCompanyNameHandler = (airLine: string) => {
        setFlightsForRender(filterByCompanyName(flights, [airLine]));
    }
    const onCurrentSortHandler = (value: CurrentSortType) => {
        setCurrentSort(value);
    }


    if (!flights) {
        return <div>Loading...</div>
    }

    return (
        <div className="App">
            <div>
                <Filters sortByPriceDescendingHandler={sortByPriceDescendingHandler}
                         sortByPriceAscendingHandler={sortByPriceAscendingHandler}
                         sortByTravelTimeHandler={sortByTravelTimeHandler}
                         filterByStopsCountHandler={filterByStopsCountHandler}
                         filterByCompanyName={filterByCompanyNameHandler}
                         airlinesNames={airlines}
                         currentSort={currentSort}
                         onCurrentSortHandler={onCurrentSortHandler}/>
            </div>
            <div>
                {flightsItems}
            </div>
        </div>
    );
}

export default App;
