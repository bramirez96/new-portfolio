// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import GameController from "./GameController";
import Player from "./classes/Player";
import Zone, { ZoneDefinition } from "./classes/Zone";
import { ReactNode } from "react";
import { ZoneID } from "../../through-the-looking-glass-v0.1.0/src/GameController";

/**
 * Every callback, no matter what it relates to, could possibly require access
 * to the Game, Player, and Zone objects. This object should get passed as the
 * final argument to every game callback we define.
 *
 * TODO remove IOType default eventually, and pass it along as needed
 */
export type GameCallbackState<IOType = ReactNode> = {
    game: GameController<IOType>;
    zone: Zone;
    player: Player;
};

/**
 * Conditions should be tracked by creating string constants for reference keys
 * and mapping them to boolean values indicating the state of the condition.
 */
export type ConditionMap = Record<string, boolean>;

/**
 * This is effectively how we will
 */
export type GameDiscDefinition = {
    loadZone: (zoneID?: ZoneID) => Promise<ZoneDefinition>;
};
