import React from 'react';
import styles from './Filters.module.css';

type FiltersPropsType = {
    sortByPriceDescendingHandler: () => void
    sortByPriceAscendingHandler: () => void
    sortByTravelTimeHandler: () => void
    filterByStopsCountHandler: (stops: number) => void
}

const Filters: React.FC<FiltersPropsType> = (props) => {
    return (
        <div className={styles.filtersWrapper}>
            <div className={styles.grayBlock}/>
            <div className={styles.filterBlock}>
                <h4>Сортировать</h4>
                <label htmlFor="filter1'"><input type="radio"
                                                 id={'filter1'}
                                                 onClick={() => props.sortByPriceDescendingHandler()}/> - по возрастанию
                    цены</label>
                <label htmlFor="filter2"><input type="radio"
                                                id={'filter2'}
                                                onClick={() => props.sortByPriceAscendingHandler()}/> - по убыванию цены</label>
                <label htmlFor="filter3"><input type="radio"
                                                id={'filter3'}
                                                onClick={() => props.sortByTravelTimeHandler()}/> - по времени в
                    пути</label>
            </div>
            <div className={styles.filterBlock}>
                <h4>Фильтровать</h4>
                <label htmlFor="filter4"><input type="checkbox"
                                                id={'filter4'}
                                                onClick={() => props.filterByStopsCountHandler(1)}/> - 1
                    пересадка</label>
                <label htmlFor="filter5"><input type="checkbox"
                                                id={'filter5'}
                                                onClick={() => props.filterByStopsCountHandler(0)}/> - без
                    пересадок</label>
            </div>
            <div className={styles.filterBlock}>
                <h4>Цена</h4>
                <label htmlFor="filter6">От <input type="number" defaultValue={0} id={'filter6'}/></label>
                <label htmlFor="filter7">До <input type="number" defaultValue={10000} id={'filter7'}/></label>
            </div>
            <div className={styles.filterBlock}>
                <h4>Авиакомпании</h4>
                <label htmlFor="filter8"><input type="checkbox" id={'filter8'}/> - LOT Polish Airlines</label>
                <label htmlFor="filter9"><input type="checkbox" id={'filter9'}/> - Аэрофлот - росс...</label>
            </div>
            <div className={styles.grayBlock}/>
        </div>
    )
}

export default Filters;