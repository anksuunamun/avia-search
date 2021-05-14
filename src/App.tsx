import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import Flight from './Flight/Flight';
import Filters from './components/Filters/Filters';
import {getFlights} from './dal/flights';
import {
    filterByCompanyName, getFilteredFlights, getSortedFlights,
    sortByPriceAscending,
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
    const [minMax, setMinMax] = useState<number[]>([0, 1000000]);
    const [stopsCount, setStopsCount] = useState<number[]>([0, 1]);

    const [flightsForRender, setFlightsForRender] = useState<Array<FlightsType>>([]);

    useEffect(() => {
        const flights = getFlights()
        setFlights(flights);
        setFlightsForRender(sortByPriceAscending(getFilteredFlights(flights, stopsCount, minMax[0], minMax[1], [])));
        setAirlines(getAirlinesNames(flights));
    }, [])

    let flightsItems = useMemo(() => flightsForRender.map(item => <Flight {...item} />), [flightsForRender])

    useEffect(() => {
        flights.length !== 0 && setFlightsForRender(getSortedFlights((getFilteredFlights(flights, stopsCount, minMax[0], minMax[1], [])), currentSort))
    }, [stopsCount, currentSort, minMax])

    console.log(flightsForRender)

    const sortByPriceDescendingHandler = () => {
        setCurrentSort('priceDescending');
    }
    const sortByPriceAscendingHandler = () => {
        setCurrentSort('priceAscending');
    }
    const sortByTravelTimeHandler = () => {
        setCurrentSort('travelTime');
    }
    const filterByStopsCountHandler = (stops: number) => {
        if (stopsCount.some(stop => stop === stops)) {
            setStopsCount(stopsCount.filter(s => s !== stops))
        } else {
            setStopsCount([...stopsCount, stops])
        }
    }
    const filterByCompanyNameHandler = (airLine: string) => {
        setFlightsForRender(filterByCompanyName(flights, [airLine]));
    }
    const onCurrentSortHandler = (value: CurrentSortType) => {
        setCurrentSort(value);
    }


    if (flights.length === 0 && flightsForRender.length === 0) {
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
                         onCurrentSortHandler={onCurrentSortHandler}
                         stopsCount={stopsCount}/>
            </div>
            <div>
                {flightsItems}
            </div>
        </div>
    );
}

export default App;
