// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React from 'react';
import classnames from '@brr-dev/classnames';
import './Logo.scss';
import { Link } from 'react-router-dom';
import { UISizes } from '../../lib';

export type LogoProps = Omit<React.HTMLProps<HTMLDivElement>, 'size'> & {
    size?: UISizes;
};

export default function Logo({
    className,
    size = 'default',
    ...props
}: LogoProps) {
    return (
        <Link to="/">
            <div
                className={classnames('ui-logo', `ui-size-${size}`, className)}
                {...props}
            >
                <span>brr.dev</span>
            </div>
        </Link>
    );
}
