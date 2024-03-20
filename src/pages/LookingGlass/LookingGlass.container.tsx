// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { HomeTemplate } from "../../components/templates";
import { Console } from "../../components/organisms";
import { classnames, ThroughTheLookingGlass } from "../../libs";
import { useGameController } from "../../utils";
import { useEffect } from "react";

import "./LookingGlass.scss";

export interface LookingGlassProps {}

export default function LookingGlassContainer(_props: LookingGlassProps) {
    const [gameController, consoleProps] = useGameController(ThroughTheLookingGlass);

    // Once the game controller is built...
    useEffect(() => {
        if (gameController) {
            // TODO load the game controller
        }
    }, [gameController]);

    return (
        <HomeTemplate>
            <div className={classnames("ui-looking-glass-wrapper")}>
                <Console {...consoleProps} />
            </div>
        </HomeTemplate>
    );
}
