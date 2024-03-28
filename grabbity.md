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

Return **Mr. Piddlesworth** to Jim! <br> <br>

Or **keep following the tutorial** to add **bonus enhancements** to your grabbity wand.

## Bonus step: Accuracy

At the top of your ``||loops:on start||`` script, add this line: <br>
``||variables:set selector to||`` <br>
`­ ­` ``||entities:nearest entity||`` <br>

Then, inside the ``||loops:while||`` ``||logic:true||`` loop, add this line: <br>
``||variables:selector||`` ``||mobs:set coordinate||`` <br>
`­ ­` ``||positions:^ 0 ^ 1 ^ 5||`` ``||positions:to world||`` <br>

Finally, in your ``||player:on||`` ``||blocks:item||`` ``||player:used||`` script, replace both instances of ``||entities:nearest entity||`` with ``||variables:selector||``.

This step will **improve the accuracy** of your grabbity wand, so you can always pick up the right mob.

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    if (on) {
        on = false
        entities.untag(mobs.target(ALL_ENTITIES), "g")
    } else {
        on = true
        entities.tag(selector, "g")
        display.showMessage(selector.toString())
    }
})
let selector = entities.nearestEntity()
while (true) {
    selector.atCoordinate(posLocal(0, 1, 5).toWorld())
    mobs.teleportToPosition(
    entities.targetWithTag(mobs.target(ALL_ENTITIES), "g"),
    posLocal(0, 2, 3)
    )
}
```

## Bonus step: Multiplayer

Replace all 3 instances of the tag `"g"` in your code with ``||player:player name||``. <br>

This step will allow your grabbity gun to **work in a multiplayer game**.

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    if (on) {
        on = false
        entities.untag(mobs.target(ALL_ENTITIES), player.name())
    } else {
        on = true
        entities.tag(selector, player.name())
        display.showMessage(selector.toString())
    }
})
let selector = entities.nearestEntity()
while (true) {
    selector.atCoordinate(posLocal(0, 1, 5).toWorld())
    mobs.teleportToPosition(
    entities.targetWithTag(mobs.target(ALL_ENTITIES), player.name()),
    posLocal(0, 2, 3)
    )
}
```

## Bonus step: Sounds

After clicking **Done**, click on **Extensions** and select the **Music** extension. <br>

Use it to **add sounds** when you pick mobs up and put them down!

![Bonus](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/grabbitybonus.png)
