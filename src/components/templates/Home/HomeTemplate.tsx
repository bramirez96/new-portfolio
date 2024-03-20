// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React from "react";
import { HomeTemplateProps } from "./HomeTemplate.types";
import "./HomeTemplate.scss";
import { Header } from "../../organisms";
import { classnames } from "../../../libs";

export default function HomeTemplate({ className, children, ...props }: HomeTemplateProps) {
    return (
        <div className={classnames("ui-template-home", "ui-page-template", className)} {...props}>
            <Header />
            {children}
        </div>
    );
}
