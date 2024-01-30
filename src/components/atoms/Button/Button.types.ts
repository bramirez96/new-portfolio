// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { HTMLProps, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
import { UISizes } from '../../lib';

// Button types
export type ButtonTypePrimary = 'primary';
export type ButtonTypeSecondary = 'secondary';
export type ButtonTypeGhost = 'ghost';
export type ButtonTypeText = 'text';
export type ButtonTypes =
    | ButtonTypePrimary
    | ButtonTypeSecondary
    | ButtonTypeGhost
    | ButtonTypeText;

export type ButtonProps = Omit<
    HTMLProps<HTMLButtonElement>,
    'type' | 'size'
> & {
    type?: ButtonTypes;
    size?: UISizes;
    children?: ReactNode;
    htmlType?: 'button' | 'submit' | 'reset';
    link?: string;
    linkTarget?: LinkProps['target'];
    disableLink?: boolean;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
};
