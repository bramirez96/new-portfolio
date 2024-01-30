// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { NavLink, useInRouterContext } from 'react-router-dom';
import { ButtonProps } from './Button.types';
import Button from './Button';
import React, { useCallback } from 'react';
import { createRipple } from '../../../utils';
import classnames from '@brr-dev/classnames';

export type ButtonContainerProps = ButtonProps;

export default function ButtonContainer({
    link,
    linkTarget,
    disableLink = false,
    onMouseDown,
    ...props
}: ButtonContainerProps) {
    // Links need a router context to render properly
    const inRouterContext = useInRouterContext();

    // Create a ripple effect in the button on mousedown events
    const _mouseDown = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            createRipple(event);
            return onMouseDown?.(event);
        },
        [onMouseDown]
    );

    // Link click handler to use for development, lets you disable links
    const _linkClick = useCallback<React.MouseEventHandler<HTMLAnchorElement>>(
        (event) => {
            if (disableLink) {
                console.warn(
                    'Link disabled. This should only be used in development.'
                );
                event.stopPropagation();
                event.preventDefault();
                return false;
            }
        },
        [disableLink]
    );

    // If we got a link, return the button wrapped in a link tag
    if (link) {
        if (!inRouterContext) {
            throw new Error(
                'Must be in a router context to pass `link` option to Button components.'
            );
        }

        props.type ??= 'text';

        return (
            <NavLink
                to={link}
                target={linkTarget ?? '_blank'}
                onClick={_linkClick}
                className={({ isActive }) =>
                    classnames(isActive && 'ui-active-nav-item')
                }
            >
                <Button onMouseDown={_mouseDown} {...props} />
            </NavLink>
        );
    }

    // Otherwise just return the button
    return <Button onMouseDown={_mouseDown} {...props} />;
}
