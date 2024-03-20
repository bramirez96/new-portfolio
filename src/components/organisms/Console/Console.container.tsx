// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import Console from "./Console";
import { ReactNode, useEffect, useState } from "react";
import { ConsoleContainerProps } from "./Console.types";

export default function ConsoleContainer({
    buildConsoleController,
    ...props
}: ConsoleContainerProps) {
    /* Input Prefix Handlers */
    const [inputPrefix, setInputPrefix] = useState<undefined | ReactNode>();

    /* Console Output Handlers */
    const [consoleOutput, setConsoleOutput] = useState<undefined | ReactNode[]>([
        <div>TEST 1</div>,
        <div>TEST 2</div>,
    ]);

    useEffect(() => {
        // Build the console controller on mount, if passed
        buildConsoleController?.({
            setConsoleOutput,
            setInputPrefix,
            appendConsoleOutput: (newOutput) => {
                if (newOutput) {
                    setConsoleOutput((prevOutput = []) => [...prevOutput, ...newOutput]);
                }
            },
        });
    }, [buildConsoleController, setConsoleOutput, setInputPrefix]);

    return <Console inputPrefix={inputPrefix} consoleOutput={consoleOutput} {...props} />;
}
