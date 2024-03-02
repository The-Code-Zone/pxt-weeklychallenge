# Castle Stairs

## Castle Stairs @showdialog

Let's build some stairs for the castle.

![Code](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/stairs.png)

## Build a pillar

``||player:on chat command||`` `stairs` ``||player:+||``<br>
`­ ­` ``||builder:builder teleport to||`` <br>
`­ ­ ­ ­` ``||positions:world||`` `165` ``||positions:||`` ­ `63` ``||positions:||`` ­ `-85` <br>
`­ ­` ``||builder:builder place mark||`` <br>
`­ ­` ``||builder:builder raise wall with||`` <br>
`­ ­ ­ ­` ``||blocks:Blackstone Wall||`` ``||builder:of||`` `10` <br>
`­ ­` ``||builder:builder move||`` <br>
`­ ­ ­ ­` ``||builder:forward||`` `-1` ``||builder:up||`` `0` ``||builder:left||`` `1`

```blocks
player.onChat("stairs", function () {
    builder.teleportTo(world(165, 63, -85))
    builder.mark()
    builder.raiseWall(BLACKSTONE_WALL, 10)
    builder.shift(-1, 0, 1)
})
```

## Build stairs

Add this code to the <br>
``||player:chat command||`` script: <br>

``||loops:repeat||`` `10` ``||loops:times||`` <br>
`­ ­` ``||builder:place||`` ``||blocks:Cobblestone Slab||`` <br>
`­ ­` ``||builder:builder move forward by ||`` `1` <br>
`­ ­` ``||builder:place||`` ``||blocks:Cobblestone Block||`` <br>
`­ ­` ``||builder:builder move forward||`` `1` ``||builder:up||`` `1` <br>
`­ ­` ``||builder:builder turn right||``


```blocks
player.onChat("stairs", function () {
    builder.teleportTo(world(165, 63, -85))
    builder.mark()
    builder.raiseWall(BLACKSTONE_WALL, 10)
    builder.shift(-1, 0, 1)
    for (let index = 0; index < 10; index++) {
        builder.place(COBBLESTONE_SLAB)
        builder.move(FORWARD, 1)
        builder.place(COBBLESTONE)
        builder.shift(1, 1, 0)
        builder.turn(RIGHT_TURN)
    }
})
```

## Now run the chat command

Press **T** to open the chat, then write "**stairs**".