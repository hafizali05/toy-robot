import { ACTIONS } from '../../hooks/useCommands';
import { PlaceRobot } from '../PlaceRobot';
import { PlaceWall } from '../PlaceWall';
import styles from './style.module.css'
const ActionOptions = {
    [ACTIONS.PLACE_ROBOT]: PlaceRobot,
    [ACTIONS.PLACE_WALL]: PlaceWall,
}
export function ActionInputs() {
    const ActionComponent = ActionOptions[ACTIONS.PLACE_ROBOT];
    return <ActionComponent />
}

