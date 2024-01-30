// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { HTMLProps } from 'react';
import { useInputContext } from '../Input.context';
import { useFocusAutoscroll } from '../../../../utils';

export type InputElementProps = HTMLProps<HTMLInputElement>;

export default function InputElement(props: InputElementProps) {
    const { inputRef, inputID } = useInputContext();

    // Auto-scroll the input on focus so that the text cursor is in view
    useFocusAutoscroll(inputRef);

    return <input id={inputID} ref={inputRef} {...props} />;
}
