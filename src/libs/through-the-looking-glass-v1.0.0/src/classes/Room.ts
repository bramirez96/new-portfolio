// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { FeatureDefinition } from "./Feature";
import { ItemDefinition } from "./Item";

/**
 * Instances of the Room class represent a single tile on the Zone map. Each
 * Room is responsible for keeping track of its own features and items. If there
 * are changes made to the state of the room so that it is different from its
 * initial state, those changes need to be stored somehow in their own object
 * within the class, and applied from getters and setters when reading out
 * information from the Room class. These "update" objects will be stored in
 * memory (somehow) in order to allow persisting saved games across sessions.
 */
export default class Room {}

export type RoomID = string;
export type RoomDefinition = {
    /**
     * The text displayed when a room is entered. The definition contains
     * static text, but each Room object's entry text can still change
     * based on certain conditions or player interactions.
     */
    onEnter: string;
    features?: FeatureDefinition[];
    items?: ItemDefinition[];
};
