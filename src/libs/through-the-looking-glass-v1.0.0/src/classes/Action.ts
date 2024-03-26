// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

export default class Action<MethodArgs extends unknown[] = unknown[]> {
    public doAction: () => void;

    private hotkeys: string;

    constructor(hotkeys: string, method: (...args: MethodArgs) => void, ...methodArgs: MethodArgs) {
        this.hotkeys = hotkeys;
        this.doAction = () => {
            console.log("HIT DO ACTION");
            method(...methodArgs);
        };
    }

    registerTo(actionMap: Map<string, Action>) {
        for (const hotkey of this.hotkeys.split("|")) {
            actionMap.set(hotkey, this);
        }
    }
}
