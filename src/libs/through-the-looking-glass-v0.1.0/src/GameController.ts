// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { FeatureID, FeatureInformation } from "./Feature";

export default class GameController {
    public playerX: number;
    public playerY: number;

    private map: GameMapMatrix;

    /**
     * TODO we need to be able to load data from some kind of save state to populate
     *  the GameController class with the relevant information about the player and
     *  the state of the World. Could be tricky to get that all right!
     */
    constructor({
        zone = 0, // default to the tutorial zone
    }: {
        zone?: ZoneID;
    }) {
        const {
            map,
            rooms,
            startingLocation: [startingX, startingY],
        } = this.LoadZoneMap(zone);

        this.map = map;
        this.playerX = startingX;
        this.playerY = startingY;
    }

    // TODO load the world map for the zone with the given ID (somehow)
    // TODO probably move this out of the GameController class into a helper
    private LoadZoneMap(zone: ZoneID): ZoneInformation {
        return {
            map: [[], []],
            rooms: {},
            startingLocation: [0, 0],
        };
    }
}

export type ZoneInformation = {
    map: GameMapMatrix;
    rooms: Record<RoomID, RoomInformation>;
    startingLocation: [number, number];
};

export type RoomInformation = Interactive<{
    type: RoomTypes;
    features: Record<FeatureID, FeatureInformation>;
    items: Record<ItemID, ItemInformation>;
}>;

export type ItemInformation = Interactive<{}>;

export type Interactive<OtherProps = {}> = {
    tag?: string;
    intro?: InteractionText;
    desc?: InteractionText;
} & OtherProps;

export type InteractionText = string | string[];

export type ZoneID = number;
export type RoomID = string;
export type ItemID = string;

export type RoomTypes = "ComboRoom" | "LockedRoom" | "EventRoom";

// The game map is stored as an array of arrays, a 2D matrix of connected rooms
export type GameMapMatrix = string[][];
