// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

export default class Action {
    constructor(method, name, hotkey, options = {}) {
        this.method = method;
        this.name = name;
        this.hotkey = hotkey;
        this.options = options;
    }
}
