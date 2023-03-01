import { Direction } from '../PlaceRobot';
import styles from './style.module.css';
const rotation = {
    [Direction.EAST]: styles.east,
    [Direction.WEST]: styles.west,
    [Direction.NORTH]: styles.north,
    [Direction.SOUTH]: styles.south,
}
export const Robot = ({ isVisible, facing }: { isVisible: boolean; facing: Direction }) => {
    if (!isVisible) return null;
    return (
        <img src="/robot.svg" alt="robot" width={100} className={(styles.robot, rotation[facing])} />
    )
}