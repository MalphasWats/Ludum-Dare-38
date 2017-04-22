/* Ludum Dare 38 */

var LD38 = function()
{	
    glixl.Game.call(this, {});
    
    var title_sheet = new glixl.SpriteSheet({context: this.context, src: 'sprite_sheets/title.png', frame_size: [256, 256]});
    
    var title_scene = new TitleScene({context: this.context, width: 256, height: 256, sprite_sheet: title_sheet, 
                                 tile_size: {width: 256, height: 256} });
    
    this.set_scene(title_scene);
}

LD38.prototype.update = function()
{
    document.getElementById('fps').innerHTML = this.fps;
}

extend(glixl.Game, LD38);