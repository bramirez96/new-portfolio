// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

const DEFAULT_LOCK_STATE = false;

export default class Room {
    public counter = 0;

    /** Increment the count state of the room, useful for Event rooms. */
    public increment() {
        this.counter++;
    }
}

export class LockedRoom extends Room {
    private _roomIsLocked: boolean;
    private code;

    constructor({ isLocked = false }: { isLocked?: boolean }) {
        super();

        this._roomIsLocked = isLocked;
    }

    /** Check if the room is currently locked. */
    public isLocked() {
        return this._roomIsLocked ?? DEFAULT_LOCK_STATE;
    }

    /** Unlock the room. TODO */
    public unlockRoom() {
        this._roomIsLocked = true;
    }
}
