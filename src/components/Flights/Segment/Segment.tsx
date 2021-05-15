import React, {useMemo} from 'react';
import styles from './Segment.module.css';
import {FlightType} from '../../../App';
import {formatDuration, getFormattedDate, getFormattedTime} from '../../../utils/helper-functions';


const Segment: React.FC<FlightType> = (props) => {

    const depDate = useMemo(() => new Date(props.departureDate), [props.departureDate]);

    const arrDate = useMemo(() => new Date(props.arrivalDate), [props.arrivalDate]);

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
                    <span>{getFormattedTime(depDate)} </span>
                    <span>{getFormattedDate(depDate)}</span>
                </div>
                <div>&#9719; {formatDuration(props.duration)}</div>
                <div>
                    <span>{getFormattedDate(arrDate)} </span>
                    <span>{getFormattedTime(arrDate)} </span>
                </div>
            </div>
            <div className={styles.segment_stops}>
                <div className={styles.boldGreyLine}/>
                <span>{props.stops ? props.stops + ' пересадка' : props.stops + ' пересадок'}</span>
                <div className={styles.boldGreyLine}/>
            </div>
            <div>Рейс выполняет: {props.airline.caption}</div>
        </div>
    )
}


export default Segment;