var Mob = function(parameters)
{
    parameters.z = 32;
    parameters.width = 32;
    parameters.height = 32;
    glixl.Sprite.call(this, parameters);
    
    this.faction = 0;
    
    //this.light = new glixl.Light({x: this.x, y: this.y, radius:80, colour: [0.7, 0.7, 0.85]});
}

Mob.prototype.update = function()
{
    glixl.Sprite.prototype.update.call(this);
    
    //this.light.x = Math.floor(this.x+this.width/2);
    //this.light.y = Math.floor(this.y-this.height/2);
}
extend(glixl.Sprite, Mob);



var Stalker = function(x, y)
{
    Mob.call(this, {frame:9, x:x, y:y, speed:45, x_offset:-8});

    this.faction = 1;
    this.awareness_radius = 2; // Tiles, all directions.
}

Stalker.prototype.update = function()
{
    Mob.prototype.update.call(this);
    
    // AI
    // Search for bio matter
    // move towards bio matter
    
}
extend(Mob, Stalker);



var Scout = function(x, y)
{
    Mob.call(this, {frame:20, x:x, y:y, speed:50, x_offset:8});
}

Scout.prototype.update = function()
{
    Mob.prototype.update.call(this);
    
    var destination = my_game.event_queue[0];
    
    if (destination)
    {
        this.path = my_game.scene.find_path(this, destination);
        this.path.shift(); // first coords are current location
        this.destination = this.path.shift();
    }
}
extend(Mob, Scout);