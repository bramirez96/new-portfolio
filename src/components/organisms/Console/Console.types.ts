// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ReactNode } from "react";
import { ConsoleController } from "../../../utils";

export interface ConsoleProps {
    /**
     * This gets output in the console's input field, to the left of the
     * input cursor. Falls back to default if unset.
     */
    inputPrefix?: ReactNode;

    /**
     * The display contents of the console's output section. Empty if unset.
     */
    consoleOutput?: ReactNode[];

    /**
     * You can return false from the input submit callback if you do not
     * want the input text to be cleared.
     */
    onInputSubmit?: (inputText?: string) => void | false;

    /**
     * `true` by default, will focus the Console input when the component is built
     */
    focusOnLoad?: boolean;
}

export interface ConsoleContainerProps extends ConsoleProps {
    buildConsoleController?: (
        constructorOpts: ConstructorParameters<typeof ConsoleController<ReactNode>>[0]
    ) => void;
}
