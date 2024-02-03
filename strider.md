# Strider Rider

## Summon a Strider

``||loops:on start||``, use ``||mobs:spawn animal||`` to summon a ``||mobs:Strider||``.

```blocks
mobs.spawn(STRIDER, pos(0, 0, 0))
```

## Get a stick to control the Strider

Use ``||mobs:give||`` and ``||blocks:item||`` to give yourself a <br>
``||blocks:Warped Fungus on a Stick||``.

```blocks
mobs.spawn(STRIDER, pos(0, 0, 0))
mobs.give(mobs.target(LOCAL_PLAYER), WARPED_FUNGUS_ON_A_STICK, 1)
```

## Get a saddle to ride the Strider

Use ``||mobs:give||`` and ``||blocks:item||`` to give yourself a ``||blocks:Saddle||``.
<br><br>
(Try doing **right-click** and "Duplicate" on the previous code!)

```blocks
mobs.spawn(STRIDER, pos(0, 0, 0))
mobs.give(mobs.target(LOCAL_PLAYER), WARPED_FUNGUS_ON_A_STICK, 1)
mobs.give(mobs.target(LOCAL_PLAYER), SADDLE, 1)
```

## Start a new bit of code

Start with: <br>
``||loops:forever||`` <br>
``||loops:while||`` ``||logic:true||``.

```blocks
loops.forever(function () {
    while (true) {}
})
```

## Make a new variable

We'll need a variable named ``||variables:position||``.

## Get the Strider's position

Set ``||variables:position||`` to ``||entities:position of ||`` ``||mobs:all animal||``.
<br><br>
Change the animal type to ``||mobs:Strider||``.

```blocks
loops.forever(function () {
    while (true) {
        let position = entities.positionOf(mobs.entitiesByType(STRIDER))
    }
})
```

## Place lava under the Strider

Add this block: <br>
``||blocks:replace with||`` ``||blocks:lava||`` <br>
``||blocks:when block is||`` ``||blocks:air||`` <br>
``||blocks:from||`` ``||variables:position||`` <br>
``||blocks:to||`` ``||variables:position||``

```blocks
loops.forever(function () {
    while (true) {
        let position = entities.positionOf(mobs.entitiesByType(STRIDER))
        blocks.replace(LAVA, AIR, position, position)
    }
})
```

## Now ride the Strider!

**You did it!** Now, put the **saddle** on the **Strider** and ride it. 
<br><br>
Use the **Warped Fungus on a Stick** to control where the Strider goes.

```blocks
mobs.spawn(STRIDER, pos(0, 0, 0))
mobs.give(mobs.target(LOCAL_PLAYER), WARPED_FUNGUS_ON_A_STICK, 1)
mobs.give(mobs.target(LOCAL_PLAYER), SADDLE, 1)
loops.forever(function () {
    while (true) {
        let position = entities.positionOf(mobs.entitiesByType(STRIDER))
        blocks.replace(LAVA, AIR, position, position)
    }
})
```