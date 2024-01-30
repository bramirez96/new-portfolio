// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Meta, StoryObj } from '@storybook/react';
import { Header } from './index';
import './Header.scss';

const meta: Meta<typeof Header> = {
    component: Header,
    title: 'Organisms/Header',
    args: {},
    argTypes: {},
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

export const Standard: StoryObj<typeof Header> = {
    args: {},
    render: (args) => (
        <div style={{ minHeight: 4000 }}>
            <Header {...args} />
        </div>
    ),
};
