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

<a id="aftermath"></a>

# The Aftermath

*{2017-04-25 09:45 GMT+1}*: It's Tuesday. Both the Compo and Jam are finished and I didn't end up submitting my game. I thought I'd write a little bit about why, simply because it's interesting (to me) and I'm still very happy with what I *did* achieve over the weekend.

## Issue the first

I'm a 37-year-old husband, father and teacher. Having 24 uninterrupted hours all of my very own is a *huge* indulgance, so 48 is pretty much impossible. That's ok, this is my life and I like it. One of the reasons for doing the compo this time around was to see if it was even vaguely feasible. I'm counting it as a success - I got a few good slices of time to get things done, because my children are *very* good and my wife is incredibly supportive. I *did* feel a little guilty that I was merrily doing my thing without them, however, this guilt did mostly evaporate on about the 10th or 12th "Daaaadddddy! Noah's taking my <thing of most intense focus right now>", or "Daddy, why are you drawing a picture of the world?" and my favorite "Why on earth did you shoot your mummy in the face with your nerf gun? What have you been told about shooting it at people?".

So that was that. Thankfully I have a few months to build up some credit before the next one!

## 'Frame-gine' immaturity

I mentioned at the start that I was using [glixl](https://github.com/MalphasWats/glixl). I have no idea whether it's a [framework or an engine or just a scaffold](https://twitter.com/MalphasWats/status/844832027035680768). I end up using framework and engine interchangably.

That aside I've been working on glixl for some time and I've been through quite a few iterations of it. This was the first time I'd used this version of it 'properly' and it showed its arse a few times. I spent about 2 or 3 hours chasing down an annoying bug where it wouldn't display things in the right z-order on the very bottom row. Most of the time I spent was mindless hacking "Oh, does it work if I just add 1 here" bullshit, which didn't help. I ended up getting annoyed at myself and forcing myself to sit down and think about what was going on properly. I fixed the bug but I wasted a lot of time.

I ended up making a few improvements and fixes to glixl along the way, so it's definitely in better shape than it was. Definitely a win.

## Art

I'm not really an artist. I sometimes flirt with the idea that maybe I am in my own simple way and every now and then I produce something that I don't hate. But I'm not at all consistent and most of all I am **SLOW**. Faced with the challenge of creating a bunch of different creatures, units and structures, each with at least 4 facing directions and associated animations, I balked. I threw some *very* simple animations in at the end and even they improved the look of the thing hugely, but this only served to reinforce how important getting the art right was!

I am making some progress in my arting, but it's slow progress.

## Idea

I got my idea pretty much as I woke up on the Saturday morning. I tried hard to reign in the scope of what I wanted to do to make it achievable and I think what I had was good - endless in scope ultimately, but could be made with just 2 or 3 'missions' for the same of the jam. I found a story to tell and I'd like to try and get it out properly.

