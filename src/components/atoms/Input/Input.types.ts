// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { HTMLProps, ReactNode } from 'react';
import { InputFieldProps } from './components/InputField';
import { InputFieldWrapperProps } from './components/InputFieldWrapper';

// Button sizes
export type InputSizeSmall = 'small';
export type InputSizeDefault = 'default';
export type InputSizeLarge = 'large';
export type InputSizeXLarge = 'x-large';
export type InputSize2XLarge = '2x-large';
export type InputSizes =
    | InputSizeSmall
    | InputSizeDefault
    | InputSizeLarge
    | InputSizeXLarge
    | InputSize2XLarge;

export type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size' | 'label'> & {
    // Standard input handling props
    label?: string;
    placeholder?: string;
    required?: boolean;
    // TODO handle validation
    validate?: (value: string) => boolean;
    size?: InputSizes;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;

    // Pass attributes to the divs that surround the field
    wrapperProps?: InputFieldWrapperProps;
    labelProps?: HTMLProps<HTMLLabelElement>;
    fieldProps?: InputFieldProps;
    leftBlockProps?: HTMLProps<HTMLSpanElement>;
    middleBlockProps?: HTMLProps<HTMLSpanElement>;
    rightBlockProps?: HTMLProps<HTMLSpanElement>;
};
