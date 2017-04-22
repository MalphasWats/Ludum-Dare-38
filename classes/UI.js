DialogueDialog = function DialogueDialog(parameters)
{
    glixl.Dialog.call(this, parameters);
    
    this.dialogue = parameters.dialogue || ["..."];
    this.page = 0;
    
    this.dialogue_container = document.createElement('p');
    this.dialogue_container.innerHTML = this.dialogue[this.page];
    
    this.add_element(this.dialogue_container);
    
    this.btn = new glixl.Button({x: 10, y:10, title:'Next'});
    this.add_control(this.btn, this.next, this);
}

DialogueDialog.prototype.next = function()
{
    this.dialogue_container.innerHTML = this.dialogue[++this.page];
    if (this.page == this.dialogue.length-1)
    {
        this.btn.set_content('OK');
        this.btn.set_action(this.close, this);
    }
}

DialogueDialog.prototype.set_content = function(dialogue)
{
    this.dialogue = dialogue;
    this.page = 0;
    
    this.dialogue_container.innerHTML = this.dialogue[this.page];
}

extend(glixl.Dialog, DialogueDialog);


LaunchMissionControl = function LaunchMissionControl(parameters)
{
    glixl.Popover.call(this, parameters);
    
    this.next_mission = parameters.mission 
    
    this.btn = new glixl.Button({x: 10, y:10, title:'Launch'});
    this.add_control(this.btn);//, function() {}, this); // TODO
}

extend(glixl.Popover, LaunchMissionControl);