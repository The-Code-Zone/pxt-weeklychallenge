# Agent Bodyguard

## Find the closest monster

First, we need to create a variable to find the closest monster.

Make a new variable, and name it ``||variable:cm|``.


## Find the closest monster

Next up, ``||loops:on start||``, we need to set the variable ``||variable:cm|`` to ``||mobs:all entities||``.

Don't forget to check the hint if you get stuck! <br>

&nbsp;&nbsp;&nbsp;⬇
```blocks
cm = mobs.target(ALL_ENTITIES)
```


## Find the closest monster

Now we have a variable that finds all entities. But we want it to only find monsters!

Find this block: <br>
``||variable:selector ▼||`` ``||mobs:add rule||``

Add it to the code, then change the variable to ``||variable:cm|``.

Finally, change the values to say:
`"family"` ``||mobs:equals||`` `"monster"`

&nbsp;&nbsp;&nbsp;⬇
```blocks
let cm = mobs.target(ALL_ENTITIES)
cm.addRule("family", "monster")
```


## Find the closest monster

Our variable now finds all monsters, but it should find only the closest one.

Let's add another rule, just like in the previous step, but this time it will say: <br>
``||variable:cm ▼||`` ``||mobs:add rule||`` `"c"` ``||mobs:equals||`` `"1"`

`"c"` is short for "closest."

&nbsp;&nbsp;&nbsp;⬇
```blocks
let cm = mobs.target(ALL_ENTITIES)
cm.addRule("family", "monster")
cm.addRule("c", "1")
```


## Make the Agent attack

We've finished finding the closest monster! Next, we need to get the Agent to attack it!

We want the agent to attack forever, so first of all let's add a ``||loops:while||`` ``||logic:true||`` loop.

&nbsp;&nbsp;&nbsp;⬇
```blocks
let cm = mobs.target(ALL_ENTITIES)
cm.addRule("family", "monster")
cm.addRule("c", "1")
while (true) {}
```


## Make the Agent attack

For the Agent's attack to hit, we need to teleport it to the monster.

Try this: <br>
``||mobs:teleport my Agent||`` <br>
``||mobs:to||`` ``||variable:cm||``

&nbsp;&nbsp;&nbsp;⬇
```blocks
let cm = mobs.target(ALL_ENTITIES)
cm.addRule("family", "monster")
cm.addRule("c", "1")
while (true) {
    mobs.teleportToPlayer(mobs.target(MY_AGENT), cm)
}
```


## Make the Agent attack

This is the final step! We just need to the Agent to attack.

Simply, ``||agent:agent attack forward||``.

&nbsp;&nbsp;&nbsp;⬇
```blocks
let cm = mobs.target(ALL_ENTITIES)
cm.addRule("family", "monster")
cm.addRule("c", "1")
while (true) {
    mobs.teleportToPlayer(cm, mobs.target(MY_AGENT))
    agent.attack(FORWARD)
}
```


## Well done!

Now run your code and watch the Agent destroy the monsters.
