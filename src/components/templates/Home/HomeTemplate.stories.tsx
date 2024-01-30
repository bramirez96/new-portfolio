// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Meta, StoryObj } from '@storybook/react';
import { HomeTemplate } from './index';
import './HomeTemplate.scss';

const meta: Meta<typeof HomeTemplate> = {
    component: HomeTemplate,
    title: 'Templates/Home',
    args: {},
    argTypes: {},
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

export const Standard: StoryObj<typeof HomeTemplate> = {};
