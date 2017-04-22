var glixl = (function(glixl)
{
    glixl.Widget = function Widget(parameters)
    {
        this.canvas = document.getElementsByTagName('canvas')[0];
        this.parent = this.canvas.parentNode;
        
        this.x = parameters.x || 0;
        this.y = parameters.y || 0;
        
        
        
        this.x_offset = this.canvas.offsetLeft;
        this.y_offset = this.canvas.offsetTop;
        
        this.widget = document.createElement('div');
        this.widget.className = 'glixl-widget';
        
        this.widget.style.top = this.y+this.y_offset+'px';
        this.widget.style.left = this.x+this.x_offset+'px';
    }
    
    glixl.Widget.prototype.set_content = function(content)
    {
        this.widget.innerHTML = content;
    }
    
    glixl.Dialog = function Dialog(parameters)
    {
        glixl.Widget.call(this, parameters);
        
        this.width = parameters.width || 300;
        
        this.widget.className = 'glixl-dialog';
        this.widget.style.width = this.width+'px';
    }
    
    glixl.Dialog.prototype.add_control = function(control, action, that)
    {
        if (action)
            control.action = action.bind(that);
        else
            control.action = this.close.bind(this);
        this.widget.appendChild(control.widget);
    }
    
    glixl.Dialog.prototype.add_element = function(element)
    {
        this.widget.appendChild(element);
    }
    
    glixl.Dialog.prototype.show = function(when_closed, that)
    {
        this.parent.appendChild(this.widget);
        this.on_close = when_closed.bind(that);
    }
    
    glixl.Dialog.prototype.close = function()
    {
        this.parent.removeChild(this.widget);
        this.on_close();
    }
    
    extend(glixl.Widget, glixl.Dialog);
    
    
    glixl.Button = function Button(parameters)
    {
        glixl.Widget.call(this, parameters);
        
        this.title = parameters.title || 'Press';
        
        this.widget = document.createElement('a');
        this.widget.href = '#';
        this.widget.className = 'glixl-button';
        
        this.set_content(this.title);
        
        this.widget.addEventListener('click', this.click.bind(this), false);
    }

    glixl.Button.prototype.set_action = function(func, that)
    {
        this.action = func.bind(that);
    }
    
    glixl.Button.prototype.action = function()
    {
        // stub
    }
    
    glixl.Button.prototype.click = function(e)
    {
        e.preventDefault();
        
        return this.action();
    }
    
    extend(glixl.Widget, glixl.Button);
    
    
    glixl.Popover = function Popover(parameters)
    {
        glixl.Widget.call(this, parameters);
        
        this.widget.className = 'glixl-popover';
    }
    
    extend(glixl.Dialog, glixl.Popover);
        
        
    return glixl;
    
})(glixl || {});