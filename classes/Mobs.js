var Mob = function(frame, x, y)
{
    glixl.Sprite.call(this, {frame: frame, x: x, y:y, z:32, width:32, height:32});
    
    //this.light = new glixl.Light({x: this.x, y: this.y, radius:80, colour: [0.7, 0.7, 0.85]});
}

Mob.prototype.update = function()
{
    glixl.Sprite.prototype.update.call(this);
    
    /*var destination = my_game.event_queue[0];
    
    if (destination)
    {
        this.path = my_game.scene.find_path(this, destination);
        this.path.shift(); // first coords are current location
        this.destination = this.path.shift();
    }*/
    
    //this.light.x = Math.floor(this.x+this.width/2);
    //this.light.y = Math.floor(this.y-this.height/2);
}
extend(glixl.Sprite, Mob);


var Stalker = function(x, y)
{
    Mob.call(this, 9, x, y);
}

Stalker.prototype.update = function()
{
    Mob.prototype.update.call(this);
}
extend(Mob, Stalker);

var Scout = function(x, y)
{
    Mob.call(this, 20, x, y);
}

Scout.prototype.update = function()
{
    Mob.prototype.update.call(this);
    
    //console.log(my_game.event_queue[0]);
    
    var destination = my_game.event_queue[0];
    
    if (destination)
    {
        
        this.path = my_game.scene.find_path(this, destination);
        this.path.shift(); // first coords are current location
        this.destination = this.path.shift();
    }
}
extend(Mob, Scout);