// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ConsoleController } from "../../../utils";
import { ReactNode } from "react";
import { GameDiscDefinition } from "./gameTypes";
import Action from "./classes/Action";
import { Player, RoomID, Zone } from "./classes";

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

    private availableActions: Action[] = [];

    /**
     * We store one Zone in memory at any given time, the player's current Zone.
     * The Zone class stores all of the Room information.
     */
    private currentZone?: Zone;
    /** Keep track of the Player's current Room in the Zone */
    private currentRoomID?: RoomID;

    /**
     * Build an instance of the GameController class, linking it to a ConsoleController
     * to handle all of the game's I/O directly from this top-level controller.
     */
    constructor({ console }: { console: ConsoleController<IOType> }) {
        this.console = console;
    }

    /**
     * Store a reference to the Player object on this top-level controller.
     * @private
     */
    private _player?: Player;

    /**
     * Assume the Player has been created by the time the getter is called.
     */
    public get player() {
        return this._player as Player;
    }

    /**
     * Assume the Zone is set when the getter is called.
     */
    public get zone() {
        return this.currentZone as Zone;
    }

    /**
     * This is going to do a lot of heavy lifting! Load the game disc, optionally
     * including save data to persist the player's progress.
     *
     * TODO handle save game data LATER
     */
    async loadGame(disc: GameDiscDefinition /*, saveData?: unknown*/) {
        // TODO loading message? Maybe?
        /**
         * TO LOAD THE GAME:
         * 1. Load the disc information
         * 2. Build the world map for the starting Zone
         *      2a. Build a Room instance for each Room in the Zone
         *      2b. These rooms are connected via their Exits
         *      2c. Store the starting zone
         */
        const zoneDef = await disc.loadZone(0);

        this.currentZone = new Zone(zoneDef);
        this.currentRoomID = zoneDef.startingRoom;

        /**
         * Now that everything has been built in memory for our Zone, we can actually
         * begin the I/O loop that makes up the actual gameplay.
         * 1. Output some message to the Console to let the user know we're ready
         * 2. Begin to process user input? Is it really that easy??
         */
        this.console.updateOutput(disc.welcomeMessage as IOType[]);
    }

    /**
     * Process raw user input strings from the console into game commands.
     */
    handleInput(input?: IOType) {
        if (input) {
            // TODO build proper input handling
        }
    }
}
