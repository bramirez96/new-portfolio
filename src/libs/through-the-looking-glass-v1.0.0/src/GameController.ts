// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Player, RoomID } from "./classes";
import loadZone from "./loadZone";
import { ZoneID } from "../../through-the-looking-glass-v0.1.0/src/GameController";

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
export default class GameController {
    public player?: Player;

    // TODO figure out the best way to store these
    private currentZone: ZoneID;
    private currentRoom?: RoomID;

    /**
     * This constructor has a lot of heavy lifting to do. Something like this:
     * - First, load any save data we can find --> TODO
     * - Then, load the proper Zone data (use Zone from save data, default to tutorial)
     * - Build the Player class with the save data, applying defaults from the Zone definition
     * - Build each Room in the Zone with the save data, applying defaults from Zone definition
     *
     * TODO this needs a lot of changes
     */
    constructor({ _zone = 0, _room }: { _zone?: ZoneID; _room?: RoomID } = {}) {
        this.currentZone = _zone;
        this.currentRoom = _room;

        this.init();
    }

    init() {
        // Lazy load our Zone data
        loadZone(this.currentZone).then((_zoneDef) => {
            // Default to the Zone starting room if unset
            this.currentRoom ??= _zoneDef.startingRoom;
        });
    }
}
