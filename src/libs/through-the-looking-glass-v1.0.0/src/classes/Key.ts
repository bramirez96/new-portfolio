// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import Item, { ItemDefinition } from "./Item";

export default class Key extends Item {
    private readonly keyCode: string;

    // TODO add/fix
    constructor({ keyCode, ...itemDefinition }: KeyDefinition) {
        super(itemDefinition);

        this.keyCode = keyCode;
    }

    public codeMatches(keyCode: string): boolean {
        return keyCode === this.keyCode;
    }
}

export type KeyDefinition = ItemDefinition & {
    keyCode: string;
};
