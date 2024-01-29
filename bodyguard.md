# Agent Bodyguard

## Find the closest monster

First, we need to create a variable to find the closest monster.

Make a new variable, and name it ``||variable:closest_monster|``.

Hint: You could choose a different name!


## Find the closest monster

Next up, ``||loops:on start||``, we need to set the variable ``||variable:closest_monster|`` to ``||mobs:all entities||``.

Don't forget to check the hint if you get stuck! <br>

&nbsp;&nbsp;&nbsp;⬇
```blocks
closest_monster = mobs.target(ALL_ENTITIES)
```


## Find the closest monster

Now we have a variable that finds all entities. But we want it to only find monsters!

Find this block: <br>
``||variable:selector ▼||`` ``||mobs:add rule||``

Add it to the code, then change the variable to ``||variable:closest_monster|``.

Finally, change the values to say:
`"family"` ``||mobs:equals||`` `"monster"`

&nbsp;&nbsp;&nbsp;⬇
```blocks
let closest_monster = mobs.target(ALL_ENTITIES)
closest_monster.addRule("family", "monster")
```


## Find the closest monster

Our variable now finds all monsters, but it should find only the closest one.

Let's add another rule, just like in the previous step, but this time it will say: <br>
``||variable:closest_monster ▼||`` ``||mobs:add rule||`` `"c"` ``||mobs:equals||`` `"1"`

`"c"` is short for "closest."

&nbsp;&nbsp;&nbsp;⬇
```blocks
let closest_monster = mobs.target(ALL_ENTITIES)
closest_monster.addRule("family", "monster")
closest_monster.addRule("c", "1")
```


## Make the Agent attack

We've finished finding the closest monster! Next, we need to get the Agent to attack it!

We want the agent to attack forever, so first of all let's add a ``||loops:while||`` ``||logic:true||`` loop.

&nbsp;&nbsp;&nbsp;⬇
```blocks
let closest_monster = mobs.target(ALL_ENTITIES)
closest_monster.addRule("family", "monster")
closest_monster.addRule("c", "1")
while (true) {}
```


## Make the Agent attack

For the Agent's attack to hit, we need to teleport it to the monster.

Try this: <br>
``||mobs:teleport my Agent||`` <br>
``||mobs:to||`` ``||variable:closest_monster||``

&nbsp;&nbsp;&nbsp;⬇
```blocks
let closest_monster = mobs.target(ALL_ENTITIES)
closest_monster.addRule("family", "monster")
closest_monster.addRule("c", "1")
while (true) {
    mobs.teleportToPlayer(mobs.target(MY_AGENT), closest_monster)
}
```


## Make the Agent attack

This is the final step! We just need the Agent to attack.

Simply, ``||agent:agent attack forward||``.

&nbsp;&nbsp;&nbsp;⬇
```blocks
let closest_monster = mobs.target(ALL_ENTITIES)
closest_monster.addRule("family", "monster")
closest_monster.addRule("c", "1")
while (true) {
    mobs.teleportToPlayer(closest_monster, mobs.target(MY_AGENT))
    agent.attack(FORWARD)
}
```


## Well done!

Now run your code and watch the Agent destroy the monsters.
