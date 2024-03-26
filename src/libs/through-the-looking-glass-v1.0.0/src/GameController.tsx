// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ConsoleController } from "../../../utils";
import { ReactNode } from "react";
import { GameDiscDefinition } from "./gameTypes";
import { Player, Room, RoomID, Zone } from "./classes";

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
    /**
     * Store a reference to the Player object on this top-level controller.
     */
    public player: Player;
    /**
     * If true, ignore the next input, then unpause.
     */
    private paused: boolean = false;
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
        this.player = new Player();
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
        this.pause();
    }

    /**
     * Process raw user input strings from the console into game commands.
     */
    handleInput(input?: string) {
        // TODO reconsider this pause methodology
        if (this.paused) {
            // If paused, ignore the input, reset the input prefix, and unpause
            this.paused = false;
            this.console.updatePrefix();

            const currentRoom = this.getCurrentRoom();
            const roomEnterText = currentRoom.onEnter(this as unknown as GameController);

            // Output current room text
            this.console.updateOutput([roomEnterText, <br />] as IOType[]);
        } else if (input) {
            // TODO build proper input handling
            const currentRoom = this.getCurrentRoom();
            // TODO fix this typing issue
            const roomActions = currentRoom?.getAvailableActions(this as unknown as GameController);

            // Check if the passed-in input matches any available actions
            if (roomActions && roomActions?.has(input)) {
                roomActions.get(input)?.doAction();
            } else {
                this.appendOutput("You're not sure how you'd do that...");
            }
        }
    }

    /**
     * TODO this helper exists to bandaid the awkward typing, fix it
     */
    appendOutput(newOutput: ReactNode) {
        this.console.appendOutput(newOutput as IOType[]);
    }

    /**
     * Pause input, optionally with a message. While input is paused, the next input
     * received is ignored. After ignoring the input, the input prefix will reset to
     * an empty string and the console will un-pause, allowing further inputs.
     *
     * TODO fix this typing issue
     */
    pause(message: IOType = "" as IOType): void {
        this.console.updatePrefix(message);
        this.paused = true;
    }

    public getRoom(roomID: RoomID): Room | undefined {
        return this.zone.getRoom(roomID);
    }

    public getCurrentRoom() {
        return this.getRoom(this.currentRoomID as RoomID) as Room;
    }
}