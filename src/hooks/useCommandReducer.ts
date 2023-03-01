import { Direction } from "../components/PlaceRobot";
import { ACTIONS } from "./useCommands";

export enum GAME_ACTION {
    SELECTED_ACTION,
    PLACE_ROBOT,
    PLACE_WALL,
    REPORT
}
type Action = {
    type: GAME_ACTION.SELECTED_ACTION,
    payload: {
        action: ACTIONS
    }
} |
{
    type: GAME_ACTION.PLACE_ROBOT,
    payload: {
        x: number;
        y: number;
        facing: Direction;
    }
} |
{
    type: GAME_ACTION.PLACE_WALL,
    payload: {
        x: number;
        y: number;
    }
}
    |
{
    type: GAME_ACTION.REPORT,
}
export type State = {
    history: any[],
    x?: number;
    y?: number;
    facing?: Direction;
    selectedAction?: ACTIONS
}
export function globalReducer(state: State, action: Action): State {
    switch (action.type) {
        case GAME_ACTION.SELECTED_ACTION:
            return { ...state, selectedAction: action.payload.action }

        case GAME_ACTION.PLACE_ROBOT:
            return { ...state, ...action.payload }

        case GAME_ACTION.PLACE_WALL:
            return { ...state, ...action.payload }

        default:
            throw new Error();
    }
}