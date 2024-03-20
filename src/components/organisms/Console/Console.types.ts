// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

export interface ConsoleProps {
    /**
     * You can return false from the input submit callback if you do not
     * want the input text to be cleared.
     */
    onInputSubmit?: (inputText?: string) => void | false;
}
