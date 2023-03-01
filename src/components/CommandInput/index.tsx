import { useContext } from "react";
import { GlobalContext } from "../../Context";
import { ACTIONS, UseCommand } from "../../hooks/useCommands";
import { ActionInputs } from "../ActionInputs";
import styles from './style.module.css';
export const actionList = [ACTIONS.PLACE_ROBOT, ACTIONS.PLACE_WALL, ACTIONS.REPORT];
const countries = [
    { name: "Austria", isoCode: "AT" },
    { name: "United States", isoCode: "US" },
    { name: "Ireland", isoCode: "IE" },
]
export function CommandInput() {
    const { state, handler } = useContext<UseCommand>(GlobalContext);
    console.log('ccomm input', state)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.actionContainer}>
                <h1>Action</h1>
                <span>Available actions to perform are</span>
                <ul>
                    <li>Place robot</li>
                    <li>Place wall</li>
                    <li>Generate report</li>
                </ul>
                <form onSubmit={handler.handleBoardAction}>
                    <select
                        role={'combobox'}
                        value={state.selectedAction ?? ""}
                        id="actionSelector"
                        name="actionList"
                        onChange={handler.handleActionChange}>
                        <option role={'option'} disabled value="">select an action</option>
                        {
                            actionList.map(item => (
                                <option
                                    role={'option'}
                                    key={item}
                                    value={item}>
                                    {item}
                                </option>
                            ))
                        }
                    </select>
                    <ActionInputs action={state.selectedAction} />
                    <button>Run</button>
                </form>
            </div>
            <hr />
            <div className={styles.navigateContainer}>
                <h1>Navigate</h1>
                <span>Use below controls to change the direction of robot and click move button to step forward</span>
                <br />
                <div>
                    <button>Face left</button>
                    <button>Move ahead</button>
                    <button>Face right</button>
                </div>
            </div>
        </div>
    )
}

