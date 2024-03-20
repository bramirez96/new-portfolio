// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ReactNode, useCallback, useEffect, useState } from "react";
import { ConsoleController } from "./index";
import GameController from "../libs/through-the-looking-glass-v1.0.0/src/GameController";
import { ConsoleContainerProps } from "../components/organisms/Console/Console.types";
import { GameDiscDefinition } from "../libs/through-the-looking-glass-v1.0.0/src/gameTypes";

export type ConsoleControllerBuildCB = (
    params: ConstructorParameters<typeof ConsoleController<ReactNode>>[0]
) => void;

export type ConsoleInputSubmitCB = (inputText?: string) => void;

export default function useGameController(
    gameDisc: GameDiscDefinition
): [gameController: GameController<ReactNode> | undefined, consoleProps: ConsoleContainerProps] {
    const [consoleController, setConsoleController] = useState<ConsoleController<ReactNode>>();
    const [gameController, setGameController] = useState<GameController<ReactNode>>();

    // Create a callback to build the ConsoleController and save it in state
    const buildConsoleController = useCallback<ConsoleControllerBuildCB>((params) => {
        setConsoleController(new ConsoleController(params));
    }, []);

    // Callback to pass submitted Console input text to the GameController for processing
    const onInputSubmit = useCallback<ConsoleInputSubmitCB>(
        (inputText) => {
            gameController?.handleInput(inputText);
        },
        [gameController]
    );

    // Once the console controller is built, we can then build the GameController
    useEffect(() => {
        if (consoleController) {
            // TODO what else needs to go in the controller constructor?
            setGameController(
                new GameController({
                    console: consoleController,
                })
            );
        }
    }, [consoleController]);

    return [gameController, { onInputSubmit, buildConsoleController }];
}
