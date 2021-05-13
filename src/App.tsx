import React, {useEffect, useState} from 'react';
import './App.css';
import Flight from './Flight/Flight';
import Filters from './components/Filters/Filters';
import {getFlights} from './DAL/flights';
import {sortByPriceAscending, sortByPriceDescending} from './utils/sort';

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
        console.log('bla')
        setFlights(sortByPriceDescending(flights));
    }
    const sortByPriceAscendingHandler = () => {
        console.log('bla')
        setFlights(sortByPriceAscending(flights));
    }

    if (!flights) {
        return <div>Loading...</div>
    }

    return (
        <div className="App">
            <div>
                <Filters sortByPriceDescendingHandler={sortByPriceDescendingHandler}
                         sortByPriceAscendingHandler={sortByPriceAscendingHandler}/>
            </div>
            <div>
                {flightsItems}
            </div>
        </div>
    );
}

export default App;
