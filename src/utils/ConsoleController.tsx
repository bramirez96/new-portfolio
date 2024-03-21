// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

export type InputPrefixSetter<IOType> = (inputPrefix?: IOType) => void;
export type ConsoleOutputSetter<IOType> = (consoleOutput?: IOType[]) => void;

export default class ConsoleController<IOType> {
    /** Update the console input's prefix text. */
    public updatePrefix: InputPrefixSetter<IOType>;

    /** Clear and then set the contents of the console output. */
    public updateOutput: ConsoleOutputSetter<IOType>;

    /** Add output to the console without first clearing it. */
    public appendOutput: ConsoleOutputSetter<IOType>;

    constructor({
        setInputPrefix,
        setConsoleOutput,
        appendConsoleOutput,
    }: {
        setInputPrefix: InputPrefixSetter<IOType>;
        setConsoleOutput: ConsoleOutputSetter<IOType>;
        appendConsoleOutput: ConsoleOutputSetter<IOType>;
    }) {
        this.updatePrefix = setInputPrefix;
        this.updateOutput = setConsoleOutput;
        this.appendOutput = appendConsoleOutput;
    }

    /** Clear the console output. */
    public clearOutput() {
        this.updateOutput();
    }
}
