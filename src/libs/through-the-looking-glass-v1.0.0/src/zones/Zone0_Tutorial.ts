// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ZoneDefinition } from "../classes/Zone";

export default {
    map: [
        ["AptKit", "AptLR", "AptBath"],
        [null, "AptBed", null],
    ],
    rooms: {
        AptBed: {
            onEnter:
                "You wake up to a loud blaring sound, just like any\n" +
                "other day. Reaching over, you turn off your alarm,\n" +
                "and are plunged into a comforting silence.\n\n" +
                "Rubbing the sleep from your eyes, you look around\n" +
                "the dark room before you. The curtains on the window\n" +
                "are drawn tight, preventing any sunlight from entering.\n" +
                "In one corner you can just about make out a pile of\n" +
                "laundry on the floor.\n" +
                "\n" +
                "You welcome the darkness.\n" +
                "\n" +
                "Somewhere nearby, you can hear a faint but steady tapping.\n" +
                "You live alone. You listen harder and the tapping ceases.",
            features: [],
        },
        AptLR: {
            onEnter:
                "You're standing in your living room. Last night's dinner sits\n" +
                "on the coffee table, unfinished. You hear the strange tapping\n" +
                "sound again, slightly louder than when you woke.\n" +
                "\n" +
                "Is it coming from inside your apartment?",
        },
        AptKit: {
            onEnter:
                "You look around. The sink is full of dishes. How long\n" +
                "has it been since you've cleaned up? There's no way to\n" +
                "know for sure.\n" +
                "\n" +
                "You pause to listen as the tapping starts again. It sounds\n" +
                "more distant than it did in the living room.\n" +
                "\n" +
                "Maybe you're just hearing things...",
        },
        AptBath: {
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
        },
    },
} as ZoneDefinition;
