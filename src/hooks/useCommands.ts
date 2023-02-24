import { useRef } from "react"

export function useCommands() {
    const commandInputRef = useRef<HTMLInputElement>(null);
    const execute = () => {

    }
    return {
        state: {},
        ref: { commandInputRef },
        handler: { execute }
    }
}