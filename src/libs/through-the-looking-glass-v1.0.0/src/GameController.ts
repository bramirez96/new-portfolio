// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ConsoleController } from "../../../utils";
import { ReactNode } from "react";
import { GameDiscDefinition } from "./gameTypes";

/**
 * This class should handle everything. It should build maps from JSON and store the
 * World objects in state. It should process input and output from the Console and
 * use the player input to dispatch actions to the various game objects. It should
 * handle saving and loading of game data to persist across sessions (eventually).
 *
 * In this refactor, I'll be moving huge amounts of code from the Player, Room, Item,
 * and Feature classes onto this GameController class, in an attempt at utilizing OOP
 * best practices, as the current Python version has some glaring issues built into
 * its core as a result of the original article I followed for the architecture.
 */
export default class GameController<IOType = ReactNode> {
    public console: ConsoleController<IOType>;

    constructor({ console }: { console: ConsoleController<IOType> }) {
        this.console = console;
    }

    /**
     * Process raw user input strings from the console into game commands.
     */
    handleInput(input?: IOType) {
        if (input) {
            // TODO build proper input handling
            this.console.appendOutput([input]);
        }
    }

    /**
     * This is going to do a lot of heavy lifting! Load the game disc, optionally
     * including save data to persist the player's progress.
     */
    async loadGame(disc: GameDiscDefinition, saveData?: unknown) {}
}
