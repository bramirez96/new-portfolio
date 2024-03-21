// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import Room, { RoomDefinition, RoomID } from "./Room";
import { ConditionMap } from "../gameTypes";

/**
 * The Zone class contains a fully-loaded section of the game world. It should
 * contain a map with a 2d matrix of rooms, as well as information about what
 * those rooms contain, what rooms have been visited, what items and features
 * the player has interacted with in those rooms, and any other relevant info.
 *
 * Think of the Zone as like a tabletop map, and the GameController builds it
 * out and plays the game on top of it. For instance, the Zone doesn't have
 * access to the player's location or inventory, but the GameController does!
 *
 * Zone constructors should take in two pieces of data to build from:
 * - first, the Zone builder data stored in the JSON Zone definition file
 * - second, the player's save data (not yet implemented)
 */
export default class Zone {
    private readonly conditions: ConditionMap;
    private readonly rooms: Record<RoomID, Room> = {};

    /**
     * Build an instance of the Zone class based on the given definition.
     */
    constructor({ rooms, conditions }: ZoneDefinition) {
        // Store the conditions map directly, it's the same format.
        this.conditions = conditions;

        // Iterate over the rooms in the definition, build and store internally
        for (const roomDefinition of rooms) {
            this.rooms[roomDefinition.id] = new Room(roomDefinition);
        }
    }

    hasCondition(condition: string): boolean {
        return this.conditions[condition] ?? false;
    }

    setCondition(condition: string, state: boolean): void {
        this.conditions[condition] = state;
    }
}

export type ZoneID = number;
export type ZoneDefinition = {
    /**
     * A 2D matrix positionally mapping the Zone's rooms.
     * TODO it looks like this map will be display-only? Since the world is
     *  no longer generated by reading the tiles positionally, effectively
     *  this will just become a display layer. That said, it's still very
     *  important that the rooms and exits are built with a map in mind so
     *  that it can be displayed in a way that makes sense.
     */
    map: (RoomID | null)[][];

    /**
     * The ID of the Player's starting Room in this Zone.
     */
    startingRoom: RoomID;

    /**
     * An object mapping Zone conditions to their starting boolean value.
     */
    conditions: Record<string, boolean>;

    /**
     * A key/value store mapping Room IDs to their respective definitions.
     */
    rooms: RoomDefinition[];
};
