import React from 'react';
import Segment from './Segment/Segment';
import {FlightsType, FlightType} from '../App';
import styles from './Flight.module.css'


const Flight: React.FC<FlightsType> = (props) => {
    const segments = props.routes.map((item: FlightType) => <Segment {...item}/>)

    if (!props.routes) {
        return <div>Loading...</div>
    }
    return (
        <div className={styles.flight}>
            <div className={styles.flight_header}>
                <div>{props.flightCaption}</div>
                <div>
                    <span>{props.price} ₽</span>
                    <span>Стоимость для одного взрослого пассажира</span>
                </div>
            </div>
            <div className={styles.flight_segments}>
                {segments}
            </div>
            <button>ВЫБРАТЬ</button>
        </div>
    )
}

export default Flight