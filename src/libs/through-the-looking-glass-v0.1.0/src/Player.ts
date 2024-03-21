// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import Room from "./Room";
import ConsoleHelpers from "./ConsoleHelpers";
import Item from "./Item";
import Key from "./items/Key";

export default class Player {
    public hp: number;
    public inventory: Item[];

    private victory = false;

    private zone: number;
    private x: number;
    private y: number;

    constructor({ zone = 1 }: { zone: number }) {
        // TODO load the proper Zone into game state based on the given key.
        // TODO get the starting coordinates from the Zone info.
        this.zone = 1;
        this.x = 0;
        this.y = 0;

        // TODO load inventory and hp based on save state.
        this.inventory = [];
        this.hp = 100;
    }

    /**
     * This is the main action dispatching method for the Player class, which
     * in essence is the main game controller. All actions are on the Player.
     */
    doAction(action: Function, options = {}) {
        const actionMethod = this[action.name as keyof this] ?? undefined;
        if (typeof actionMethod === "function") {
        }
    }

    /**
     * This method moves the player to a different room on the map.
     *
     * TODO I think a lot of this should move to a different class, like a Map
     *  or Game class or something, take a lot of the code out of Player.
     */
    move(dx: MoveActionValues, dy: MoveActionValues, room: Room) {
        // TODO possibly move this logic?
        if (room.isLocked()) {
            if (room.counter === 0) {
                // First interaction, alert the player that the door is locked.
                room.increment();
                ConsoleHelpers.Pause("The door is locked.");
            } else {
                // Further interactions, give slightly more information.
                ConsoleHelpers.Pause("You need to unlock the door.");
            }

            // Return false to indicate that the move failed.
            return false;
        }
    }

    moveNorth(room: Room) {
        if (this.move(0, -1, room)) {
            ConsoleHelpers.Pause("You head north...");
        }
    }

    moveEast(room: Room) {
        if (this.move(1, 0, room)) {
            ConsoleHelpers.Pause("You head east...");
        }
    }

    moveSouth(room: Room) {
        if (this.move(0, 1, room)) {
            ConsoleHelpers.Pause("You head south...");
        }
    }

    moveWest(room: Room) {
        if (this.move(-1, 0, room)) {
            ConsoleHelpers.Pause("You head west...");
        }
    }

    /**
     * Attempt to unlock the door of the given room.
     */
    unlockDoor(room: Room) {
        if (room.isLocked()) {
            let hasKey = false;

            for (const item of this.inventory) {
                if (item instanceof Key && item.code === room.code) {
                }
            }
        } else {
            ConsoleHelpers.Pause("The door is not locked.");
        }
    }
}

type MoveActionValues = -1 | 0 | 1;
