// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';
import './Logo.scss';

const meta: Meta<typeof Logo> = {
    component: Logo,
    title: 'Atoms/Logo',
    args: {},
    argTypes: {
        size: {
            options: ['small', 'default', 'large'],
            control: { type: 'select' },
        },
    },
};

export default meta;

type LogoStory = StoryObj<typeof Logo>;

export const Standard: LogoStory = {
    args: {},
};
