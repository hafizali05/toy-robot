import styles from './index.module.css';
const styleClass = [styles.blue, styles.red];
const getBackgroundColor = (index: number) => styleClass[index % 2];
export const Board = () => {
    return (
        <div className={styles.parent}>
            {
                Array.from({ length: 25 })
                    .map(
                        (e, index) => <div className={getBackgroundColor(index)} />
                    )
            }
        </div>
    )
}