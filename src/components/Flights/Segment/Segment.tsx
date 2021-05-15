import React, {useMemo} from 'react';
import styles from './Segment.module.css';
import {FlightType} from '../../../App';
import {addZero, formatDuration, getFormattedDate} from '../../../utils/helper-functions';


const Segment: React.FC<FlightType> = (props) => {
    if (!props.departureCity) {
        return <div>Loading...</div>
    }

    const depDate = useMemo(() => new Date(props.departureDate), [props.departureDate]);

    const arrDate = useMemo(() => new Date(props.arrivalDate), [props.arrivalDate]);

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
                    <span>{getFormattedDate(depDate)}</span>
                </div>
                <div>&#9719; {formatDuration(props.duration)}</div>
                <div>
                    <span>{getFormattedDate(arrDate)} </span>
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