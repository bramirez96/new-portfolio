// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { FeatureDefinition } from "./Feature";
import { ItemDefinition } from "./Item";
import { GameCallbackState } from "./gameTypes";
import { ExitDefinition } from "./Exit";

/**
 * Instances of the Room class represent a single tile on the Zone map. Each
 * Room is responsible for keeping track of its own Features and Items. If there
 * are changes made to the state of the Room so that it is different from its
 * initial state, those changes need to be stored somehow in their own object
 * within the class, and applied from getters and setters when reading out
 * information from the Room class. These "update" objects will be stored in
 * memory (somehow) in order to allow persisting saved games across sessions.
 */
export default class Room {
    private visited = false;

    /** If true, this Room has been visited at least once. */
    get isVisited() {
        return this.visited;
    }
}

export type RoomID = string;
export type RoomCallback<ReturnType> = (
    room: Room,
    gameState: GameCallbackState
) => ReturnType;

export type RoomDefinition = {
    /**
     * The text displayed when a Room is entered. You can pass a callback to
     * add handling for when a room is entered
     */
    onEnter: string | RoomCallback<string>;

    /**
     * A list of exits from the Room, each with their own direction input
     * tag, display text, and target Room ID.
     */
    exits: ExitDefinition[];

    /**
     * A list of interactive Features in the Room. Anything that the Player
     * can interact with but not pick up should be a Feature.
     */
    features?: FeatureDefinition[];

    /**
     * A list of interactive Items in the Room. Anything that the Player can
     * pick up and move to their inventory should be an Item.
     */
    items?: ItemDefinition[];
};
