// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import "./Console.scss";
import { KeyboardEventHandler, MouseEventHandler, useCallback, useRef } from "react";
import { ConsoleProps } from "./Console.types";
import { KeyEventHelpers } from "../../../utils";

export default function Console({ onInputSubmit }: ConsoleProps) {
    const inputRef = useRef<HTMLDivElement>(null);

    // Focus the Console input element when any part of the console is clicked
    const onConsoleClick = useCallback<MouseEventHandler>(() => {
        inputRef.current?.focus();
    }, [inputRef]);

    // Custom keydown event handler to run our submit method on "Enter" key press
    const onKeyDown = useCallback<KeyboardEventHandler>(
        (evt) => {
            if (evt.key === KeyEventHelpers.KEY.ENTER) {
                // Prevent default "Enter" behavior
                evt.stopPropagation();
                evt.preventDefault();

                if (inputRef.current) {
                    // Run our passed-in submit handler!
                    const inputText = inputRef.current.innerText ?? "";
                    onInputSubmit?.(inputText);

                    // Clear the input text
                    inputRef.current.innerText = "";
                }
            }
        },
        [onInputSubmit, inputRef]
    );

    return (
        <div className="ui-console" onClick={onConsoleClick}>
            <div className="ui-console-output"></div>
            <div className="ui-console-input-wrapper">
                <div className="ui-console-input-prefix">{">>"}&nbsp;</div>
                <div
                    ref={inputRef}
                    onKeyDown={onKeyDown}
                    className="ui-console-input"
                    contentEditable
                ></div>
            </div>
        </div>
    );
}
