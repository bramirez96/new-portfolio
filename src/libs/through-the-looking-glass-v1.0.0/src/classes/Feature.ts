// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import Room from "./Room";
import GameController from "../GameController";

export default class Feature {
    constructor({ interact }: FeatureDefinition) {}
}

export type FeatureDefinition = {
    interact: FeatureInteractionCB;
};

export type FeatureInteractionCB = (feature: Feature, room: Room, game: GameController) => void;
