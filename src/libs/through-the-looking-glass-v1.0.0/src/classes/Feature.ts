// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { GameCallbackState } from "../gameTypes";
import Room from "./Room";

export default class Feature {}

export type FeatureDefinition = {
    type: FeatureType;
    interact: FeatureInteractionCB;
};

export type FeatureType = string;

export type FeatureInteractionCB = (
    feature: Feature,
    room: Room,
    gameState: GameCallbackState
) => void;
