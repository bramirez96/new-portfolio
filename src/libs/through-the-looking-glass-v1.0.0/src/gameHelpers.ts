// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

/**
 * This function correctly formats the input tags for interactive elements, to ensure
 * that we're formatting them consistently for the best Player experience.
 */
export function tag(inputTag: string): string {
    return `>${inputTag}<`;
}
