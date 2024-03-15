// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import "./Console.scss";
import { MouseEventHandler, useCallback, useRef } from "react";

export interface ConsoleProps {
    onInputSubmit?: (inputText?: string) => void;
}

export default function Console({}: ConsoleProps) {
    // Add handling to focus the input element when any of the console is clicked
    const inputRef = useRef<HTMLDivElement>(null);

    const onConsoleClick = useCallback<MouseEventHandler>(() => {
        inputRef.current?.focus();
    }, [inputRef]);

    return (
        <div className="ui-console" onClick={onConsoleClick}>
            <div className="ui-console-output"></div>
            <div className="ui-console-input-wrapper">
                <div className="ui-console-input-prefix">{">>"}&nbsp;</div>
                <div
                    ref={inputRef}
                    className="ui-console-input"
                    contentEditable
                ></div>
            </div>
        </div>
    );
}
