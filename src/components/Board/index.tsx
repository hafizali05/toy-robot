import classNames from 'classnames';
import { matrix } from '../../contants/matrix';
import styles from './style.module.css';
const styleClass = [styles.blue, styles.red];

const rows = [0, 1, 2, 3, 4];
const columns = [0, 1, 2, 3, 4];


export const Board = () => {
    return (
        <div className={classNames(styles.parent)} data-testid="board">
            {
                matrix.map(
                    ([x, y], index) => (
                        <div
                            aria-label={`row ${x} and column ${y}`}
                            key={index}
                            className={classNames([styleClass[index % 2], styles.box])}
                            data-x={x}
                            data-y={y}
                        >
                            <Robot bol={x === 1 && y === 1} />
                        </div>
                    )
                )
            }
        </div>
    )
}
const Robot = ({ bol }: { bol: boolean }) => {
    if (!bol) return null;
    return (
        <img src="/public/robot.svg" alt="" style={{ position: 'absolute' }} width={100} />
    )
}