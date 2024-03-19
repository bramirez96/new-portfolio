// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

export type ItemProps = {
    name: string;
    tag: string;
    desc: string;
    intro: string;
};

/**
 * Items are interactive elements of the world that can be picked up
 * and placed in the player's inventory. Items can be found in rooms
 * and in features.
 */
export default class Item {
    public name: string;
    public tag: string;
    public desc: string;
    public intro: string;

    constructor({ name, tag, desc, intro }: ItemProps) {
        this.name = name;
        this.tag = tag;
        this.desc = desc;
        this.intro = intro;
    }
}
