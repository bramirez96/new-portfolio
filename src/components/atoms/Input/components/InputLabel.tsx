// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { HTMLProps } from 'react';
import { useInputContext } from '../Input.context';
import classnames from '@brr-dev/classnames';

export type InputLabelProps = Omit<
    HTMLProps<HTMLLabelElement>,
    'required' | 'text'
> & {
    text?: string;
    required?: boolean;
};

export default function InputLabel({
    text,
    required = false,
    className,
    ...props
}: InputLabelProps) {
    const { inputID } = useInputContext();
    text = text?.trim?.() ?? text;

    // Default label to "Required" if required with no label set
    if (required) {
        text ||= 'Required';
    }

    if (!text) return null;

    return (
        <label
            htmlFor={inputID}
            className={classnames('ui-input-label', className)}
            {...props}
        >
            <span className="ui-input-label-text">
                {text}
                {required && (
                    <>
                        &nbsp;<span className="ui-required-indicator">*</span>
                    </>
                )}
            </span>
        </label>
    );
}
