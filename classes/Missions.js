var MissionOne = function()
{
    var tiles = new glixl.SpriteSheet({context: my_game.context, src: 'sprite_sheets/tiles.png', frame_size: [32, 32]});
    glixl.Scene.call(this, {context: my_game.context, height:256, width:256, sprite_sheet: tiles, tiles_size: {width: 32, height: 32}});
    
    this.ambient_light = 1.0;

    for (var r=0 ; r<this.MAP_SIZE.height ; r++)
	{
        for (var c=0 ; c<this.MAP_SIZE.width ; c++)
		{
            this.add_tile(new glixl.Tile({ frame:this.MAP[r*this.MAP_SIZE.width+c], x:c*this.TILE_SIZE , y:r*this.TILE_SIZE, z:0, 
                                            width:this.TILE_SIZE, height: this.TILE_SIZE 
                                          })
                          );
        }
	}
	
	var sprite = new Stalker(2*this.TILE_SIZE-6, 1*this.TILE_SIZE);
	this.add_sprite(sprite);
	
	var sprite = new Scout(7*this.TILE_SIZE, 7*this.TILE_SIZE, 'Brian');
	this.add_sprite(sprite);
	
	var dialogue = [
        "Brian: What the? Are you seeing this?",
        "Com: Yeah, we're seeing it - you're gonna have to get closer. We need a sample.",
        "Brian: Roger that, keep the engines running, I want this to be quick!",
    ];
    
    var diag = new DialogueDialog({x: 10, y:2*this.TILE_SIZE+10, width:225, dialogue:dialogue});
    
    diag.show(this.play, this);
}

MissionOne.prototype.MAP_SIZE = {width:8, height:8};
MissionOne.prototype.TILE_SIZE = 32;
MissionOne.prototype.MAP = [ 2, 2, 0, 1, 1, 1, 1, 1,
                             2, 3, 1, 1, 1, 1, 1, 1,
                             1, 1, 1, 0, 1, 1, 0, 1,
                             1, 1, 1, 1, 0, 1, 1, 1,
                             1, 1, 1, 1, 1, 1, 1, 1,
                             1, 0, 1, 1, 1, 1, 1, 1,
                             1, 1, 1, 1, 1, 0, 1, 1,
                             1, 1, 0, 1, 1, 1, 0, 1,
                             1, 0, 0, 1, 1, 1, 1, 1,
                            ];

MissionOne.prototype.play = function()
{
    console.log("Go!");
}

extend(glixl.Scene, MissionOne);