// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Meta, StoryObj } from "@storybook/react";
import Console from "./Console";
import "./Console.scss";

const meta: Meta<typeof Console> = {
    component: Console,
    title: "Organisms/Console",
    args: {},
    argTypes: {},
    parameters: {},
};

export default meta;

export const Standard: StoryObj<typeof Console> = {
    args: {},
};
