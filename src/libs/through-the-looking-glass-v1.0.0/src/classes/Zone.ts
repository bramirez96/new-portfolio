// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { RoomDefinition, RoomID } from "./Room";

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
export default class Zone {}

export type ZoneDefinition = {
    /**
     * A 2D matrix positionally mapping the Zone's rooms.
     */
    map: (RoomID | null)[][];

    /**
     * A key/value store mapping Room IDs to Room definitions.
     */
    rooms: Record<RoomID, RoomDefinition>;
};
