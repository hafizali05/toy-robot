import { FormEvent, useReducer } from "react";
import { Direction } from "../components/PlaceRobot";
import { GAME_ACTION, globalReducer, State, } from "./useCommandReducer";

export enum ACTIONS {
    PLACE_ROBOT = "Place robot",
    PLACE_WALL = "Place wall",
    REPORT = "Report"
}
type CT = Pick<FormEvent<HTMLFormElement>['currentTarget'], 'elements'> & {
    actionList: { value: ACTIONS },
    row: { value: number };
    col: { value: number };
    facing: { value: Direction };
}
export type ActionState = ACTIONS | undefined;
export const initialState = { history: [] };
interface UseCommandHandlers {
    handleActionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    handleBoardAction: (event: FormEvent<HTMLFormElement>) => void;
}
export interface UseCommand {
    state: State;
    handler: UseCommandHandlers;
}
type ReactChangeEvent = React.ChangeEvent<HTMLSelectElement>;
export function useCommands() {
    const [state, dispatch] = useReducer(globalReducer, initialState);
    const handleActionChange = (event: ReactChangeEvent) => {
        dispatch({
            type: GAME_ACTION.SELECTED_ACTION,
            payload: {
                action: event.target.value as ACTIONS
            }
        })
    }
    const actionObj: { [key in ACTIONS]: any } = {
        [ACTIONS.PLACE_ROBOT]: (elements: CT) => {
            dispatch({
                type: GAME_ACTION.PLACE_ROBOT,
                payload: {
                    x: +elements.row.value,
                    y: +elements.col.value,
                    facing: elements.facing.value as Direction
                }
            })
        },
        [ACTIONS.PLACE_WALL]: (elements: CT) => {
            dispatch({
                type: GAME_ACTION.PLACE_WALL,
                payload: {
                    x: +elements.row.value,
                    y: +elements.col.value,
                }
            })
        },
        [ACTIONS.REPORT]: () => {
            dispatch({
                type: GAME_ACTION.REPORT
            })
        }
    }

    const handleBoardAction = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const elements = event.currentTarget.elements as typeof event.currentTarget.elements & {
            actionList: { value: ACTIONS },
            row: { value: number };
            col: { value: number };
            facing: { value: Direction };
        };
        console.log('handleBoardAction', elements.actionList.value)
        actionObj[elements.actionList.value](event.currentTarget.elements)
    };

    return {
        state,
        handler: { handleActionChange, handleBoardAction }
    }
}