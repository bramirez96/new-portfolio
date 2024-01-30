// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React, { useContext } from 'react';

export type InputContextProps = {
    isEmpty: boolean;
    isFocused: boolean;
    inputID: string;
    inputRef: React.RefObject<HTMLInputElement>;
};

/**
 * Simple context object with data about the state of the Input component.
 */
export const InputContext = React.createContext<InputContextProps | undefined>(
    undefined
);

export function useInputContext(): InputContextProps {
    const context = useContext(InputContext);

    if (!context) {
        throw new Error(
            'useInputContext must be used in an InputContext Provider.'
        );
    }

    return context;
}
