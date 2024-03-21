// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ZoneInformation } from "../GameController";

export default {
    map: [
        ["AptKit", "AptLR", "AptBath"],
        [null, "AptBed", null],
    ],
    startingLocation: [1, 1], // Start in the bedroom
    rooms: {
        AptBed: {
            // TODO refactor the type system maybe?
            type: "ComboRoom",
            intro: "is your bedroom. You'd love to curl\n back up in bed right now.",
            desc: "You wake up to a loud blaring sound, just like any\nother day. Reaching over, you turn off your alarm,\nand are plunged into a comforting silence.\n\nRubbing the sleep from your eyes, you look around\nthe dark room before you. The curtains on the window\nare drawn tight, preventing any sunlight from entering.\nIn one corner you can just about make out a pile of\nlaundry on the floor.\n\nYou welcome the darkness.\n\nSomewhere nearby, you can hear a faint but steady tapping.\nYou live alone. You listen harder and the tapping ceases.",
            features: {
                Bookshelf: {
                    intro: "By the door is a >bookshelf<. Are there any books on it?",
                    desc: "Although it's a bookshelf, it contains mostly CDs,\nDVDs, and memorabilia. Delicately, you reposition a\nfigurine that was slightly out of place.\n\nYou manage to find one book on the bottom shelf.",
                    // TODO consider changing book tags to be more UUID-style
                    books: ["alice"],
                    items: {},
                },
            },
            items: {},
        },
        AptLR: {
            type: "ComboRoom",
            intro: "is your living room.",
            desc: "You're standing in your living room. Last night's dinner sits\non the coffee table, unfinished. You hear the strange tapping\nsound again, slightly louder than when you woke.\n\nIs it coming from inside your apartment?",
            features: {
                Bookshelf: {
                    intro: "There is another >bookshelf< against the wall. You feel\na strange sense of guilt that you haven't read a book\nfor years, as if you've failed yourself somehow.",
                    desc: "In front of you is your trusty bookshelf. Amidst the stacks\nof papers and carefully curated bric-a-brac, titles that\nyou once loved lay covered in dust, forgotten.\n\nWhich book would you like to read?",
                    books: [
                        "poeTales",
                        "madnessBipolar",
                        "furiouslyHappy",
                        "firstStep",
                    ],
                    items: {},
                },
            },
            items: {},
        },
        AptKit: {
            type: "ComboRoom",
            intro: "is your kitchen. When was the last time\nyou ate? The days are starting to blur together.",
            desc: "You look around. The sink is full of dishes. How long\nhas it been since you've cleaned up? There's no way to\nknow for sure.\n\nYou pause to listen as the tapping starts again. It sounds\nmore distant than it did in the living room.\n\nMaybe you're just hearing things...",
            features: {
                Sink: {
                    intro: "You see a >sink<.",
                    desc: "^It's a sink.\n\n<Not much else to say...",
                    items: {},
                },
            },
            items: {
                Gum: {
                    intro: "\nNext to a stack of unopened mail on the kitchen table,\nyou see a piece of >gum<.",
                },
            },
        },
        AptBath: {
            type: "EventRoom",
            intro: [
                "is your bathroom.",
                "is your bathroom. What just happened?",
                "is your bathroom. You shudder.",
            ],
            desc: [
                "You look around. It's a fairly standard bathroom with a\nsink, toilet, and a shower. The waste bin is overflowing,\nand the hamper in the corner is nearly full as well.\n\nYou stop and listen as you hear the tapping again, this\ntime louder than ever. You know it's nearby. You can't\nshake the eerie feeling that you're in a fishtank, and\nsomeone is tapping against your glass.\n\nWhat on Earth is that sound?? All at once it stops.",
                "Standing in the bathroom, you ponder what you saw in the mirror.\n\nIt's impossible to see your reflection blink, right? Some part of\nyou wants to look again but the fear you feel is almost tangible.\n\nAs you sit, attempting to rationalize what you've just seen,\nthe tapping begins again - slowly at first, but building rapidly,\nuntil it becomes a ferocious pounding.\n\nYour heart races as you contemplate your next move.",
                "Momentarily frozen in shock, you consider what just happened.\n\nWhere your apartment once felt safe, you now feel as though you\nare under attack by something dark and sinister. Reflections\ndon't just run away... they can't! Right?\n\nThinking back a few years, you try and remember what those old\nhallucinations felt like. They felt real enough at the time, but\nthey never looked like this. This was new.\n\nYour feel your heart pounding in your head.",
            ],
            features: {
                MagicMirror: {
                    intro: [
                        "On the wall above the sink is a large, ornate >mirror<.",
                        "On the wall above the sink is a large, ornate >mirror<. Thinking\nabout it fills you with a deep dread.",
                        "The >mirror< is still on the wall, but you have no reflection.",
                    ],
                    desc: [
                        "...and stare into your reflection. It's almost difficult\nto recognize yourself. Where have all of the years gone?\n\nThat all-too familiar dread creeps in that life is\nsomehow rushing past you, and you just can't keep up,\nno matter how hard you try.\n\nAs you ponder the brevity of life, your thoughts are\nstopped dead in their tracks...\n\nDid your reflection just blink???\n\nFrantic, you turn away.",
                        '...slowly, as if you\'re afraid of your reflection.\n\nYour reflection that isn\'t your reflection. There\'s a\nfire in her eyes as she pounds at the mirror with both\nfists. Are you finally losing it?\n\n"WHAT DO YOU WANT FROM ME?" you scream.\n\nShe stops. Slowly, as if she has a secret that you were\nnever destined to know, her lips turn up into a cruel,\ninhuman smile. Raising her hand, she beckons you near.\n\n"What are you?" you ask, now barely managing a whisper.\n\nHer smile softens. Cocking her head as if examining you\ncloser, she laughs as she turns and runs.',
                        "Everything in your bathroom can be seen reflected in the\nterrifying glass except your reflection. Where did she go?\n\n\"This can't be happening. It's not real.\" Slowly raising\nyour hand, you approach the mirror, determined that the\nevents of the past few minutes were a paranoid delusion.\n\nPausing momentarily, you reassure yourself that since what\nyou were seeing was impossible, it couldn't be happening.\n\nTrying in vain to believe the comforting lie, you reach out\nto touch the mirror in front of you - the mirror that isn't\na mirror, the mirror with no reflection - as you feel that\nfamiliar panic welling up deep in your throat.\n\nThe second your fingers touch the glass, you begin to fall.",
                    ],
                    fallingText:
                        "Engulfed in a darkness thicker than any you've experienced, you\nthrash about, desperately searching for any light, anything to tell\nyou where you are or what's happening.\n\nYou see nothing.\n\nAs you fall deeper and deeper, seemingly forever, you try to assure\nyourself that this is just a dream. A psychotic break. Anything\nother than reality. What a comfort it would be to know that it was\nmerely your perception that had changed, and that reality remained\nsafely intact outside of your illness-stricken mind.\n\nAs the last trace of comfort vanishes from your thoughts, and your\nfinal shred of hope slips away, you begin to hear music. \n\nBelow you? Above you? No way to know. Direction, space, time...\n\nIt's all meaningless now.\n\nTears well up in your eyes as you accept that you will never stop\nfalling. Clutching your legs up to your chest, you drift off to\nsleep as you fall endlessly into oblivion.",
                },
            },
            items: {},
        },
    },
} as ZoneInformation;
