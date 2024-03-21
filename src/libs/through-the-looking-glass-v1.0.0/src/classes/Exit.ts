// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import Room, { RoomID } from "./Room";
import GameController from "../GameController";
import { asFunction } from "../gameHelpers";
import Key from "./Key";

// TODO this class is a mess, clean it up
export default class Exit {
    public targetRoomID: RoomID;
    public displayText: ExitCallback<string>;
    public blocked: ExitCallback<boolean>;
    public locked: ExitCallback<boolean>;
    public onExit?: ExitCallback<void>;

    private readonly keyCode?: string;

    /**
     * Build an instance of the Exit class based on the given definition.
     */
    constructor({
        id,
        displayText,
        locked = false,
        blocked = false,
        keyCode,
        onExit,
    }: ExitDefinition) {
        this.targetRoomID = id;
        this.keyCode = keyCode;
        this.onExit = onExit;

        // Convert these to functions on the class if they're passed as raw data
        this.displayText = asFunction(displayText);
        this.locked = asFunction(locked);
        this.blocked = asFunction(blocked);
    }

    /**
     * Pass in a Key object, returns true if the Key is correct for the Exit.
     */
    public isCorrectKey(key: Key): boolean {
        return key.codeMatches(this.keyCode as string);
    }
}

export type ExitCallback<ReturnType> = (
    exit: Exit,
    currentRoom: Room,
    targetRoom: Room,
    game: GameController
) => ReturnType;
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
    locked?: boolean | ExitCallback<boolean>;

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
