// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ButtonProps } from './Button.types';
import classnames from '@brr-dev/classnames';
import './Button.scss';
import React from 'react';

export default function Button({
    children,
    type = 'primary',
    size = 'default',
    link,
    className,
    htmlType = 'button',
    iconLeft = null,
    iconRight = null,
    ...buttonProps
}: ButtonProps = {}) {
    const exactlyOneIcon =
        !children && ((iconLeft && !iconRight) || (iconRight && !iconLeft));

    return (
        <button
            className={classnames(
                className,
                'ui-button',
                `ui-button-${type}`,
                `ui-button-${size}`,
                exactlyOneIcon && 'ui-button-square'
            )}
            type={htmlType}
            {...buttonProps}
        >
            {iconLeft && <span className="ui-button-icon">{iconLeft}</span>}
            {typeof children === 'string' && children !== '' ? (
                <span className="ui-button-text-content">{children}</span>
            ) : (
                children
            )}
            {iconRight && <span className="ui-button-icon">{iconRight}</span>}
        </button>
    );
}
