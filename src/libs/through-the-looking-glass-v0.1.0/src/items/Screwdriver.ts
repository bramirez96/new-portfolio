// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import Item from "../Item";

export default class Screwdriver extends Item {
    constructor(intro = "It's a screwdriver") {
        super({
            name: "Screwdriver",
            tag: "screwdriver",
            intro,
            desc: "this could come in handy",
        });
    }
}
