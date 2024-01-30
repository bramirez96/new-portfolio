// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React, { HTMLProps } from 'react';
import classnames from '@brr-dev/classnames';
import { InputSizes } from '../Input.types';
import { useInputContext } from '../Input.context';

export type InputFieldWrapperProps = Omit<
    HTMLProps<HTMLLabelElement>,
    'size'
> & {
    size?: InputSizes;
    children?: React.ReactNode;
};

export default function InputFieldWrapper({
    children,
    className,
    size,
    ...labelProps
}: InputFieldWrapperProps) {
    const { isFocused, isEmpty } = useInputContext();

    return (
        <label
            className={classnames(
                'ui-input-field-wrapper',
                className,
                isFocused && 'ui-focus',
                isEmpty && 'ui-empty',
                `ui-size-${size}`
            )}
            {...labelProps}
        >
            {children}
        </label>
    );
}
