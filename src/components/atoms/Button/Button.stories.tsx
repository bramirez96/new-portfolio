// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
import "./Button.scss";
import {
    AiOutlineCopy,
    AiOutlineDelete,
    AiOutlineExport,
    AiOutlineQuestionCircle,
    AiOutlineRise,
    AiOutlineSelect,
    AiOutlineShareAlt,
    AiOutlineUser,
} from "react-icons/ai";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Atoms/Button",
    args: {
        type: "primary",
        size: "default",
        children: "",
        iconLeft: "none",
        iconRight: "none",
        link: "",
        linkTarget: "_self",
        disableLink: true,
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    argTypes: {
        iconLeft: {
            options: ["none", "user", "delete", "copy", "info", "share"],
            mapping: {
                user: <AiOutlineUser />,
                delete: <AiOutlineDelete />,
                copy: <AiOutlineCopy />,
                info: <AiOutlineQuestionCircle />,
                share: <AiOutlineShareAlt />,
                none: null,
            },
            control: { type: "select" },
        },
        iconRight: {
            options: ["none", "stonks", "select", "export"],
            mapping: {
                stonks: <AiOutlineRise />,
                select: <AiOutlineSelect />,
                export: <AiOutlineExport />,
                none: null,
            },
            control: { type: "select" },
        },
        type: {
            options: ["primary", "secondary", "ghost", "text"],
            control: { type: "select" },
        },
        size: {
            options: ["small", "default", "large", "x-large", "2x-large"],
            control: { type: "select" },
        },
        children: {
            name: "text",
            type: "string",
        },
        link: { type: "string" },
        disableLink: { type: "boolean" },
        // Don't auto-build controls for these props
        htmlType: {
            if: { global: "---fake-global", exists: true },
        },
        linkTarget: {
            if: { global: "---fake-global", exists: true },
        },
    },
};

export default meta;

type ButtonStory = StoryObj<typeof Button>;

export const PrimaryAction: ButtonStory = {
    args: {
        children: "Copy to clipboard",
        size: "large",
        iconLeft: "copy",
    },
};

export const SecondaryButton: ButtonStory = {
    args: {
        children: "Learn more",
        iconLeft: "info",
        type: "secondary",
    },
};

export const GhostButton: ButtonStory = {
    args: {
        children: "Edit profile",
        iconLeft: "user",
        type: "ghost",
    },
};

export const LinkButton: ButtonStory = {
    args: {
        type: "text",
        iconRight: "export",
        link: "https://brr.dev",
        children: "View portfolio",
    },
};

export const IconButton: ButtonStory = {
    args: {
        iconLeft: "share",
        size: "x-large",
        type: "ghost",
    },
};
