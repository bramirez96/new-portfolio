// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { PLAYER_CONDITIONS, ZoneDefinition } from "../../classes";
import { tagged } from "../../gameHelpers";

/* Room ID Constants */

const Z00_APT_BED = "AptBed";
const Z00_APT_LR = "AptLR";
const Z00_APT_KIT = "AptKit";
const Z00_APT_BATH = "AptBath";
const Z00_OUTSIDE = "Outside";

/* End of Room ID Constants */

/** Zone Conditions */

const Z00_TAPPING = "tapping";
const Z00_EMPTY_MIRROR = "emptyMirror";

/** End of Zone Conditions */

export default {
    // Allow custom matrix alignment by disabling formatting on the map object
    // prettier-ignore
    map: [
        [null,         Z00_OUTSIDE,  null        ],
        [Z00_APT_KIT,  Z00_APT_LR,   Z00_APT_BATH],
        [null,         Z00_APT_BED,  null        ],
    ],
    startingRoom: Z00_APT_BED,
    conditions: {
        // Initialize the Zone with a "mysterious tapping sound" condition.
        [Z00_TAPPING]: true,
        // Initialize the Zone without the "empty mirror" condition
        [Z00_EMPTY_MIRROR]: false,
    },
    rooms: {
        // TODO define what happens once you're able to go "Outside" (it's indefinitely blocked)
        [Z00_OUTSIDE]: {
            onEnter: "You are outside.",
            // Don't need exits, game should end on enter
            exits: [],
        },
        [Z00_APT_BED]: {
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
                if (zone.hasCondition(Z00_TAPPING)) {
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
                    id: Z00_APT_LR,
                    displayText: tagged`To the ${"north"} is your living room.`,
                },
            ],
            features: [],
        },
        [Z00_APT_LR]: {
            onEnter: (_room, { zone }) => {
                let onEnterText =
                    "You're standing in your living room. Last night's dinner sits " +
                    "on the coffee table, unfinished.";

                if (zone.hasCondition(Z00_TAPPING)) {
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
                    id: Z00_APT_BED,
                    displayText: tagged`To the ${"south"} is your bedroom. You'd love to curl back up in bed right now`,
                },
                {
                    id: Z00_OUTSIDE,
                    displayText: tagged`To the ${"north"} is the door of your apartment.`,
                    // This exit is blocked so long as the player is still agoraphobic
                    blocked: (_exit, { player }) => {
                        return player.hasCondition(PLAYER_CONDITIONS.AGORAPHOBIC);
                    },
                },
                {
                    id: Z00_APT_KIT,
                    displayText: (exit) => {
                        let exitText = tagged`To the ${"west"} is your kitchen.`;

                        // Flavor text for the first time you're in the living room.
                        if (!exit.currentRoom.isVisited) {
                            exitText +=
                                " When was the last time you ate? The days are starting to blur together.";
                        }

                        return exitText;
                    },
                },
                {
                    id: Z00_APT_BATH,
                    displayText: (_exit, { zone }) => {
                        let exitText = tagged`To the ${"east"} is your bathroom.`;

                        // Flavor text that changes based on Zone state.
                        if (zone.hasCondition(Z00_EMPTY_MIRROR)) {
                            // TODO text update maybe?
                            exitText += " You shudder.";
                        } else if (!zone.hasCondition(Z00_TAPPING)) {
                            exitText += " What just happened?";
                        }

                        return exitText;
                    },
                },
            ],
        },
        [Z00_APT_KIT]: {
            onEnter: (_room, { zone }) => {
                let onEnterText =
                    "You look around. The sink is full of dishes. How long " +
                    "has it been since you've cleaned up? There's no way to " +
                    "know for sure.";

                if (zone.hasCondition(Z00_TAPPING)) {
                    onEnterText +=
                        "\n" +
                        "You pause momentarily, listening closely as the tapping starts again. " +
                        "It sounds more distant than it did in the living room." +
                        "\n" +
                        "Maybe you're just hearing things...";
                }

                return onEnterText;
            },
            exits: [
                {
                    id: Z00_APT_LR,
                    displayText: tagged`To the ${"east"} is your living room.`,
                },
            ],
        },
        [Z00_APT_BATH]: {
            onEnter: (_room, { zone }) => {
                let onEnterText = "";

                if (zone.hasCondition(Z00_EMPTY_MIRROR)) {
                    // After the second mirror interaction, the mirror is empty, changing the flavor text
                    onEnterText =
                        "Momentarily frozen in shock, you consider what just happened." +
                        "\n" +
                        "Where your apartment once felt safe, you now feel as though you are under attack by " +
                        "something dark and sinister. Reflections don't just run away... they can't! Right?" +
                        "\n" +
                        "Thinking back a few years, you try and remember what the hallucinations felt like. " +
                        "They felt real enough at the time, but never as real as this. This was new." +
                        "\n" +
                        "You feel your heart pounding in your head.";
                } else if (zone.hasCondition(Z00_TAPPING)) {
                    // Before the first mirror interaction, the tapping sound is still occurring
                    onEnterText =
                        "You look around. It's a fairly standard bathroom with a " +
                        "sink, toilet, and a shower. The waste bin is overflowing, " +
                        "and the hamper in the corner is nearly full as well." +
                        "\n" +
                        "You stop and listen as you hear the tapping again, this " +
                        "time louder than ever. You know it's nearby. You can't " +
                        "shake the eerie feeling that you're in a fish tank, and " +
                        "someone is tapping against your glass." +
                        "\n" +
                        "What on Earth is that sound? All at once it stops.";
                } else {
                    // Between the first and second mirror interactions, no tapping but the mirror isn't empty
                    onEnterText =
                        "Standing in the bathroom, you ponder what you saw in the mirror." +
                        "\n" +
                        "It's impossible to see your reflection blink, right? Some part of you wants to " +
                        "look again but the fear you feel is almost tangible." +
                        "\n" +
                        "As you sit, attempting to rationalize what you've just seen, the tapping begins " +
                        "again - slowly at first, but building rapidly, until it becomes a ferocious pounding." +
                        "\n" +
                        "Your heart races as you contemplate your next move.";
                }

                return onEnterText;
            },
            // TODO we need to print something like "the tapping starts again" when you first exit the bathroom
            exits: [
                {
                    id: Z00_APT_LR,
                    displayText: tagged`To the ${"west"} is your living room.`,
                },
            ],
        },
    },
} as ZoneDefinition;
