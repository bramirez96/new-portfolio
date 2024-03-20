// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ZoneDefinition } from "./classes";

/**
 * Create a dynamic import map that lets us lazy load the Zone information as needed.
 */
const ZONE_MAP = {
    0: () => import("./zones/Z00_Tutorial/Z00.definition"),
};

/**
 * Simple type guard method to make sure that we have a matching definition for the
 * Zone with the input number in our ZONE_MAP object.
 */
function zoneIsDefined(zoneNumber: number): zoneNumber is keyof typeof ZONE_MAP {
    return ZONE_MAP[zoneNumber as keyof typeof ZONE_MAP] !== undefined;
}

/**
 * Load the Zone with the given number. If the Zone is not defined, or the definition is
 * missing in our ZONE_MAP object, will throw an error.
 */
export default function loadZone(zoneNumber: number = 0): Promise<ZoneDefinition> {
    // If we don't have a definition for the requested Zone, throw an error.
    if (!zoneIsDefined(zoneNumber)) {
        throw new Error(`Could not load Zone #${zoneNumber}. Missing definition.`);
    }

    // Otherwise, return the definition (have to cast because of the dynamic import)
    return ZONE_MAP[zoneNumber]() as unknown as Promise<ZoneDefinition>;
}
