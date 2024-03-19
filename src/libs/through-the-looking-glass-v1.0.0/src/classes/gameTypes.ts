// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import GameController from "../GameController";
import Player from "./Player";
import Zone from "./Zone";

/**
 * Every callback, no matter what it relates to, could possibly require access
 * to the Game, Player, and Zone objects. This object should get passed as the
 * final argument to every game callback we define.
 */
export type GameCallbackState = {
    game: GameController;
    zone: Zone;
    player: Player;
};

/**
 * Conditions should be tracked by creating string constants for reference keys
 * and mapping them to boolean values indicating the state of the condition.
 */
export type ConditionMap = Record<string, boolean>;
