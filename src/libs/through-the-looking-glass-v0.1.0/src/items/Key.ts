// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import Item, { ItemProps } from "../Item";

export default class Key extends Item {
    // A unique ID matching the key to a door
    public code: string;

    constructor({
        name,
        tag = "key",
        desc,
        intro,
        code,
    }: ItemProps & { code: string }) {
        super({
            name,
            tag,
            desc,
            intro,
        });

        this.code = code;
    }
}
