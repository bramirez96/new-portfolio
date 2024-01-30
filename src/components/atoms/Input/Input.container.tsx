// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { InputContext, InputContextProps } from './Input.context';
import React, { useId, useRef } from 'react';
import { useEmptyTracker, useFocusTracker } from '../../../utils/';
import Input from './Input';
import { InputProps } from './Input.types';

export type InputContainerProps = Partial<InputContextProps> & InputProps;

/**
 * Wrap the Input component in a Provider for the InputContext object with the values
 * initialized correctly, and the ability to provide defaults for all values.
 */
export default function InputContainer({
    isEmpty: initialIsEmpty,
    isFocused: initialIsFocused,
    inputID: _externalInputID,
    inputRef: _externalInputRef,
    ...inputProps
}: InputContainerProps) {
    // If provided, use the external ID, otherwise fall back to a custom unique ID
    const _internalInputID = useId();
    const inputID = _externalInputID ?? _internalInputID;

    // If provided, use the external input ref, otherwise use this new one
    const _internalInputRef = useRef<HTMLInputElement>(null);
    const inputRef = _externalInputRef ?? _internalInputRef;

    // Track focus state of our input reference
    const [isFocused] = useFocusTracker({
        inputRef,
        initialValue: initialIsFocused,
    });

    // Also track the empty state
    const [isEmpty] = useEmptyTracker({
        inputRef,
        initialValue: initialIsEmpty ?? !inputProps.defaultValue,
    });

    return (
        <InputContext.Provider
            value={{
                inputID,
                inputRef,
                isEmpty,
                isFocused,
            }}
        >
            <Input {...inputProps} />
        </InputContext.Provider>
    );
}
