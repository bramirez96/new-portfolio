// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { HomeTemplate } from "../../components/templates";
import { Console } from "../../components/organisms";
import { classnames } from "../../libs";

import "./LookingGlass.scss";
import { ConsoleController } from "../../utils";
import { ReactNode, useCallback, useEffect, useState } from "react";

export interface LookingGlassProps {}

export default function LookingGlassContainer(props: LookingGlassProps) {
    const [consoleController, setConsoleController] = useState<ConsoleController<ReactNode>>();

    // Create a callback to build the ConsoleController and save it in state
    const buildConsoleController = useCallback(
        (params: ConstructorParameters<typeof ConsoleController<ReactNode>>[0]) => {
            setConsoleController(new ConsoleController(params));
        },
        []
    );

    // Once the console controller is built, we can then build the GameController
    useEffect(() => {
        if (consoleController) {
        }
    }, [consoleController]);

    return (
        <HomeTemplate>
            <div className={classnames("ui-looking-glass-wrapper")}>
                <Console
                    onInputSubmit={(text) => {
                        alert(`Submitted: ${text}`);
                    }}
                    buildConsoleController={buildConsoleController}
                />
            </div>
        </HomeTemplate>
    );
}
