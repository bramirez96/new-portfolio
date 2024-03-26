// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

export default class Item {
    constructor({}: ItemDefinition) {}

    get inventoryText(): string {
        return `=> `;
    }
}

export type ItemDefinition = {
    /** Display title for the item in your inventory */
    name: string;

    /** Description text for the item in your inventory */
    description: string;

    /** Display text for the item when it's in a Room */
    roomText: string;
};
