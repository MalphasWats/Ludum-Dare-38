---
title: Dev Log
---

# Ludum-Dare-38
My Entry to LD38 - "Small World" - Dev Log

# Day 1

*{2017-04-22 07:00 GMT+1}*: I'm an old man, getting up at 2am? No thank you! I begin my jam.

*{2017-04-22 07:29 GMT+1}*: I have completed breakfast (granola and yoghurt, see 'Old Man' above.) I have completed my boilerplate using my homegrown WebGL engine [glixl](https://github.com/MalphasWats/glixl).

*{2017-04-22 07:31 GMT+1}*: [Initial Repo Push](https://github.com/MalphasWats/Ludum-Dare-38/tree/gh-pages)!

## Idea

*{2017-04-22 07:39 GMT+1}*: Ok, my idea is that it's a small world, but it's *your* world and it needs defending. Creatures from some *other* place are bleeding through into yours. They're hostile and they eat bio matter. Your lush green world is slowly being consumed. Deploy your forces and protect the world!

*{2017-04-22 07:39 GMT+1}*: Right, so, artwork.

*{2017-04-22 09:03 GMT+1}*: A title screen! And a location:

![Title Screen](images/title.gif)

Art is slow.

## Code

*{2017-04-22 09:56 GMT+1}*: Finally located the bug in my framework - it was trying to push empty uniforms because there aren't any lights defined! Onward!

*{2017-04-22 09:56 GMT+1}*: I have a title scene that when clicked loads a 'test level' of just green tiles. Scene switching works! I also have a scary creature from *somewhere else*:

![Creature](images/creature.png)

## Story

*{2017-04-22 14:44 GMT+1}*: I've got some simple UI elements working and I've written the back story. I think I know where I'm going!

<video src="images/intro.mov" controls>
Sorry, your browser doesn't support embedded videos, 
but don't worry, you can <a href="images/intro.mov">download it</a>.
</video>

## Missions

*{2017-04-22 18:09 GMT+1}*: After a bit of a break, I've been working on the mission system - I have a *Scout* unit now! I'm really pleased with the UI work I did earlier.

*{2017-04-22 21:33 GMT+1}*: I took another break for dinner and stuff - y'know, bit of parenting - My scenes were looking a little dull, I remembered that glixl has a default ambient lighting level less than 1.0 (0.68 in fact). After I set each of my scenes to 1.0, things were looking brighter. Eventually, I'd probably want to add lighting, but at this stage I just want it to look bright. 

I made some trees, they're not great but they'll do for now. 

I'm not convinced I chose the right scale for my tiles and sprites at the start. I've got a **lot** of art still to do and I'm pretty sure I won't get it all finished but I've made a lot of progress with the overall engine so the event is already a win for me. I'll keep working on it tomorrow and see where I get to.


# Day 2

*{2017-04-23 11:12 GMT+1}*: Slow start this morning, I'm probably not going to have a game to submit, but we'll see. I'm enjoying working on it and I think it's a good idea, so definitely something I'm going to keep working on after the end of the Jam. Spent the last hour chasing down a bug I'd forgotten about in my framework - in adding movement for my squad (currently just 1 dude), I remembered that the engine messes up the draw order on the bottom tile row! Added some fudge (+1 FTW) and it was away.

I also found a typo in new code that was stopping the event manager finding the correct tile clicked! Bug-fix Sunday.

The tile-size choice has bitten me again now too, because sprites can't get close enough to each other. I'm going to stick with it for now though and add some more fudge - it's a wider concept issue: how do you deal with different tile sizes in one game. I haven't decided the best way to solve it yet.

*{2017-04-23 16:36 GMT+1}*: I've spent almost the whole day fighting a really annoying bug. I'm not entirely sure why it was so much trouble. Scratch "+1 FTW", the fudge fix fell apart once I added higher tiles (trees) - it's been an issue before, items placed at a higher z-level than the ground were correspondingly offset on the y-axis, which is what I *want*, but not for the first 'layer'. The 'ground' should sit beneath **everything**, which it was, but then also everything *on* the floor was floating. It makes drawing maps a pain and I wanted to fix it but it took ages.

Almost certain I won't be able to submit anything for the compo. *Maybe* I can get something together for the jam but we'll see. I have work tomorrow!

## Artificial Intelligence

*{2017-04-23 19:48 GMT+1}*: Today I've largely been hacking away at the engine, which is a little annoying because it has meant there's been very little *game* progress. I think I've finally got that working sensibly now, so I've been able to implement some **very** basic AI behaviour in the creature: It'll start off looking for food, ignoring you. Once it finds food, it will start eating. If you approach it whilst it is eating, it will chase you and attempt to attack you. Currently however, there's no concept of health or of attacking back!

Obviously, I'd like to have multiple different types of creature eventually, with different behaviours. Also, there's no animations so far, but they just take so much time and I'm slow at it!

## Animations!

*{2017-04-23 20:21 GMT+1}*: 2-frame animations added to both the creature and the soldier. 30 minutes. They're crap animations but they actually make a huge difference - suddenly the creature is alive! You can also determine what mode it's in (roaming, feeding, attacking) based on which of its 2 animations it's doing and whether or not it's moving.