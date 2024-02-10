# Explosive Arrows

## Explosive Arrows @showdialog

Let's make a bow that shoots explosive TNT arrows! <br>
In this tutorial we'll make 3 separate bits of code.

![Code](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/bow.png)

## When we shoot an arrow, spawn TNT

``||player:on arrow shot||`` <br>
``||player:­ ­||`` ``||mobs:spawn||`` ``||mobs:primed tnt||`` <br>
``||player:­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­||``

```blocks
player.onArrowShot(function () {
    mobs.spawn(PRIMED_TNT, pos(0, 0, 0)
})
```

## Mark the arrow we just shot

Add this line: <br>
``||entities:apply tag||`` ``tnt`` ``||entities:to||`` <br>
``||entities:nearest||`` ``||mobs:arrow||``

```blocks
player.onArrowShot(function () {
    mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
    entities.tag(entities.nearest(ARROW_PROJECTILE_MOB), "tnt")
})
```

## Create a main loop

``||loops:on start||`` <br>
``||loops:­ ­||`` ``||loops:while||`` ``||logic:true||`` <br>
``||loops:­ ­||`` ``||loops:do||`` <br>
``||loops:­ ­||`` ``||loops:­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­||`` <br>
``||loops:­ ­ ­ ­ ­ ­ ­ ­ ­||``


```blocks
while (true) {}
```

## Stick the TNT to our arrow

Add this line: <br>
``||mobs:teleport||`` ``||mobs:all||`` ``||mobs:primed tnt||`` <br>
``||mobs: to||`` ``||mobs:arrow||`` ``||entities:with tag||`` ``tnt``

```blocks
while (true) {
    mobs.teleportToPlayer(
        mobs.entitiesByType(PRIMED_TNT),
        entities.tagged(ARROW_PROJECTILE_MOB, "tnt")
    )
}
```

## Finally, unmark our old arrows

``||player:on||`` ``||blocks:item Bow||`` ``||player:used||`` <br>
``||player:­ ­||`` ``||entities:remove tag||`` ``tnt`` ``||entities:from||`` <br>
``||player:­ ­||`` ``||mobs:all entities||`` <br>
``||player:­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­ ­||``

```blocks
player.onItemInteracted(BOW, function () {
    entities.untag(mobs.target(ALL_ENTITIES), "tnt")
})
```