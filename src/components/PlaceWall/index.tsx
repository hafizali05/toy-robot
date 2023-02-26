import styles from './style.module.css';
export function PlaceWall() {
    return (
        <div className={styles.actionInputContainer}>
            <input type="text" id={styles.row} placeholder="row" />
            <input type="text" id={styles.col} placeholder="col" />
        </div>
    )
}