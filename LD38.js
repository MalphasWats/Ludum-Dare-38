/* Ludum Dare 38 */

var LD38 = function()
{	
    glixl.Game.call(this, {});
    
    var scene = new glixl.Scene({ context: this.context });
    
    this.set_scene(scene);
}

LD38.prototype.update = function()
{
    document.getElementById('fps').innerHTML = this.fps;
}

extend(glixl.Game, LD38);