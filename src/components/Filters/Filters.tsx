import React, {ChangeEvent} from 'react';
import styles from './Filters.module.css';
import {v1} from 'uuid';
import {CurrentSortType} from '../../App';

type FiltersPropsType = {
    sortByPriceDescendingHandler: () => void
    sortByPriceAscendingHandler: () => void
    sortByTravelTimeHandler: () => void
    filterByStopsCountHandler: (stops: number) => void
    filterByCompanyName: (airLine: string) => void
    airlinesNames: string[]
    currentSort: CurrentSortType
    onCurrentSortHandler: (value: CurrentSortType) => void
    stopsCount: number[]
    min: number
    max: number
    setHighPriceBorderHandler: (value: number) => void
    setLowPriceBorderHandler: (value: number) => void
    airlines: string[]
}

const Filters: React.FC<FiltersPropsType> = (props) => {

    const airlinesFilters = props.airlinesNames.map(name => {
        const id = v1();
        return (
            <label htmlFor={id} key={id}>
                <input type="checkbox"
                       checked={props.airlines.some(a => a === name)}
                       id={id}
                       onChange={() => props.filterByCompanyName(name)}/> - {name}
            </label>
        )
    })

    const onMinChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setLowPriceBorderHandler(+event.currentTarget.value)
    }
    const onMaxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setHighPriceBorderHandler(+event.currentTarget.value)
    }

    return (
        <div className={styles.filtersWrapper}>
            <div className={styles.grayBlock}/>
            <div className={styles.filterBlock}>
                <h4>Сортировать</h4>
                <SortFilter onChange={props.sortByPriceAscendingHandler}
                            id={'priceAscending'}
                            text={' - по возрастанию цены'}
                            currentSort={props.currentSort}/>
                <SortFilter onChange={props.sortByPriceDescendingHandler}
                            id={'priceDescending'}
                            text={' - по убыванию цены'}
                            currentSort={props.currentSort}/>
                <SortFilter onChange={props.sortByTravelTimeHandler}
                            id={'travelTime'}
                            text={' - по времени в пути'}
                            currentSort={props.currentSort}/>
            </div>
            <div className={styles.filterBlock}>
                <h4>Фильтровать</h4>
                <label htmlFor="0"><input type="checkbox"
                                          id={'0'}
                                          checked={props.stopsCount.some(i => i === 1)}
                                          onChange={() => props.filterByStopsCountHandler(1)}/> - 1
                    пересадка</label>
                <label htmlFor="1"><input type="checkbox"
                                          id={'1'}
                                          checked={props.stopsCount.some(i => i === 0)}
                                          onChange={() => props.filterByStopsCountHandler(0)}/> - без
                    пересадок</label>
            </div>
            <div className={styles.filterBlock}>
                <h4>Цена</h4>
                <label htmlFor="filter6">От <input type="number"
                                                   value={props.min}
                                                   onChange={onMinChangeHandler}
                                                   id={'filter6'}/></label>
                <label htmlFor="filter7">До <input type="number"
                                                   value={props.max}
                                                   onChange={onMaxChangeHandler}
                                                   id={'filter7'}/></label>
            </div>
            <div className={styles.filterBlock}>
                <h4>Авиакомпании</h4>
                {airlinesFilters}
            </div>
            <div className={styles.grayBlock}/>
        </div>
    )
}

type SortFilterPropsType = {
    id: string
    onChange: () => void
    text: string
    currentSort: CurrentSortType
}

const SortFilter: React.FC<SortFilterPropsType> = ({id, onChange, text, currentSort}) => {
    return (
        <label htmlFor={id}>
            <input type="radio"
                   id={id}
                   checked={currentSort === id}
                   onChange={() => onChange()}/>
            {text}
        </label>
    )
}

export default Filters;