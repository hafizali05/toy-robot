import styles from './style.module.css';
export function PlaceRobot() {
    return (
        <div className={styles.actionInputContainer}>
            <input type="text" id={styles.row} placeholder="row" />
            <input type="text" id={styles.col} placeholder="col" />
            <select>
                <option disabled selected > -- select facing direction -- </option>
                <option value="easy">East</option>
                <option value="west">West</option>
                <option value="north">North</option>
                <option value="south">South</option>
            </select>
        </div>
    )
}