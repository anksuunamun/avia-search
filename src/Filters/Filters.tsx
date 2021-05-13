import React from 'react';
import styles from './Filters.module.css';

const Filters: React.FC<any> = (props) => {
    return (
        <div>
            <div className={styles.filterBlock}>
                <h4>Сортировать</h4>
                <input type="radio" id={'filter1'}/>
                <label htmlFor="filter1'"> - по возрастанию цены</label>
                <input type="radio" id={'filter2'}/>
                <label htmlFor="filter2"> - по убыванию цены</label>
                <input type="radio" id={'filter3'}/>
                <label htmlFor="filter3"> - по времени в пути</label>
            </div>
            <div className={styles.filterBlock}>
                <h4>Фильтровать</h4>
                <input type="checkbox" id={'filter4'}/>
                <label htmlFor="filter4"> - 1 пересадка</label>
                <input type="checkbox" id={'filter5'}/>
                <label htmlFor="filter5"> - без пересадок</label>
            </div>
            <div className={styles.filterBlock}>
                <h4>Цена</h4>
                <label htmlFor="filter6">От </label>
                <input type="text" defaultValue={0} id={'filter6'}/>
                <label htmlFor="filter7">До </label>
                <input type="text" defaultValue={10000} id={'filter7'}/>
            </div>
            <div className={styles.filterBlock}>
                <h4>Авиакомпании</h4>
                <input type="checkbox" id={'filter8'}/>
                <label htmlFor="filter8"> - LOT Polish Airlines</label>
                <input type="checkbox" id={'filter9'}/>
                <label htmlFor="filter9"> - Аэрофлот - росс...</label>
            </div>

        </div>
    )
}

export default Filters;