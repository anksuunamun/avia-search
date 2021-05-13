import {v1} from 'uuid';
// @ts-ignore
import data from './flights.json';
import {generateStops} from '../utils/helper-functions';


export const getFlights = () => {
    // @ts-ignore
    return data.result.flights.map((flight: any) => {
        const routes = flight.flight.legs.map((leg: any) => {
            const segment = leg.segments[0];
            return {
                airline: segment.airline,
                departureCity: segment.departureCity,
                departureAirport: segment.departureAirport,
                departureDate: segment.departureDate,
                arrivalCity: segment.arrivalCity,
                arrivalAirport: segment.arrivalAirport,
                arrivalDate: segment.arrivalDate,
                stops: generateStops(),
                duration: leg.duration,
                key: v1()
            }
        })
        return {
            price: flight.flight.price.total.amount,
            flightCaption: flight.flight.carrier.caption,
            routes: routes,
            key: v1()
        }
    });
}