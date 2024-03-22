# Grabbity Wand

## Grabbity Wand @showdialog

We're gonna make a **wand** that lets us **pick mobs up**. We'll use it to return Mr. Piddlesworth back to Jim!

![Hint](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/hint.png)

![Code](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/grabbity.png)

## Make a variable

Make a new variable called ``||variables:on||``.

## Make a main loop

``||loops:on start||`` <br>
`­ ­` ``||loops:while||`` ``||logic:true||`` <br>
`­ ­ ­ ­` ``||mobs:teleport||`` <br>
`­ ­ ­ ­ ­ ­` ``||mobs:all entities||`` ``||entities:with tag||`` `g` <br>
`­ ­ ­ ­` ``||mobs:to||`` ``||positions:^ 0 ^ 2 ^ 3||`` <br>
`­ ­` ``||loops:­ ­ ­ ­||`` <br>
``||loops:­ ­ ­ ­||``

```blocks
while (true) {
    mobs.teleportToPosition(
    entities.targetWithTag(mobs.target(ALL_ENTITIES), "g"),
    posLocal(0, 2, 3)
    )
}
```

## Create a toggle

``||player:on||`` ``||blocks:Blaze Rod||`` ``||player:used||`` <br>
`­ ­` ``||logic:if||`` ``||variables:on||`` ``||logic:then||`` <br>
`­ ­ ­ ­` ``||variables:set on to||`` ``||logic:false||`` <br>
`­ ­ ­ ­` ``||entities:remove tag||`` `g` ``||entities: from||`` <br>
`­ ­ ­ ­ ­ ­` ``||mobs:all entities||`` <br>
`­ ­` ``||logic:⨁ ­ ­||`` <br>
``||player:­ ­ ­ ­||``

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    if (on) {
        on = false
        entities.untag(mobs.target(ALL_ENTITIES), "g")
    }
})
```

## Add to the toggle

Click on ``||logic:⨁||`` to add an ``||logic:else||`` clause:

``||logic:else||`` <br>
`­ ­` ``||variables:set on to||`` ``||logic:true||`` <br>
`­ ­` ``||entities:apply tag||`` `g` ``||entities:to||`` <br>
`­ ­ ­ ­` ``||entities:nearest entity||`` <br>
`­ ­` ``||display:show message||`` <br>
`­ ­ ­ ­` ``||entities:nearest entity||`` ``||mobs:to string||`` <br>
``||logic:⨁ ­ ­||``

![Else](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/clickelse.png)

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    if (on) {
        on = false
        entities.untag(mobs.target(ALL_ENTITIES), "g")
    } else {
        on = true
        entities.tag(entities.nearestEntity(), "g")
        display.showMessage(entities.nearestEntity().toString())
    }
})
```

## Hold the wand and right-click mobs to pick them up

Return **Mr. Piddlesworth** to Jim!