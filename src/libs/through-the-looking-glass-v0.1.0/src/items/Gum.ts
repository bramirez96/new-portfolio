// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import Item from "../Item";

export default class Gum extends Item {
    constructor(intro: string) {
        super({
            name: "Gum",
            tag: "gum",
            intro,
            desc: "a single stick of gum",
        });
    }
}
