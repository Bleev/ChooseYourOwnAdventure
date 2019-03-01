// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "watertime.jpg",
    levels: {

        start: {
            message: "You're being chased by a wild Lion! You see a waterfall, do you jump???",
            choices: [
                {
                    text: "Jump like a fricking god",
                    nextLevel: "cave",
                },

                {
                    text: "Accept your fate and get oofed",
                    nextLevel: "death",
                },
            ]
        },

        cave: {
            background_image: "shoretime.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You land with a P L O O P and swim to shore and get greeted by Snake from Metal Gear Solid who greets you on the shore. He is undeniably dummy thicc and he offers you his hand.",
            choices: [
                {
                    text: "Take his hand and fight out of these mysterious lands together",
                    nextLevel: "nohomo",
                },
                
                {
                    text:"Square Up b, and fight Snake",
                    nextLevel: "death",
                }
            ]
        },
        
        
        nohomo: {
            message:"You take his hand and together you come across that lion from before. Snake screams for you to run while he takes out the 1% Shaggy Pill and pops it into his mouth. He gets even more dummy THICC and proceeds to fight off the lion. After an EPIC fist to the face, the lion disintergrates before your very eyes, but at the cost of Snake's life. Snake collapses from the 1% Shaggy Pill and falls into your arms",
            background_image: "realsnakeoof.jpg",
            choices: [
                {
                    text: "don't cry",
                    nextLevel: "heartless",
                },
                
                {
                    text: "try not to cry but cry a lot",
                    nextLevel: "crytime",
                }
                ]
        },
        death: {
            message: "You literally died, mate, omegalul",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        heartless: {
            message: "You literally hold in your tears so much that you die by drowning yourself in your tears but you join Snake in heaven so technically that's a dub in my book",
            choices: [
                {
                    text: "Start over ;-;",
                    nextLevel: "start",
                }
                ]
        },
        
        crytime: {
            message: "You accept your feelings and let it out. Your tears flood over Solid Snake and they seep through his skin and into his heart. He then suddenley is revived through your magical tears and holds onto your hand once again. You and Solid Snake become hecka intimate and drive into the sunset as he grabs your thigh on Lightning Mcqueen as your car silently whispers into your ear 'Kachow...'",
            choices: [
                {
                    text: "that was hecka beautiful, literally best ending, click to start over tho",
                    nextLevel: "start",
                }
                ]
        },

    }
};
