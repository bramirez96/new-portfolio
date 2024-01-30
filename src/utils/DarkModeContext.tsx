// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React, { useCallback, useContext, useEffect, useState } from 'react';

export interface DarkModeContextProps {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    toggleDarkMode: () => void;
}

export const DarkModeContext = React.createContext<
    DarkModeContextProps | undefined
>(undefined);

export function useDarkModeContext(): DarkModeContextProps {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error(
            'useDarkMode hook must be called from within a DarkModeContext.'
        );
    }

    return context;
}

export function DarkModeProvider({
    children,
    onChange,
    darkMode: _darkModeInput,
}: {
    children?: React.ReactNode;
    darkMode?: boolean;
    onChange?: (darkMode: boolean) => void;
}) {
    // Find the initial dark mode state based on OS settings if not passed in
    if (_darkModeInput === undefined && window.matchMedia !== undefined) {
        const _matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
        _darkModeInput = _matchMedia.matches;
    }

    // Create a boolean state value to track if dark mode is enabled
    // const [darkMode, setDarkMode] = useState(_darkModeInput ?? true);
    const [darkMode, setDarkMode] = useState(true);

    // Simple callback for toggling dark mode based on current state
    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, [setDarkMode]);

    // When the dark mode flag updates, run our change handler with the new value
    useEffect(() => {
        onChange?.(darkMode);
    }, [darkMode, onChange]);

    return (
        <DarkModeContext.Provider
            value={{
                darkMode,
                setDarkMode,
                toggleDarkMode,
            }}
        >
            {children}
        </DarkModeContext.Provider>
    );
}
