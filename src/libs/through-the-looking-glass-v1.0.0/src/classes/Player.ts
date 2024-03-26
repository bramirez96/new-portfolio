// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ConditionMap } from "../gameTypes";
import Item from "./Item";

export const PLAYER_CONDITIONS = {
    AGORAPHOBIC: "agoraphobic",
};

export default class Player {
    private readonly inventory: Item[] = [];

    private readonly conditions: ConditionMap = {
        // Player is initialized with agoraphobia by default.
        // TODO move this condition to a playerConditions property on the Zone/disc
        //  so this class can be reused for different games if we wanted
        [PLAYER_CONDITIONS.AGORAPHOBIC]: true,
    };

    hasCondition(condition: string): boolean {
        return this.conditions[condition] ?? false;
    }

    setCondition(condition: string, state: boolean): void {
        this.conditions[condition] = state;
    }

    viewInventory(): void {
        // TODO print out items
    }
}
