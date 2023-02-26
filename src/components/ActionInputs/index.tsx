import React from 'react';
import { ACTIONS, ActionState } from '../../hooks/useCommands';
import { PlaceRobot } from '../PlaceRobot';
import { PlaceWall } from '../PlaceWall';

const ActionOptions = {
    [ACTIONS.PLACE_ROBOT]: () => <PlaceRobot />,
    [ACTIONS.PLACE_WALL]: () => <PlaceWall />,
    [ACTIONS.REPORT]: () => null
}
export function ActionInputs({ action }: { action: ActionState }) {
    console.log("action inputs", action)
    if (action! in ACTIONS) {
        const ActionComponent = ActionOptions[action!];
        return <ActionComponent />;
    }
    return null;
}

