// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { FeatureDefinition } from "./Feature";
import Item, { ItemDefinition } from "./Item";
import Exit, { ExitDefinition } from "./Exit";
import { Feature } from "./index";
import GameController from "../GameController";
import { asFunction } from "../gameHelpers";
import Action from "./Action";
import ActionMap from "./ActionMap";
import { ViewInventoryAction } from "./actions";

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
    public roomID: RoomID;
    public onEnter: (gameController: GameController) => string;
    private visited = false;
    private readonly exits: Exit[] = [];
    private readonly items: Item[] = [];
    private readonly features: Feature[] = [];

    /**
     * Build an instance of the Room class based on the given definition.
     */
    constructor({ id, exits, features, items, onEnter }: RoomDefinition) {
        this.roomID = id;
        this.onEnter = (gameController: GameController) => {
            const enterText = (asFunction(onEnter) as RoomCallback<string>)(this, gameController);
            this.visited = true;
            return enterText;
        };

        for (const exitDefinition of exits) {
            this.exits.push(new Exit(exitDefinition));
        }

        if (items) {
            for (const { type: ItemType, definition } of items) {
                this.items.push(new ItemType(definition));
            }
        }

        if (features) {
            for (const { type: FeatureType, definition } of features) {
                this.features.push(new FeatureType(definition));
            }
        }
    }

    /** If true, this Room has been visited at least once. */
    get isVisited() {
        return this.visited;
    }

    /** Get a collection of all actions currently available in the room */
    public getAvailableActions(gameController: GameController): Map<string, Action> {
        const actions = new ActionMap();

        // Always add the CheckInventory and ViewHelp actions
        actions.register(new ViewInventoryAction(gameController));

        return actions;
    }
}

export type RoomID = string;
export type RoomCallback<ReturnType> = (room: Room, game: GameController) => ReturnType;

export type RoomDefinition = {
    /**
     * The ID of the Room. Should be completely unique to this Zone and defined as
     * a constant at the top of your Zone definition file.
     */
    id: RoomID;

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
    features?: {
        type: typeof Feature;
        definition: FeatureDefinition;
    }[];

    /**
     * A list of interactive Items in the Room. Anything that the Player can
     * pick up and move to their inventory should be an Item.
     */
    items?: {
        type: typeof Item;
        definition: ItemDefinition;
    }[];
};
