var TitleScene = function(parameters)
{
    glixl.Scene.call(this, parameters);
    
    this.ambient_light = 1.0;
    
    var title = new glixl.Sprite({frame: 23, x: 0, y:0, z:0, width:256, height:256});
    title.add_animation('intro', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], 120);
    title.set_animation('intro');
    title.update = function()
    {
        glixl.Sprite.prototype.update.call(this);
        
        if (this.frame == 22)
        {
            this.set_animation('idle');
        }
    }
    title.use = function()
    {
        my_game.set_scene( new WorldMap() );
        //my_game.set_scene( new MissionOne() );
    }
    this.add_tile( title ); //TODO: hack because engine doesn't support clicking on Sprites! (Yet).
    this.add_sprite(title);
}
extend(glixl.Scene, TitleScene);