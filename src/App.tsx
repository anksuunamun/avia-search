import React, {useEffect, useState} from 'react';
import './App.css';
import Flight from './Flight/Flight';
import Filters from './Filters/Filters';
import {getFlights} from './DAL/flights';

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
