// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ZoneDefinition } from "./classes/Zone";
import { ZoneID } from "../../through-the-looking-glass-v0.1.0/src/GameController";

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
