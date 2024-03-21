// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ZoneDefinition, ZoneID } from "./classes";

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
