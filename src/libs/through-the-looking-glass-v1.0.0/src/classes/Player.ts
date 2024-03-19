// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ConditionMap } from "./gameTypes";

export const PLAYER_CONDITIONS = {
    AGORAPHOBIC: "agoraphobic",
};

export default class Player {
    private readonly conditions: ConditionMap = {
        // Player is initialized with agoraphobia by default.
        [PLAYER_CONDITIONS.AGORAPHOBIC]: true,
    };

    hasCondition(condition: string): boolean {
        return this.conditions[condition] ?? false;
    }

    setCondition(condition: string, state: boolean): void {
        this.conditions[condition] = state;
    }
}
