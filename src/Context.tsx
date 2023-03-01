import { createContext, ReactNode } from "react";
import { useCommands, UseCommand } from "./hooks/useCommands";
export const GlobalContext = createContext<UseCommand>({} as UseCommand);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
    const { state, handler } = useCommands();
    return (
        <GlobalContext.Provider value={{ state, handler }} >
            {children}
        </GlobalContext.Provider >
    )
}