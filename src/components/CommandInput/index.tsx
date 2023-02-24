import { useCommands } from "../../hooks/useCommands"
import styles from './style.module.css'
export const CommandInput = () => {
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
                <div>
                    <select>
                        <option value="PLACE_ROBOT">Place robot</option>
                        <option value="PLACE_WALL">Place wall</option>
                        <option value="REPORT">Report</option>
                    </select>
                    <button onClick={handler.execute}>Run</button>
                </div>
            </div>
            <hr />
            <div className={styles.navigateContainer}>
                <h1>Navigate</h1>
                <span>Use below controls to change the direction of robot and click move button to step forward</span>
                <br />
                <div>
                    <button>Left</button>
                    <button>Move ^</button>
                    <button>Right</button>
                </div>
            </div>
        </div>
    )
}
