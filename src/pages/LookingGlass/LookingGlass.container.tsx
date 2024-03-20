// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { HomeTemplate } from "../../components/templates";
import { Console } from "../../components/organisms";
import { classnames } from "../../libs";

import "./LookingGlass.scss";

export interface LookingGlassProps {}

export default function LookingGlassContainer(props: LookingGlassProps) {
    return (
        <HomeTemplate>
            <div className={classnames("ui-looking-glass-wrapper")}>
                <Console
                    onInputSubmit={(text) => {
                        alert(`Submitted: ${text}`);
                    }}
                />
            </div>
        </HomeTemplate>
    );
}
