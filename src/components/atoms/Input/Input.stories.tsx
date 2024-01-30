// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Input } from './index';
import { Meta, StoryObj } from '@storybook/react';
import {
    AiOutlineExclamationCircle,
    AiOutlineEye,
    AiOutlineLock,
    AiOutlineSearch,
    AiOutlineUser,
} from 'react-icons/ai';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Atoms/Input',
    args: {
        size: 'default',
        required: false,
        placeholder: '',
        iconLeft: 'none',
        iconRight: 'none',
        label: '',
    },
    argTypes: {
        size: {
            options: ['small', 'default', 'large', 'x-large', '2x-large'],
            control: { type: 'select' },
        },
        required: {
            control: { type: 'boolean' },
        },
        label: {
            type: 'string',
        },
        placeholder: {
            type: 'string',
        },
        iconLeft: {
            options: ['none', 'search', 'user', 'lock'],
            mapping: {
                none: null,
                search: <AiOutlineSearch />,
                user: <AiOutlineUser />,
                lock: <AiOutlineLock />,
            },
            control: { type: 'select' },
        },
        iconRight: {
            options: ['none', 'eye', 'error'],
            mapping: {
                none: null,
                eye: <AiOutlineEye />,
                error: <AiOutlineExclamationCircle />,
            },
            control: { type: 'select' },
        },

        // Don't build controls for these fields
        validate: {
            if: { global: '----fake-global', exists: true },
        },
        fieldProps: {
            if: { global: '----fake-global', exists: true },
        },
        wrapperProps: {
            if: { global: '----fake-global', exists: true },
        },
        labelProps: {
            if: { global: '----fake-global', exists: true },
        },
        leftBlockProps: {
            if: { global: '----fake-global', exists: true },
        },
        middleBlockProps: {
            if: { global: '----fake-global', exists: true },
        },
        rightBlockProps: {
            if: { global: '----fake-global', exists: true },
        },
        inputRef: {
            if: { global: '----fake-global', exists: true },
        },
    },
};

export default meta;

type InputStory = StoryObj<typeof Input>;

export const FullName: InputStory = {
    args: {
        defaultValue: 'Lucian Rudolfo-Pendergrass',
        placeholder: 'Enter your full name...',
        label: 'Full name',
        iconLeft: 'user',
        size: 'large',
    },
};

export const SmallSearch: InputStory = {
    args: {
        size: 'small',
        iconLeft: 'search',
        placeholder: 'Search anywhere...',
    },
};

export const GiantPassword: InputStory = {
    args: {
        size: '2x-large',
        iconLeft: 'lock',
        type: 'password',
    },
    render: (args) => (
        <>
            <Input {...args} label="Enter your password" />
            <br />
            <br />
            <Input {...args} label="Re-enter your password" />
        </>
    ),
};

export const Required: InputStory = {
    args: {
        placeholder: 'Enter required text...',
        required: true,
    },
};
