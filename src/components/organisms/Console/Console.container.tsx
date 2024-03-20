// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import Console from "./Console";
import { ConsoleContext } from "./Console.context";
import { useCallback, useState } from "react";
import { ConsoleProps } from "./Console.types";

const DEFAULT_CONSOLE_INPUT_PREFIX = ">> ";

export default function ConsoleContainer(props: ConsoleProps) {
    const [inputPrefix, setInputPrefix] = useState(DEFAULT_CONSOLE_INPUT_PREFIX);

    const resetInputPrefix = useCallback(() => {
        setInputPrefix(DEFAULT_CONSOLE_INPUT_PREFIX);
    }, [setInputPrefix]);

    return (
        <ConsoleContext.Provider
            value={{
                inputPrefix: inputPrefix,
                setInputPrefix: setInputPrefix,
                resetInputPrefix: resetInputPrefix,
            }}
        >
            <Console {...props} />
        </ConsoleContext.Provider>
    );
}
