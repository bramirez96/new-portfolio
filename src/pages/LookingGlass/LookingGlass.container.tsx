// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { HomeTemplate } from "../../components/templates";
import { Console } from "../../components/organisms";
import { classnames, ThroughTheLookingGlass } from "../../libs";
import { useGameController } from "../../utils";
import { useEffect } from "react";

import "./LookingGlass.scss";
import { Text } from "../../components/atoms";

export interface LookingGlassProps {}

export default function LookingGlassContainer(_props: LookingGlassProps) {
    const [gameController, consoleProps] = useGameController();

    // Once the game controller is built...
    useEffect(() => {
        if (gameController) {
            // ...load the proper game disc...
            gameController.loadGame(ThroughTheLookingGlass).then(() => {
                // ...then what?
            });
        }
    }, [gameController]);

    return (
        <HomeTemplate className="ui-looking-glass-page">
            <div className="ui-title-section">
                <Text size="x-large">
                    <em>Through the Looking Glass</em>
                </Text>
                <Text size="small">A console-based interactive fiction adventure.</Text>
            </div>
            <div className={classnames("ui-looking-glass-wrapper")}>
                <Console {...consoleProps} />
            </div>
        </HomeTemplate>
    );
}
