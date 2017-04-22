var TestLevel = function()
{
    var tiles = new glixl.SpriteSheet({context: my_game.context, src: 'sprite_sheets/tiles.png', frame_size: [32, 32]});
    glixl.Scene.call(this, {context: my_game.contex, height:256, width:256, sprite_sheet: tiles, tiles_size: {width: 256, height: 256}});
    
    
    var MAP_SIZE = {width:8, height:8};
    var TILE_SIZE = 32;
    
    for (var r=0 ; r<MAP_SIZE.height ; r++)
	{
        for (var c=0 ; c<MAP_SIZE.width ; c++)
		{
            this.add_tile(new glixl.Tile({ frame:1, x:c*TILE_SIZE , y:r*TILE_SIZE, z:0, 
                                            width:TILE_SIZE, height: TILE_SIZE 
                                          })
                          );
        }
	}
    
    
    
    console.log(this.MAP[1])
    
    
}

TestLevel.prototype.MAP = [0];

extend(glixl.Scene, TestLevel);