import { useContext } from 'react';
import { GlobalContext } from '../../Context';
import styles from './style.module.css';

export enum Direction {
    EAST = 'East',
    WEST = 'West',
    NORTH = 'North',
    SOUTH = 'South'
}
export function PlaceRobot() {
    return (
        <div className={styles.actionInputContainer}>
            <input name='row' type="text" id={styles.row} placeholder="row" />
            <input name='col' type="text" id={styles.col} placeholder="col" />
            <select
                name='facing'
                onChange={() => { }}
            >
                <option disabled value={''} > -- select facing direction -- </option>
                {
                    Object.values(Direction).map((direction) => (
                        <option
                            key={direction}
                            value={direction}>
                            {direction}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}