import React from 'react';
import styles from './Segment.module.css';
import {FlightType} from '../../App';
import {addZero, formatDuration} from '../../utils/helper-functions';


const Segment: React.FC<FlightType> = (props) => {
    if (!props.departureCity) {
        return <div>Loading...</div>
    }


    let depDate = new Date(props.departureDate)
    let depDateStr = `${depDate.getDate()} ${Intl.DateTimeFormat('ru', {month: 'short'}).format(depDate)} ${Intl.DateTimeFormat('ru', {weekday: 'short'}).format(depDate)}`

    let arrDate = new Date(props.arrivalDate)
    let arrDateStr = `${arrDate.getDate()} ${Intl.DateTimeFormat('ru', {month: 'short'}).format(arrDate)} ${Intl.DateTimeFormat('ru', {weekday: 'short'}).format(arrDate)}`

    return (
        <div className={styles.segment}>
            <div className={styles.segment_header}>{props.departureCity.caption}, {props.departureAirport.caption}
                <span> ({props.departureAirport.uid})</span>
                <span> &#8594; </span> {props.arrivalCity.caption}, {props.arrivalAirport.caption}<span> ({props.arrivalAirport.uid})</span>
            </div>
            <div className={styles.greyLine}/>
            <div className={styles.segment_dates}>
                <div>
                    <span>{`${addZero(depDate.getHours())}:${addZero(depDate.getMinutes())}`} </span>
                    <span>{depDateStr}</span>
                </div>
                <div>&#9719; {formatDuration(props.duration)}</div>
                <div>
                    <span>{arrDateStr} </span>
                    <span>{`${addZero(new Date(props.arrivalDate).getHours())}:${addZero(new Date(props.arrivalDate).getMinutes())}`} </span>
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