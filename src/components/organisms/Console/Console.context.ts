// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React, { Dispatch, SetStateAction, useContext } from "react";

export type ConsoleContextProps = {
    inputPrefix: string;
    setInputPrefix: Dispatch<SetStateAction<string>>;
    resetInputPrefix: () => void;
};

export const ConsoleContext = React.createContext<
    ConsoleContextProps | undefined
>(undefined);

export function useConsoleContext(): ConsoleContextProps {
    const context = useContext(ConsoleContext);

    if (!context) {
        throw new Error(
            "useConsoleContext must be used in a ConsoleContext Provider."
        );
    }

    return context;
}
