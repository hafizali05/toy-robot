import classNames from 'classnames';
import { useContext } from 'react';
import { matrix } from '../../contants/matrix';
import { GlobalContext } from '../../Context';
import { UseCommand } from '../../hooks/useCommands';
import { Direction } from '../PlaceRobot';
import { Robot } from '../Robot';
import styles from './style.module.css';
const styleClass = [styles.blue, styles.red];
const rotationDegrees = {
    [Direction.EAST]: '90deg',
    [Direction.WEST]: '270deg',
    [Direction.NORTH]: '0deg',
    [Direction.SOUTH]: '180deg'
}
export const Board = () => {
    const { state, handler } = useContext<UseCommand>(GlobalContext);
    console.log('stat for board', state)
    return (
        <div className={classNames(styles.parent)} data-testid="board">
            {
                matrix.map(
                    ([x, y], index) => {
                        return (
                            <div
                                aria-label={`row ${x} and column ${y}`}
                                key={index}
                                className={classNames([styleClass[index % 2], styles.box])}
                                data-x={x}
                                data-y={y}
                            >
                                <Robot isVisible={state.x === x && state.y === y} facing={state.facing ?? Direction.NORTH} />
                            </div>
                        );
                    }
                )
            }
        </div>
    )
}
