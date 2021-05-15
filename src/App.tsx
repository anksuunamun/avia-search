import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import Flight from './components/Flights/Flight';
import Filters from './components/Filters/Filters';
import {getFlights} from './dal/flights';
import {
    getFilteredFlights, getSortedFlights,
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

    let airLinesNames = useMemo(() => getAirlinesNames(flights), [flights]);

    const [airlines, setAirlines] = useState<Array<string>>(airLinesNames);
    const [currentSort, setCurrentSort] = useState<CurrentSortType>('priceAscending');
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(1000000);
    const [stopsCount, setStopsCount] = useState<number[]>([0, 1]);

    const [flightsForRender, setFlightsForRender] = useState<Array<FlightsType>>([]);

    const [disabledAirlines, setDisabledAirlines] = useState<string[]>([])

    useEffect(() => {
        const flights = getFlights()
        setFlights(flights);
        setFlightsForRender(sortByPriceAscending(getFilteredFlights(flights, stopsCount, min, max, [])));
        setAirlines(getAirlinesNames(flights));
    }, [])

    let flightsItems = useMemo(() => flightsForRender.map(item => <Flight {...item} />), [flightsForRender]);

    useEffect(() => {
        flights.length !== 0 && setFlightsForRender(getSortedFlights((getFilteredFlights(flights, stopsCount, min, max, airlines)), currentSort))
    }, [stopsCount, currentSort, min, max, airlines])

    useEffect(() => {
        let fl = getSortedFlights((getFilteredFlights(flights, stopsCount, min, max, [])), currentSort)
        setDisabledAirlines(airLinesNames.filter(name => !getAirlinesNames(fl).includes(name)));
    }, [stopsCount, currentSort, min, max])

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
        if (airlines.some(a => a === airLine)) {
            setAirlines(airlines.filter(a => a !== airLine))
        } else {
            setAirlines([...airlines, airLine])
        }
    }
    const setLowPriceBorderHandler = (min: number) => {
        setMin(min);
    }
    const setHighPriceBorderHandler = (max: number) => {
        setMax(max);
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
                         airlinesNames={airLinesNames}
                         currentSort={currentSort}
                         onCurrentSortHandler={onCurrentSortHandler}
                         stopsCount={stopsCount}
                         min={min}
                         max={max}
                         setLowPriceBorderHandler={setLowPriceBorderHandler}
                         setHighPriceBorderHandler={setHighPriceBorderHandler}
                         airlines={airlines}
                         disabledAirlines={disabledAirlines}/>
            </div>
            <div>
                {flightsItems}
                <div className={'moreButton'}>
                    <button>Показать еще</button>
                </div>
            </div>

        </div>
    );
}

export default App;
