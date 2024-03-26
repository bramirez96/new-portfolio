// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import Action from "../Action";
import GameController from "../../GameController";

export default class ViewInventoryAction extends Action<never> {
    constructor(gameController: GameController) {
        super("i|inv|inventory", () => {
            gameController.console.updateOutput([
                ...gameController.player.inventory.map((item, i) => (
                    <div key={i}>{item.inventoryText}</div>
                )),
                <br />,
            ]);

            gameController.pause("Press Enter to continue...");
        });
    }
}
