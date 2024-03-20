// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { HTMLProps, ReactNode } from "react";

export type HomeTemplateProps = HTMLProps<HTMLDivElement> & {
    children?: ReactNode;
};
