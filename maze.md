# Portman's Labyrinth

## Portman's Labyrinth @showdialog

We have to write code to make the teleporters work, so we can get through the maze.

![Hint](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/hint.png)

```template
player.onChat("leave", function () {
    player.teleport(world(420, 95, -411))
})
function setup_dictionary () {
    colours = [
    RED_SHULKER_BOX,
    ORANGE_SHULKER_BOX,
    BLUE_SHULKER_BOX,
    LIME_SHULKER_BOX,
    RED_STAINED_GLASS,
    ORANGE_STAINED_GLASS,
    BLUE_STAINED_GLASS,
    LIME_STAINED_GLASS
    ]
    coordinates = [
    world(419, 95, -395),
    world(437, 95, -378),
    world(402, 95, -368),
    world(409, 95, -383),
    world(424, 95, -363),
    world(404, 95, -392),
    world(436, 95, -378),
    world(437, 95, -386)
    ]
}
setup_dictionary()
```

## Step 1

Find the ``||loops:on start||`` script. <br>

Add ``||loops:while true||`` to the end of the script.

```blocks
call_setup_dictionary
while(true) {}
```

## Step 2

Inside your ``||loops:while true||`` loop, add this: <br>

``||loops:for index from 0 to 7||``

```blocks
call_setup_dictionary
while(true) {
    for (let index = 0; index <= 7; index++) {}
}
```

## Step 3

Inside your ``||loops:for index||`` loop, add this: <br>

``||logic:if||`` ``||blocks:test for||`` <br>
``||arrays:colours get value at index||`` <br>
``||positions:at ~0 ~-1 ~0||`` ``||logic:then||`` <br> <br>

(You can drag ``||variables:index||`` from inside your code.)

```blocks
call_setup_dictionary
while (true) {
    for (let index = 0; index <= 7; index++) {
        if (blocks.testForBlock(colours[index], pos(0, -1, 0))) {}
    }
}
```

## Step 4

Inside your ``||logic:if||`` statement, add this:

``||player:teleport to||`` <br>
``||arrays:coordinates get value at index||``

```blocks
call_setup_dictionary
while (true) {
    for (let index = 0; index <= 7; index++) {
        if (blocks.testForBlock(colours[index], pos(0, -1, 0))) {
            player.teleport(coordinates[index])
        }
    }
}
```

## Try it out!

You'll now be able to go through Dr. Portman's **teleporters** and **complete the maze**.