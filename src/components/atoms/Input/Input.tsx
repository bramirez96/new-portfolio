// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React from 'react';
import { InputProps } from './Input.types';
import InputLabel from './components/InputLabel';
import InputFieldWrapper from './components/InputFieldWrapper';
import InputFieldSection from './components/InputFieldSection';
import InputField from './components/InputField';
import InputElement from './components/inputElement';
import './Input.scss';

export default function Input({
    // Input component props
    required,
    size,
    label,
    iconLeft,
    iconRight,

    // Optional container props
    wrapperProps = {},
    labelProps = {},
    fieldProps = {},
    leftBlockProps = {},
    middleBlockProps = {},
    rightBlockProps = {},

    // The rest of the HTML input element props
    ...props
}: InputProps) {
    return (
        <InputFieldWrapper size={size} {...wrapperProps}>
            <InputLabel text={label} required={required} {...labelProps} />
            <InputField {...fieldProps}>
                <InputFieldSection section="left" {...leftBlockProps}>
                    {iconLeft}
                </InputFieldSection>
                <InputFieldSection section="middle" {...middleBlockProps}>
                    <InputElement {...props} />
                </InputFieldSection>
                <InputFieldSection section="right" {...rightBlockProps}>
                    {iconRight}
                </InputFieldSection>
            </InputField>
        </InputFieldWrapper>
    );
}
