// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ZoneDefinition } from "../classes/Zone";
import { tag } from "../gameHelpers";
import { PLAYER_CONDITIONS } from "../classes/Player";

/* Room ID Constants */

const APT_BED = "AptBed";
const APT_LR = "AptLR";
const APT_KIT = "AptKit";
const APT_BATH = "AptBath";
const OUTSIDE = "Outside";

/* End of Room ID Constants */

/** Zone Conditions */

const TAPPING = "tapping";

/** End of Zone Conditions */

export default {
    // prettier-ignore
    map: [
        [null,      OUTSIDE,    null],
        [APT_KIT,   APT_LR,     APT_BATH],
        [null,      APT_BED,    null],
    ],
    startingRoom: APT_BED,
    conditions: {
        // Initialize the Zone with a "mysterious tapping sound" condition.
        [TAPPING]: true,
    },
    rooms: {
        [APT_BED]: {
            /**
             * This Room has different entry text based on the state of the game.
             * Since this is the starting Room, we're adding some more context and
             * flavor text to get the Player into the game.
             */
            onEnter: (room, { zone }) => {
                let onEnterText = "";

                if (!room.isVisited) {
                    // Intro text on first visit
                    onEnterText +=
                        "You wake up to a loud blaring sound, just like any " +
                        "other day. Reaching over, you turn off your alarm, " +
                        "and are plunged into a comforting silence." +
                        "\n" +
                        "Rubbing the sleep from your eyes, you look around " +
                        "the dark room before you.";
                } else {
                    onEnterText += "You're in your bedroom.";
                }

                onEnterText +=
                    " The curtains on the window " +
                    "are drawn tight, preventing any sunlight from entering. " +
                    "In one corner you can just about make out a pile of " +
                    "laundry on the floor.";

                // Additional flavor text on the first entry, just for fun.
                if (!room.isVisited) {
                    onEnterText += "\nYou welcome the darkness.";
                }

                // We don't want this text to show after the "tapping" stops!
                if (zone.hasCondition(TAPPING)) {
                    onEnterText += "\n";

                    // TODO is this text cringe? Need to decide
                    if (!room.isVisited) {
                        onEnterText +=
                            "As with all good things, the peaceful silence was short-lived. ";
                    }

                    onEnterText +=
                        "Somewhere nearby, you can hear a faint but steady tapping. " +
                        "You live alone. You listen harder and the tapping ceases.";
                }

                return onEnterText;
            },
            exits: [
                {
                    id: APT_LR,
                    displayText: `To the ${tag("north")} is your living room.`,
                },
            ],
            features: [],
        },
        [APT_LR]: {
            onEnter: (_, { zone }) => {
                let onEnterText =
                    "You're standing in your living room. Last night's dinner sits " +
                    "on the coffee table, unfinished.";

                if (zone.hasCondition(TAPPING)) {
                    onEnterText +=
                        " You hear the strange tapping sound again, slightly louder " +
                        "than when you woke." +
                        "\n" +
                        "Is it coming from inside your apartment?";
                }

                return onEnterText;
            },
            exits: [
                {
                    id: APT_BED,
                    displayText:
                        `To the ${tag("south")} is your bedroom. ` +
                        "You'd love to curl back up in bed right now",
                },
                {
                    id: OUTSIDE,
                    displayText: `To the ${tag("north")} is the door of your apartment.`,
                    // This exit is blocked so long as the player is still agoraphobic
                    blocked: (current, target, exit, { player }) =>
                        player.hasCondition(PLAYER_CONDITIONS.AGORAPHOBIC),
                },
                { direction: "west", id: APT_KIT },
                { direction: "east", id: APT_BATH },
            ],
        },
        [APT_KIT]: {
            onEnter:
                "You look around. The sink is full of dishes. How long\n" +
                "has it been since you've cleaned up? There's no way to\n" +
                "know for sure.\n" +
                "\n" +
                "You pause to listen as the tapping starts again. It sounds\n" +
                "more distant than it did in the living room.\n" +
                "\n" +
                "Maybe you're just hearing things...",
            exits: [],
        },
        [APT_BATH]: {
            onEnter:
                "You look around. It's a fairly standard bathroom with a\n" +
                "sink, toilet, and a shower. The waste bin is overflowing,\n" +
                "and the hamper in the corner is nearly full as well.\n" +
                "\n" +
                "You stop and listen as you hear the tapping again, this\n" +
                "time louder than ever. You know it's nearby. You can't\n" +
                "shake the eerie feeling that you're in a fish tank, and\n" +
                "someone is tapping against your glass.\n" +
                "\n" +
                "What on Earth is that sound?? All at once it stops.",
            exits: [],
        },
    },
} as ZoneDefinition;
