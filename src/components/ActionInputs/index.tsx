import { ACTIONS, ActionState } from '../../hooks/useCommands';
import { actionList } from '../CommandInput';
import { PlaceRobot } from '../PlaceRobot';
import { PlaceWall } from '../PlaceWall';

const ActionOptions = {
    [ACTIONS.PLACE_ROBOT]: () => <PlaceRobot />,
    [ACTIONS.PLACE_WALL]: () => <PlaceWall />,
    [ACTIONS.REPORT]: () => null
}
export function ActionInputs({ action }: { action: ActionState }) {

    if (actionList.includes(action!)) {
        const ActionComponent = ActionOptions[action!];
        return <ActionComponent />;
    }
    return null;
}

