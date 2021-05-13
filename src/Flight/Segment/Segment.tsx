import React from 'react';
import styles from './Segment.module.css';
import {FlightType} from '../../App';


const Segment: React.FC<FlightType> = (props) => {
    if (!props.departureCity) {
        return <div>Loading...</div>
    }
    return (
        <div className={styles.segment}>
            <div className={styles.segment_header}>{props.departureCity.caption}, {props.departureAirport.caption}
                <span> ({props.departureAirport.uid})</span>
                <span> &#8594; </span> {props.arrivalCity.caption}, {props.arrivalAirport.caption}<span> ({props.arrivalAirport.uid})</span>
            </div>
            <div className={styles.greyLine}/>
            <div className={styles.segment_dates}>
                <div>
                    <span>{`${new Date(props.departureDate).getHours()}:${new Date(props.departureDate).getMinutes()}`}</span>
                </div>
                <div>duration</div>
                <div>
                    {props.arrivalDate}
                </div>
            </div>
            <div>
                {props.stops ? props.stops + ' пересадка' : props.stops + ' пересадок'}
            </div>
            <div>Рейс выполняет: {props.airline.caption}</div>
        </div>
    )
}


export default Segment;