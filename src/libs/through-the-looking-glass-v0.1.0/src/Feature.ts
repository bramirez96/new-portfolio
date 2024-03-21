// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { InteractionText, Interactive, ItemID } from "./GameController";
import Item from "./Item";
import ConsoleHelpers from "./ConsoleHelpers";

/**
 * Features are interactive elements of the world that cannot be picked up and placed
 * in your inventory. Features can contain items and possibly other features, such as
 * bookshelves, which are built to contain books (which are features).
 */
export default class Feature {
    public tag: string;
    public intro: InteractionText;
    public desc: InteractionText;
    public items: Record<ItemID, Item>;

    // Count the number of times the feature was interacted with
    public counter: number;

    constructor({ desc, intro, tag, items }: Required<FeatureInformation>) {
        this.intro = intro;
        this.desc = desc;
        this.tag = tag;
        this.items = items;

        // TODO update this to read from save state
        this.counter = 0;
    }

    interact() {
        ConsoleHelpers.Clear();
        ConsoleHelpers.BorderPr(this._getDescription());
        ConsoleHelpers.Pause(); // Pause with no message
    }

    private _getDescription() {
        if (typeof this.desc === "string") {
            return this.desc;
        } else {
            return this.desc[this.counter];
        }
    }
}

export type FeatureID = string;
export type FeatureInformation = Interactive<{
    items?: Record<ItemID, Item>;
}>;
