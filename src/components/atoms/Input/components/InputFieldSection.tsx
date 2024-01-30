// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React, { HTMLProps, MouseEventHandler, useCallback } from 'react';
import classnames from '@brr-dev/classnames';
import { useInputContext } from '../Input.context';

export type InputFieldSectionProps = HTMLProps<HTMLSpanElement> & {
    section: 'left' | 'middle' | 'right';
    children?: React.ReactNode;
};

export default function InputFieldSection({
    section,
    className,
    children,
    onClick,
    ...props
}: InputFieldSectionProps) {
    const { inputRef } = useInputContext();

    const _onClick = useCallback<MouseEventHandler<HTMLSpanElement>>(
        (event) => {
            if (!event.isPropagationStopped() && inputRef?.current) {
                if (section === 'left') {
                    inputRef.current.setSelectionRange(0, 0);
                } else if (section === 'right') {
                    inputRef.current.setSelectionRange(
                        inputRef.current.value.length,
                        inputRef.current.value.length
                    );
                }
            }

            return onClick?.(event);
        },
        [onClick, inputRef, section]
    );

    return (
        <span
            className={classnames(
                'ui-input-field-section',
                `ui-section-${section}`,
                className
            )}
            onClick={_onClick}
            {...props}
        >
            {children}
        </span>
    );
}
