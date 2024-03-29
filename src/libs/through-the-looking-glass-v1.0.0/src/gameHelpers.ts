// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

/**
 * Return the value if it's a function, or return a new cb returning the value.
 */
export function asFunction<CBType, DataType>(data: DataType) {
    return (typeof data !== "function" ? () => data : data) as CBType;
}

/**
 * Format the input string as an interactive tag. Instead of calling this directly,
 * it's recommended to use the `tag` method below!
 */
export function tag(inputTag: string): string {
    return `>${inputTag}<`.toLocaleLowerCase();
}

/**
 * Allows easily formatting input tag strings in a template literal.
 * @example tag`To the ${'north'} is your living room.`
 */
export function tagged(strings: TemplateStringsArray, ...tags: unknown[]) {
    let tagString = "";

    for (const i in tags) {
        tagString += strings[i] + tag(`${tags[i]}`);
    }

    return tagString + strings.slice(-1);
}
