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
                {"area": 1},
                {"entry": "Plain"},
                {"area": 2},
                {"xloc": 128},
                {"xloc": 168}
            ],
            "areas": [
                {
                    "setting": "Overworld",
                    "blockBoundaries": true,
                    "creation": [
                        {"macro": "Pattern", "pattern": "BackRegular", "repeat": 5},
                        {"macro": "Floor", "width": 552},
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
                                {"text": "2OI8/OI/I4"}
                            ]
                        },
                        {"thing": "2017121601", "x": 20, "y": 88},
                        {"thing": "2017121602", "x": 130, "y": 88},
                        {"thing": "2017121603", "x": 240, "y": 88},
                        {"thing": "Block", "x": 128, "y": 32, "contents": ["Vine", { "transport": 1 }]},
                        {"thing": "Brick", "x": 160, "y": 32},
                        {"thing": "Block", "x": 168, "y": 32, "contents": ["Vine", { "transport": 2 }]},
                        {"thing": "Goomba", "x": 176, "y": 8},
                        {"thing": "Brick", "x": 176, "y": 32},
                        {"thing": "Block", "x": 176, "y": 64},
                        {"thing": "Block", "x": 184, "y": 32},
                        {"thing": "Brick", "x": 192, "y": 32},
                        {"macro": "Pipe", "x": 224, "height": 16, "piranha": true},
                        {"macro": "Pipe", "x": 304, "height": 24},
                        {"thing": "Goomba", "x": 340, "y": 8},
                        {"macro": "Pipe", "x": 368, "height": 32},
                        {"thing": "Goomba", "x": 412, "y": 8},
                        {"thing": "Goomba", "x": 422, "y": 8},
                        {"macro": "Pipe", "x": 456, "height": 32},
                        {"thing": "Block", "x": 512, "y": 40, "contents": "Mushroom1Up", "hidden": true},
                        {"macro": "Floor", "x": 568, "width": 120},
                        {"thing": "Brick", "x": 616, "y": 32},
                        {"thing": "Block", "x": 624, "y": 32, "contents": "Mushroom"},
                        {"thing": "Brick", "x": 632, "y": 32},
                        {"thing": "Brick", "x": 640, "y": 32},
                        {"thing": "Goomba", "x": 640, "y": 72},
                        {"thing": "Brick", "x": 648, "y": 64},
                        {"thing": "Brick", "x": 656, "y": 64},
                        {"thing": "Goomba", "x": 656, "y": 72},
                        {"macro": "Fill", "thing": "Brick", "x": 664, "y": 64, "xnum": 5, "xwidth": 8},
                        {"macro": "Floor", "x": 712, "width": 512},
                        {"macro": "Fill", "thing": "Brick", "x": 728, "y": 64, "xnum": 3, "xwidth": 8},
                        {"thing": "Brick", "x": 752, "y": 32, "contents": "Coin"},
                        {"thing": "Block", "x": 752, "y": 64},
                        {"thing": "Goomba", "x": 776, "y": 8},
                        {"thing": "Goomba", "x": 788, "y": 8},
                        {"thing": "Brick", "x": 800, "y": 32},
                        {"thing": "Brick", "x": 808, "y": 32, "contents": "Star"},
                        {"thing": "Block", "x": 848, "y": 32},
                        {"thing": "Koopa", "x": 856, "y": 12},
                        {"thing": "Block", "x": 872, "y": 32},
                        {"thing": "Block", "x": 872, "y": 64, "contents": "Mushroom"},
                        {"thing": "Block", "x": 896, "y": 32},
                        {"thing": "Goomba", "x": 912, "y": 8},
                        {"thing": "Goomba", "x": 924, "y": 8},
                        {"thing": "Brick", "x": 944, "y": 32},
                        {"macro": "Fill", "thing": "Brick", "x": 968, "y": 64, "xnum": 3, "xwidth": 8},
                        {"macro": "Fill", "thing": "Goomba", "x": 992, "y": 8, "xnum": 4, "xwidth": 16},
                        {"thing": "Brick", "x": 1024, "y": 64},
                        {"thing": "Brick", "x": 1032, "y": 32},
                        {"thing": "Block", "x": 1032, "y": 64},
                        {"thing": "Brick", "x": 1040, "y": 32},
                        {"thing": "Block", "x": 1040, "y": 64},
                        {"thing": "Brick", "x": 1048, "y": 64},
                        {"thing": "Stone", "x": 1072, "y": 8},
                        {"thing": "Stone", "x": 1080, "y": 16, "height": 16},
                        {"thing": "Stone", "x": 1088, "y": 24, "height": 24},
                        {"thing": "Stone", "x": 1096, "y": 32, "height": 32},
                        {"thing": "Stone", "x": 1120, "y": 32, "height": 32},
                        {"thing": "Stone", "x": 1128, "y": 24, "height": 24},
                        {"thing": "Stone", "x": 1136, "y": 16, "height": 16},
                        {"thing": "Stone", "x": 1144, "y": 8},
                        {"thing": "Stone", "x": 1184, "y": 8},
                        {"thing": "Stone", "x": 1192, "y": 16, "height": 16},
                        {"thing": "Stone", "x": 1200, "y": 24, "height": 24},
                        {"thing": "Stone", "x": 1208, "y": 32, "height": 32},
                        {"thing": "Stone", "x": 1216, "y": 32, "height": 32},
                        {"macro": "Floor", "x": 1240, "width": 656},
                        {"thing": "Stone", "x": 1240, "y": 32, "height": 32},
                        {"thing": "Stone", "x": 1248, "y": 24, "height": 24},
                        {"thing": "Stone", "x": 1256, "y": 16, "height": 16},
                        {"thing": "Stone", "x": 1264, "y": 8},
                        {"macro": "Pipe", "x": 1304, "height": 16},
                        {"thing": "Brick", "x": 1344, "y": 32},
                        {"thing": "Brick", "x": 1352, "y": 32},
                        {"thing": "Block", "x": 1360, "y": 32},
                        {"thing": "Brick", "x": 1368, "y": 32},
                        {"thing": "Goomba", "x": 1392, "y": 8},
                        {"thing": "Goomba", "x": 1404, "y": 8},
                        {"macro": "Pipe", "x": 1432, "height": 16},
                        {"thing": "Stone", "x": 1448, "y": 8},
                        {"thing": "Stone", "x": 1456, "y": 16, "height": 16},
                        {"thing": "Stone", "x": 1464, "y": 24, "height": 24},
                        {"thing": "Stone", "x": 1472, "y": 32, "height": 32},
                        {"thing": "Stone", "x": 1480, "y": 40, "height": 40},
                        {"thing": "Stone", "x": 1488, "y": 48, "height": 48},
                        {"thing": "Stone", "x": 1496, "y": 56, "height": 56},
                        {"thing": "Stone", "x": 1504, "y": 64, "height": 64, "width": 16},
                        {"macro": "EndOutsideCastle", "x": 1584, "y": 0, "transport": {"map": "1-2"}}
                    ]
                }, {
                    "setting": "Sky",
                    "exit": 3,
                    "creation": [
                        { "thing": "Stone", "width": 32 },
                        { "thing": "Stone", "x": 40, "width": 456 },
                        { "macro": "Fill", "thing": "Coin", "x": 121, "y": 55, "xnum": 16, "xwidth": 8 },
                        { "thing": "Platform", "x": 128, "y": 24, "width": 24, "transport": true },
                        {"thing": "2017121601", "x": 20, "y": 88},
                        {"thing": "2017121602", "x": 130, "y": 88},
                        {"thing": "2017121603", "x": 240, "y": 88},
                        { "macro": "Fill", "thing": "Coin", "x": 257, "y": 71, "xnum": 3, "xwidth": 8 },
                        { "macro": "Fill", "thing": "Coin", "x": 289, "y": 63, "xnum": 16, "xwidth": 8 },
                        { "macro": "Fill", "thing": "Coin", "x": 425, "y": 71, "xnum": 3, "xwidth": 8 },
                        { "macro": "Fill", "thing": "Coin", "x": 553, "y": 7, "xnum": 3, "xwidth": 8 }
                    ]
                },
                {
                    "setting": "Underworld",
                    "exit": 4,
                    "creation": [
                        { "thing": "Stone", "width": 32 },
                        { "thing": "Stone", "x": 40, "width": 456 },
                        { "macro": "Fill", "thing": "Coin", "x": 121, "y": 55, "xnum": 16, "xwidth": 8 },
                        { "thing": "Platform", "x": 128, "y": 24, "width": 24, "transport": true },
                        {"thing": "DecorativeBack", "x": 20, "y": 88},
                        { "macro": "Fill", "thing": "Coin", "x": 257, "y": 71, "xnum": 3, "xwidth": 8 },
                        { "macro": "Fill", "thing": "Coin", "x": 289, "y": 63, "xnum": 16, "xwidth": 8 },
                        { "macro": "Fill", "thing": "Coin", "x": 425, "y": 71, "xnum": 3, "xwidth": 8 },
                        { "macro": "Fill", "thing": "Coin", "x": 553, "y": 7, "xnum": 3, "xwidth": 8 }
                    ]
                },
            ]
        }
    ])
};