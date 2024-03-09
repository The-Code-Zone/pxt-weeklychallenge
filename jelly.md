# Jelly Jump

## Jelly Jump @showdialog

We're gonna build some jelly platforms to get down from the airship.

![Hint](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/hint.png)

![Code](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/jellyjump.png)

## Make a new variable

Create a variable called ``||variables:height||``.

## Make a new function

Create a ``||functions:slime pad||`` function with **3** Number parameters ``||functions:x||`` ``||functions:y||`` and ``||functions:z||``.

![Function](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/slimepad.png) <br>
add **3** Number parameters 

## Build a slime pad

Add these to the function: <br>

``||blocks:fill with||`` *``||blocks:Any Block!||``* <br>
``||blocks:from||`` ``||positions:world||`` ``||variables:x||`` ``||variables:y||`` ``||variables:z||`` <br>
``||blocks:to||`` ``||positions:world||`` ``||math:x + 4||`` ``||variables:y||`` ``||math:z + 4||``<br>

``||blocks:fill with||`` ``||blocks:Slime Block||`` <br>
``||blocks:from||`` ``||positions:world||`` ``||math:x + 1||`` ``||variables:y||`` ``||math:z + 1||``<br>
``||blocks:to||`` ``||positions:world||`` ``||math:x + 3||`` ``||variables:y||`` ``||math:z + 3||``<br>

Use **right-click** and "Duplicate" to do this step faster!

```blocks
function slime_pad (x: number, y: number, z: number) {
    blocks.fill(
    LIME_GLAZED_TERRACOTTA,
    world(x, y, z),
    world(x + 4, y, z + 4),
    FillOperation.Replace
    )
    blocks.fill(
    SLIME_BLOCK,
    world(x + 1, y, z + 1),
    world(x + 3, y, z + 3),
    FillOperation.Replace
    )
}
```

## Make a script to place the slime pads

``||player:on chat command||`` `build` <br>
`­ ­` ``||variables:set height to||`` `250` <br>
`­ ­` ``||loops:repeat||`` `20` ``||loops:times||`` <br>
`­ ­ ­ ­` ``||functions:call slime pad||`` <br>
`­ ­ ­ ­ ­ ­` ``||math:pick random||`` `0` ``||math:to||`` `10` <br>
`­ ­ ­ ­ ­ ­` ``||variables:height||`` <br>
`­ ­ ­ ­ ­ ­` ``||math:pick random||`` `0` ``||math:to||`` `10` <br>
`­ ­ ­ ­` ``||functions:­ ­ ­ ­||`` <br>
`­ ­ ­ ­` ``||variables:change height by||`` `-10` <br>
`­ ­` ``||loops:­ ­ ­ ­||`` <br>
``||player:­ ­ ­ ­||``


```blocks
player.onChat("build", function () {
    height = 250
    for (let index = 0; index < 20; index++) {
        slime_pad(randint(0, 10), height, randint(0, 10))
        height += -10
    }
})

function slime_pad (x: number, y: number, z: number) {
    blocks.fill(
    LIME_GLAZED_TERRACOTTA,
    world(x, y, z),
    world(x + 4, y, z + 4),
    FillOperation.Replace
    )
    blocks.fill(
    SLIME_BLOCK,
    world(x + 1, y, z + 1),
    world(x + 3, y, z + 3),
    FillOperation.Replace
    )
}
```

## Well done!

Press **T** to open the chat, and use the "build" command. <br>

Then jump off!