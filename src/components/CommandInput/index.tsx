import { ACTIONS, useCommands } from "../../hooks/useCommands"
import { ActionInputs } from "../ActionInputs";
import styles from './style.module.css'
export function CommandInput() {
    const { state, handler, ref } = useCommands();
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
                <form action="">
                    <select
                        defaultValue={''}
                        onChange={handler.handleActionChange}>
                        <option disabled value={''} > -- select an action -- </option>
                        <option value={ACTIONS.PLACE_ROBOT}>Place robot</option>
                        <option value={ACTIONS.PLACE_WALL}>Place wall</option>
                        <option value={ACTIONS.REPORT}>Report</option>
                    </select>
                    <ActionInputs />
                    <button onClick={handler.execute}>Run</button>
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
