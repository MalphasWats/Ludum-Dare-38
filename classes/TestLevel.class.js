var TestLevel = function(parameters)
{
    glixl.Scene.call(this, parameters);
    
    
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
    
    
    
    
    
    
}
extend(glixl.Scene, TestLevel);