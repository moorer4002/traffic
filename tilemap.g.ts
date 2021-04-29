// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0c000a000d0d0a0e090d0d0a0e090d0d0d0d0a01090d0d0a01090d0d0d0d0a01090d0d0a01090d0d0c0c0701060c0c0701060c0c1002020402020202040202121102020302020202030202130b0b0501080b0b0501080b0b0d0d0a01090d0d0a01090d0d0d0d0a01090d0d0a01090d0d0d0d0a0f090d0d0a0f090d0d`, img`
2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath5,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
