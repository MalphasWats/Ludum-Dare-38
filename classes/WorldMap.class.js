var WorldMap = function(parameters)
{
    var tiles = new glixl.SpriteSheet({context: my_game.context, src: 'sprite_sheets/world.png', frame_size: [256, 256]});
    parameters.sprite_sheet = tiles;
    parameters.tile_size = {width: 256, height: 256};
    glixl.Scene.call(this, parameters);
    
    
    this.add_tile(new glixl.Tile({ frame:0, x:0 , y:0, z:0, 
                                            width:256, height: 256 
                                          })
                                );
                                
    var world = new glixl.Sprite({frame: 0, x: 0, y:0, z:0, width:256, height:256});
    world.add_animation('searching', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 90);
    //world.set_animation('searching');
    world.update = function()
    {
        glixl.Sprite.prototype.update.call(this);
        
        /*if (this.frame == 0)
        {
            this.set_animation('idle');
        }*/
    }
    world.use = function()
    {
        
    }
    this.add_tile( world ); //TODO: hack because engine doesn't support clicking on Sprites! (Yet).
    this.add_sprite(world);
    
    var dialogue = [
        "The people of Cadencia have been reporting strange things appearing in woods and forests across the globe...",
        "... worried about the impact of mass panic on The Peace, the World Government have assigned a small team of scientists to investigate...",
        "... whilst collecting evidence from a recent sighting, Dr Janus went missing. His last transmission was garbled screams...",
        "... Dr Koralus, lead researcher on the newly instigated XenInt project has contacted you and asked you to help...",
        "... Take command of a team of ex-special forces soldiers and investigate Janus' disappearance."
    ];
    
    var diag = new DialogueDialog({x: 10, y:10, width:225, dialogue:dialogue});
    
    diag.show(this.mission_one, this);
}

WorldMap.prototype.mission_one = function()
{
    console.log('Mission One...');
    var launch = new LaunchMissionControl({x: 75, y:165});
    launch.show(this.test, this);
}

WorldMap.prototype.test = function()
{
    console.log('Launch!');
}

extend(glixl.Scene, WorldMap);