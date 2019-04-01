FullScreenMario.prototype.settings.maps = {
    "mapDefault": "1-1",
    "locationDefault": "0",
    "groupTypes": ["Character", "Solid", "Scenery", "Text"],
    "requireEntrance": true,
    "screenAttributes": [
        "gravity",
        "setting",
        "time",
        "underwater",
        "floor",
        "jumpmod",
        "maxyvel",
        "maxyvelinv",
        "notime",
        "nokeys",
        "canscroll"
    ],
    "screenVariables": {
        "bottomDeathDifference": function (EightBitter) {
            return EightBitter.unitsize * 12;
        },
        "bottomPlatformMax": function (EightBitter) {
            var area = EightBitter.MapsHandler.getArea(),
                diff = EightBitter.MapScreener.bottomDeathDifference;

            if (!area) {
                return -1;
            }

            return (area.floor + diff) * EightBitter.unitsize;
        },
        "gravity": function (EightBitter) {
            var area = EightBitter.MapsHandler.getArea();

            if (area && area.underwater) {
                return EightBitter.gravity / 2.8;
            }

            return EightBitter.gravity;
        }
    },
    "onSpawn": FullScreenMario.prototype.addPreThing,
    "macros": {
        "Example": FullScreenMario.prototype.macroExample,
        "Fill": FullScreenMario.prototype.macroFillPreThings,
        "Pattern": FullScreenMario.prototype.macroFillPrePattern,
        "Floor": FullScreenMario.prototype.macroFloor,
        "Pipe": FullScreenMario.prototype.macroPipe,
        "PipeCorner": FullScreenMario.prototype.macroPipeCorner,
        "Tree": FullScreenMario.prototype.macroTree,
        "Shroom": FullScreenMario.prototype.macroShroom,
        "Water": FullScreenMario.prototype.macroWater,
        "CastleSmall": FullScreenMario.prototype.macroCastleSmall,
        "CastleLarge": FullScreenMario.prototype.macroCastleLarge,
        "Ceiling": FullScreenMario.prototype.macroCeiling,
        "Bridge": FullScreenMario.prototype.macroBridge,
        "Scale": FullScreenMario.prototype.macroScale,
        "PlatformGenerator": FullScreenMario.prototype.macroPlatformGenerator,
        "WarpWorld": FullScreenMario.prototype.macroWarpWorld,
        "CheepsStart": FullScreenMario.prototype.macroCheepsStart,
        "CheepsStop": FullScreenMario.prototype.macroCheepsStop,
        "BulletBillsStart": FullScreenMario.prototype.macroBulletBillsStart,
        "BulletBillsStop": FullScreenMario.prototype.macroBulletBillsStop,
        "LakituStop": FullScreenMario.prototype.macroLakituStop,
        "StartInsideCastle": FullScreenMario.prototype.macroStartInsideCastle,
        "EndOutsideCastle": FullScreenMario.prototype.macroEndOutsideCastle,
        "EndInsideCastle": FullScreenMario.prototype.macroEndInsideCastle,
        "Section": FullScreenMario.prototype.macroSection,
        "SectionPass": FullScreenMario.prototype.macroSectionPass,
        "SectionFail": FullScreenMario.prototype.macroSectionFail,
        "SectionDecider": FullScreenMario.prototype.macroSectionDecider
    },
    "entrances": {
        "Normal": FullScreenMario.prototype.mapEntranceNormal,
        "Plain": FullScreenMario.prototype.mapEntrancePlain,
        "Castle": FullScreenMario.prototype.mapEntranceCastle,
        "Walking": FullScreenMario.prototype.mapEntranceWalking,
        "Vine": FullScreenMario.prototype.mapEntranceVine,
        "PipeVertical": FullScreenMario.prototype.mapEntrancePipeVertical,
        "PipeHorizontal": FullScreenMario.prototype.mapEntrancePipeHorizontal,
    },
    "patterns": (function (patterns) {
        var pattern,
            i;
        for (i in patterns) {
            if (patterns.hasOwnProperty(i)) {
                pattern = patterns[i];
                if (!pattern.length) {
                    continue;
                }

                // Pattern's last array should previously be ["blank", width]
                pattern.width = pattern[pattern.length - 1][1];
                pattern.pop();
            }
        }
        return patterns;
    })({
        "BackRegular": [
            ["HillLarge", 0, 0],
            ["Cloud1", 68, 68],
            ["Bush3", 92, 0],
            ["HillSmall", 128, 0],
            ["Cloud1", 156, 76],
            ["Bush1", 188, 0],
            ["Cloud3", 220, 68],
            ["Cloud2", 292, 76],
            ["Bush2", 332, 0],
            ["Blank", 384]
        ],
        "BackCloud": [
            ["Cloud2", 28, 64],
            ["Cloud1", 76, 32],
            ["Cloud2", 148, 72],
            ["Cloud1", 228, 0],
            ["Cloud1", 284, 32],
            ["Cloud1", 308, 40],
            ["Cloud1", 372, 0],
            ["Blank", 384]
        ],
        "BackFence": [
            ["PlantSmall", 88, 0],
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 32],
            ["Cloud1", 148, 68],
            ["PlantLarge", 168, 0],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Fence", 304, 0, 16],
            ["PlantSmall", 320, 0],
            ["Fence", 328, 0],
            ["PlantLarge", 344, 0],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ],
        "BackFenceMin": [
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 32],
            ["Cloud1", 148, 68],
            ["PlantLarge", 168, 0],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Fence", 304, 0, 16],
            ["PlantSmall", 320, 0],
            ["Fence", 328, 0],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ],
        "BackFenceMin2": [
            ["Cloud2", 4, 68],
            ["PlantSmall", 88, 0],
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0],
            ["Fence", 128, 0, 16],
            ["Cloud1", 148, 68],
            // ["PlantLarge", 168, 0],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Fence", 304, 0, 16],
            ["PlantSmall", 320, 0],
            ["Fence", 328, 0],
            ["PlantLarge", 344, 0],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ],
        "BackFenceMin3": [
            ["Cloud2", 4, 68],
            ["PlantSmall", 88, 0],
            ["PlantLarge", 104, 0],
            ["Fence", 112, 0, 4],
            ["Cloud1", 148, 68],
            ["PlantSmall", 184, 0],
            ["PlantSmall", 192, 0],
            ["Cloud1", 220, 76],
            ["Cloud2", 244, 68],
            ["Cloud1", 364, 76],
            ["Cloud2", 388, 68],
            ["Blank", 384]
        ]
    }),
    "library": (function (maps) {
        var library = {},
            i;

        for (i = 0; i < maps.length; i += 1) {
            library[maps[i].name] = maps[i];
        }

        return library;
    })([
        {
            "name": "1-1",
            "locations": [
                {"xloc": 0},
                {"entry": "PipeVertical"},
                {"area": 1},
                {"area": 2, "entry": "Vine"},
                {"area": 3, "entry": "Vine"},
                {"xloc": 2820},
                {"xloc": 3370}
            ],
            "areas": [
                {
                    "setting": "Overworld",
                    "blockBoundaries": true,
                    "creation": [
                        {"macro": "Pattern", "pattern": "BackRegular", "repeat": 15},
                        {"macro": "Floor", "width": 3500},
                        { "thing": "DecorativeBack", "x": 20, "y": 88 },
                        {"thing": "DecorativeDot", "x": 21.5, "y": 46.5},
                        {"thing": "DecorativeDot", "x": 21.5, "y": 86.5},
                        {
                            "thing": "CustomText", "x": 20, "y": 36, "texts": [
                                {"text": "MOVE: ARROWS/WASD", "offset": 12},
                                {"text": "FIRE/SPRINT: SHIFT/CTRL"},
                                {"text": "PAUSE: P/RIGHTCLICK", "offset": 8}
                            ]
                        },
                        {
                            "thing": "CustomText", "x": 24.5, "y": 84, "size": "Large", "texts": [
                                {"text": "SUPER"}
                            ]
                        },
                        {
                            "thing": "CustomText", "x": 24.5, "y": 68, "size": "Huge", "texts": [
                                {"text": "MARIO BROS."}
                            ]
                        },
                        {"thing": "DecorativeDot", "x": 105.5, "y": 46.5},
                        {"thing": "DecorativeDot", "x": 105.5, "y": 86.5},
                        {
                            "thing": "CustomText", "x": 52, "y": 44, "texts": [
                                {"text": "2018/01/14"}
                            ]
                        },
                        { "thing": "Block", "x": 110, "y": 32, "contents": "Mushroom" },
                        { "thing": "Stone", "x": 148, "y": 8 },
                        { "thing": "Stone", "x": 156, "y": 16, "height": 16 },
                        { "thing": "Stone", "x": 164, "y": 24, "height": 24 },
                        { "thing": "Stone", "x": 172, "y": 32, "height": 32 },
                        { "thing": "Stone", "x": 180, "y": 40, "height": 40 },
                        { "thing": "Stone", "x": 188, "y": 48, "height": 48 },
                        { "thing": "Stone", "x": 196, "y": 56, "height": 56 },
                        { "thing": "Stone", "x": 204, "y": 64, "height": 64, "width": 16 },
                        { "thing": "Goomba", "x": 320, "y": 8 },
                        { "thing": "Goomba", "x": 340, "y": 8 },
                        { "thing": "Goomba", "x": 540, "y": 8 },
                        { "thing": "Goomba", "x": 560, "y": 8 },
                        { "thing": "Goomba", "x": 760, "y": 8 },
                        { "thing": "Goomba", "x": 860, "y": 8 },
                        { "thing": "Goomba", "x": 1060, "y": 8 },
                        { "thing": "Goomba", "x": 1065, "y": 8 },
                        { "thing": "Goomba", "x": 1070, "y": 8 },
                        { "thing": "Goomba", "x": 1075, "y": 8 },
                        { "thing": "Goomba", "x": 1080, "y": 8 },
                        { "thing": "Goomba", "x": 1085, "y": 8 },
                        { "thing": "Goomba", "x": 1090, "y": 8 },
                        { "thing": "Goomba", "x": 1095, "y": 8 },
                        { "thing": "Goomba", "x": 1100, "y": 8 },
                        { "thing": "Goomba", "x": 1260, "y": 8 },
                        { "thing": "Goomba", "x": 1360, "y": 8 },
                        { "thing": "Goomba", "x": 1560, "y": 8 },
                        { "thing": "Goomba", "x": 1860, "y": 8 },
                        { "thing": "Goomba", "x": 2160, "y": 8 },
                        { "thing": "Goomba", "x": 3060, "y": 8 },

                        {"thing": "pic1", "x": 300, "y": 88},
                        {
                            "thing": "CustomText", "x": 310, "y": 30, "texts": [
                                {"text": "WE MEET!"}
                            ]
                        },
                        {"thing": "pic2", "x": 410, "y": 88},
                        {"thing": "pic3", "x": 520, "y": 88},
                        {"thing": "pic4", "x": 630, "y": 88},
                        {"thing": "pic5", "x": 740, "y": 88},
                        {
                            "thing": "Coin",
                            "x": 790,
                            "y": 30
                        },
                        {"thing": "pic6", "x": 850, "y": 88},
                        { "thing": "Block", "x": 900, "y": 32, "contents": "Star" },
                        {"thing": "pic7", "x": 960, "y": 88},
                        {"thing": "pic8", "x": 1070, "y": 88},
                        {"thing": "pic9", "x": 1210, "y": 105},
                        {"thing": "pic10", "x": 1290, "y": 88},
                        {"thing": "pic11", "x": 1430, "y": 105},
                        {"thing": "pic12", "x": 1510, "y": 88},
                        {"thing": "pic13", "x": 1620, "y": 88},
                        {"thing": "pic14", "x": 1730, "y": 88},
                        {"thing": "pic15", "x": 1840, "y": 88},
                        { "macro": "Pipe", "x": 1970, "height": 16, "transport": 2},
                        {
                            "thing": "CustomText", "x": 1970, "y": 20, "texts": [
                                {"text": "BUSAN"}
                            ]
                        },
                        {"thing": "Coin","x": 1975,"y": 25},
                        {"thing": "Coin","x": 1975,"y": 30},
                        {"thing": "Coin","x": 1975,"y": 35},
                        {"thing": "Coin","x": 1975,"y": 40},
                        {"thing": "Coin","x": 1975,"y": 45},
                        {"thing": "Coin","x": 1970,"y": 28},
                        {"thing": "Coin","x": 1965,"y": 30},
                        {"thing": "Coin","x": 1980,"y": 28},
                        {"thing": "Coin","x": 1985,"y": 30},
                        {"thing": "Coin","x": 1975,"y": 30},
                        { "macro": "Pipe", "x": 2150, "height": 16, "entrance": 1 },
                        {"thing": "pic16", "x": 2170, "y": 88},
                        {"thing": "pic17", "x": 2280, "y": 88},
                        {"thing": "pic18", "x": 2390, "y": 88},
                        {"thing": "pic19", "x": 2500, "y": 88},
                        {"thing": "pic20", "x": 2610, "y": 88},
                        {"thing": "Block", "x": 2740, "y": 32, "contents": ["Vine", { "transport": 3 }]},
                        {
                            "thing": "CustomText", "x": 2737, "y": 70, "texts": [
                                {"text": "JEJU"}
                            ]
                        },
                        {"thing": "Coin","x": 2741,"y": 40},
                        {"thing": "Coin","x": 2741,"y": 45},
                        {"thing": "Coin","x": 2741,"y": 50},
                        {"thing": "Coin","x": 2741,"y": 55},
                        {"thing": "Coin","x": 2741,"y": 60},
                        {"thing": "Coin","x": 2741,"y": 65},
                        {"thing": "Coin","x": 2736,"y": 60},
                        {"thing": "Coin","x": 2746,"y": 60},
                        {"thing": "Coin","x": 2731,"y": 55},
                        {"thing": "Coin","x": 2751,"y": 55},
                        {"thing": "pic21", "x": 2830, "y": 88},
                        {"thing": "pic22", "x": 2940, "y": 88},
                        {"thing": "pic23", "x": 3050, "y": 88},
                        {"thing": "pic24", "x": 3160, "y": 88},
                        {"thing": "Block", "x": 3290, "y": 32, "contents": ["Vine", { "transport": 4 }]},
                        {
                            "thing": "CustomText", "x": 3280, "y": 70, "texts": [
                                {"text": "BANGKOK"}
                            ]
                        },
                        {"thing": "Coin","x": 3291,"y": 40},
                        {"thing": "Coin","x": 3291,"y": 45},
                        {"thing": "Coin","x": 3291,"y": 50},
                        {"thing": "Coin","x": 3291,"y": 55},
                        {"thing": "Coin","x": 3291,"y": 60},
                        {"thing": "Coin","x": 3291,"y": 65},
                        {"thing": "Coin","x": 3286,"y": 60},
                        {"thing": "Coin","x": 3296,"y": 60},
                        {"thing": "Coin","x": 3281,"y": 55},
                        {"thing": "Coin","x": 3301,"y": 55},
                        {"thing": "pic25", "x": 3380, "y": 88},
                        { "macro": "EndInsideCastle", "x": 3490}
                    ]
                },
                {
                    "setting": "Underworld",
                    "blockBoundaries": true,
                    "creation": [
                        { "macro": "Ceiling", "x": 32, "width": 720 },
                        { "macro": "Floor", "x": 0, "y": 0, "width": 800},
                        { "macro": "Fill", "thing": "Brick", "x": 0, "y": 8, "ynum": 11, "yheight": 8 },
                        {"thing": "busan1", "x": 100, "y": 70},
                        {"thing": "busan2", "x": 210, "y": 70},
                        {"thing": "busan3", "x": 320, "y": 70},
                        {"thing": "busan4", "x": 430, "y": 70},
                        {"thing": "busan5", "x": 540, "y": 70},
                        {"thing": "busan6", "x": 650, "y": 70},
                        { "thing": "PipeHorizontal", "x": 760, "y": 16, "transport": 1, "width": 16 },
                        { "thing": "PipeVertical", "x": 776, "y": 88, "height": 88 },
                        { "macro": "Fill", "thing": "Brick", "x": 792, "y": 8, "ynum": 11, "yheight": 8 }
                    ]
                },
                {
                    "setting": "Sky",
                    "exit": 5,
                    "creation": [
                        { "thing": "Stone", "x": 0, "width": 32 },
                        { "thing": "Stone", "x": 40, "width": 655 },
                        { "thing": "Platform", "x": 128, "y": 24, "width": 24, "transport": true },
                        {"thing": "jeju1", "x": 100, "y": 88},
                        {"thing": "jeju2", "x": 210, "y": 88},
                        {"thing": "jeju3", "x": 320, "y": 88},
                        {"thing": "jeju4", "x": 430, "y": 88},
                        {"thing": "jeju5", "x": 540, "y": 88}
                    ]
                },
                {
                    "setting": "Sky Night",
                    "exit": 6,
                    "creation": [
                        { "thing": "Stone", "x": 0, "width": 32 },
                        { "thing": "Stone", "x": 40, "width": 992 },
                        { "thing": "Platform", "x": 128, "y": 24, "width": 24, "transport": true },
                        {"thing": "th1", "x": 100, "y": 88},
                        {"thing": "th2", "x": 210, "y": 88},
                        {"thing": "th3", "x": 320, "y": 88},
                        {"thing": "th4", "x": 430, "y": 88},
                        {"thing": "th5", "x": 540, "y": 88},
                        {"thing": "th6", "x": 650, "y": 88},
                        {"thing": "th7", "x": 760, "y": 88},
                        {"thing": "th8", "x": 900, "y": 105},
                        {"thing": "th9", "x": 980, "y": 88}
                    ]
                }
            ]
        }
    ])
};