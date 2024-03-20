// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import Room, { RoomID } from "./Room";
import { GameCallbackState } from "../gameTypes";

// TODO this class is a mess, clean it up
export default class Exit {
    public currentRoom: Room;
    public targetRoom: Room;

    private blocked: ExitCallback<boolean>;
    private locked: ExitCallback<boolean>;

    constructor({
        current,
        target,
        locked = false,
        blocked = false,
    }: {
        current: Room;
        target: Room;
        blocked?: boolean | ExitCallback<boolean>;
        locked?: boolean | ExitCallback<boolean>;
    }) {
        this.currentRoom = current;
        this.targetRoom = target;

        this.locked = typeof locked !== "function" ? () => locked : locked;
        this.blocked = typeof blocked !== "function" ? () => blocked : blocked;
    }

    // get isBlocked() {
    //     // TODO read these from existing state somewhere instead of creating new ones
    //     return this.blocked(this, {
    //         game: new GameController(),
    //         player: new Player(),
    //         zone: new Zone(),
    //     });
    // }
    //
    // get isLocked() {
    //     // TODO read these from existing state somewhere instead of creating new ones
    //     return this.locked(this, {
    //         game: new GameController(),
    //         player: new Player(),
    //         zone: new Zone(),
    //     });
    // }
}

export type ExitCallback<ReturnType> = (exit: Exit, gameState: GameCallbackState) => ReturnType;
export type ExitDefinition = {
    /**
     * The ID of the Room that the Exit leads to.
     */
    id: RoomID;

    /**
     * The text describing the exit and provides a hint to the Player for the
     * proper input tag to use. This text gets added at the end of each Room's
     * onEnter text.
     */
    displayText: string | ExitCallback<string>;

    /**
     * If true, the Exit exists, but is blocked for some reason. This is a very
     * general state, and we can really get creative with how we choose to
     * unblock the Exit here. At time of writing, the current idea is that this
     * means "blocked from the other side", but let's see where it goes!
     */
    blocked?: boolean | ExitCallback<boolean>;

    /**
     * If true, the Exit door is locked. All locked doors should be able to be
     * unlocked with a Key, and as such all require the "keyCode" field as well
     * in order to properly function.
     */
    locked?: boolean;

    /**
     * If the Exit is locked, keyCode is required. This code should be unique
     * and match the keyCode of its corresponding Key.
     */
    keyCode?: string;

    /**
     * TODO flesh this out more
     * If passed, add a method that optionally controls exit handling?
     */
    onExit?: ExitCallback<boolean>;
};
