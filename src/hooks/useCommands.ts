import { useRef, useState } from "react"

export enum ACTIONS {
    PLACE_ROBOT,
    PLACE_WALL,
    REPORT
}
export function useCommands() {
    const commandInputRef = useRef<HTMLInputElement>(null);
    const [action, setAction] = useState<ACTIONS | null>(null);
    const handleActionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAction(+event.target.value)
    }
    const execute = () => {

    }
    return {
        state: {},
        ref: { commandInputRef },
        handler: { handleActionChange, execute }
    }
}