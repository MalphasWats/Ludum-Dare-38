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
    Mob.call(this, {frame:9, x:x, y:y, speed:36, x_offset:-8});
    
    this.add_animation('walking', [10, 11], 110);
    this.add_animation('munching', [9, 12], 110);

    this.faction = 1;
    this.awareness_radius = 2; // Tiles, all directions.
    
    this.status = 'idle';
}

Stalker.prototype.update = function()
{
    Mob.prototype.update.call(this);
    
    // AI
    // Search for bio matter
    if (this.status == 'idle')
    {
        this.set_animation('idle');
        var neighbour_tiles = my_game.scene.get_tile_block( {x1: this.x-(this.width*this.awareness_radius), 
                                                             x2: this.x+(this.width*this.awareness_radius),
                                                             y1: this.y-(this.height*this.awareness_radius), 
                                                             y2: this.y+(this.height*this.awareness_radius),
                                                             z: this.z } 
                                                           );
        
        var bio_tiles = [2, 3];
        var bio_tile_list = [];
        for (var i=0 ; i<neighbour_tiles.length ; i++)
        {
            if ( bio_tiles.indexOf(neighbour_tiles[i].frame) > -1 )
                bio_tile_list.push(neighbour_tiles[i]);
        }
        
        if (bio_tile_list.length == 0)
        {
            this.status = 'roaming';
        }
        else
        {
            // move towards closest bio matter
            var nearest_tile = neighbour_tiles.shift();
            var nearest_tile_distance = Math.abs(nearest_tile.x-this.x) + Math.abs(nearest_tile.y-this.y)
            for (var i=0 ; i<neighbour_tiles.length ; i++)
            {
                var d = (Math.abs(neighbour_tiles[i].x-this.x) + Math.abs(neighbour_tiles[i].y-this.y));
                if ( d < nearest_tile_distance )
                {
                    nearest_tile_distance = d;
                    nearest_tile = neighbour_tiles[i];
                }
            }

            this.path = my_game.scene.find_path(this, nearest_tile);
            this.path.shift(); // first coords are current location
            this.path.pop(); // last coords are acutal tile
            
            this.destination = this.path.shift();
            if (this.destination)
                this.status = 'moving';
            else
                this.status = 'feeding';
        }
    }
    else if(this.status == 'moving')
    {
        this.set_animation('walking');
        if (!this.destination)
        {
            this.status = 'idle';
        }
    }
    else if(this.status == 'roaming')
    {
        // pick a random direction and move 1 tile
        var dir = Math.floor(Math.random() * (4 - 0)) + 0;
        var destination;
        if (dir == 0)
        {
            destination = my_game.scene.get_topmost_item(this.x-this.width-1, this.y);
        }
        else if (dir == 1)
        {
            destination = my_game.scene.get_topmost_item(this.x, this.y-this.height-1);
        }
        else if (dir == 2)
        {
            destination = my_game.scene.get_topmost_item(this.x+this.width+1, this.y);
        }
        else
        {
            destination = my_game.scene.get_topmost_item(this.x, this.y+this.height+1);
        }
        
        this.path = my_game.scene.find_path(this, destination);
        this.path.shift(); // first coords are current location
        //this.path.pop(); // last coords are acutal tile
        this.destination = this.path.shift();
        
        this.status = 'moving';
    }
    else if(this.status == 'feeding')
    {
        this.set_animation('munching');
        var nearby_sprites = my_game.scene.get_sprites( {x1: this.x-(this.width*this.awareness_radius+this.width/2), 
                                                             x2: this.x+(this.width*this.awareness_radius+this.width/2),
                                                             y1: this.y-(this.height*this.awareness_radius+this.height/2), 
                                                             y2: this.y+(this.height*this.awareness_radius+this.height/2),
                                                             z: this.z } 
                                                           );
        // remove self!
        nearby_sprites.splice(nearby_sprites.indexOf(this), 1);                                                   
        if (nearby_sprites.length > 0)
        {
            for (var i=0 ; i<nearby_sprites.length ; i++)
            {
                if (nearby_sprites[i].faction != this.faction)
                {
                    this.target = nearby_sprites[i];
                    this.status = 'attacking';
                    this.path = my_game.scene.find_path(this, this.target);
                    this.path.shift(); // first coords are current location
                    this.destination = this.path.shift();
                }
            }
        }
    }
    else if(this.status == 'attacking')
    {
        this.set_animation('munching');
        var d = Math.abs(this.target.x - this.x) + Math.abs(this.target.y - this.y);
        if (d > this.width*this.awareness_radius+this.width/2)
        {
            this.target = false;
            this.status = 'idle';
        }
        else
        {
            this.path = my_game.scene.find_path(this, this.target);
            this.path.shift(); // first coords are current location
            this.destination = this.path.shift();
            
            if (!this.destination)
            {
                console.log('munch');
            }
        }
    }
    //console.log(this.status)
}
extend(Mob, Stalker);



var Scout = function(x, y)
{
    Mob.call(this, {frame:20, x:x, y:y, speed:58, x_offset:8});
    
    this.add_animation('walking', [21, 22], 140);
}

Scout.prototype.update = function()
{
    Mob.prototype.update.call(this);
    
    var destination = my_game.event_queue[0];
    
    // Is this a sprite or a tile?
    
    if (destination)
    {
        this.path = my_game.scene.find_path(this, destination);
        this.path.shift(); // first coords are current location
        this.destination = this.path.shift();
        
        this.set_animation('walking');
    }
    
    if (!this.destination)
    {
        this.set_animation('idle');
    }
}
extend(Mob, Scout);