import React, {useEffect, useState} from 'react';
import './App.css';
import Flight from './Flight/Flight';
import Filters from './components/Filters/Filters';
import {getFlights} from './DAL/flights';
import {
    filterByStopsCount,
    sortByPriceAscending,
    sortByPriceDescending,
    sortByTravelTime
} from './utils/sorts-and-filters';

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

function App() {

    const [flights, setFlights] = useState<Array<FlightsType>>([])

    useEffect(() => {
        const flights = getFlights()
        setFlights(flights)
    }, [])

    const flightsItems = flights?.map(item => <Flight {...item} />)

    const sortByPriceDescendingHandler = () => {
        setFlights(sortByPriceDescending(flights));
    }
    const sortByPriceAscendingHandler = () => {
        setFlights(sortByPriceAscending(flights));
    }

    const sortByTravelTimeHandler = () => {
        setFlights(sortByTravelTime(flights));
    }
    const filterByStopsCountHandler = (stopsCount: number) => {
        setFlights(filterByStopsCount(flights, stopsCount));
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
                         filterByStopsCountHandler={filterByStopsCountHandler}/>
            </div>
            <div>
                {flightsItems}
            </div>
        </div>
    );
}

export default App;
