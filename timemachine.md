# Time Machine

## Time Machine @showdialog

Let's make a time machine!

![Code](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/timemachine.png)

## Make some variables

Make 2 new variables named ``||variables:enabled||`` and ``||variables:time||``.

## Make an on/off switch

Build this code: <br>

``||player:on||`` ``||blocks:Clock||`` ``||player:used||`` <br>
`­ ­` ``||logic:if||`` ``||variables:enabled||`` <br>
`­ ­ ­ ­` ``||variables:set enabled to||`` ``||logic:false||`` <br>
`­ ­ ­ ­` ``||interface:message||`` `TIME MACHINE ON` <br>
`­ ­` ``||logic:else||`` <br>
`­ ­ ­ ­` ``||variables:set enabled to||`` ``||logic:true||`` <br>
`­ ­ ­ ­` ``||interface:message||`` `TIME MACHINE OFF`

```blocks
player.onItemInteracted(CLOCK, function () {
    if (enabled) {
        enabled = false
        interface.showMessage("TIME MACHINE OFF")
    } else {
        enabled = true
        interface.showMessage("TIME MACHINE ON")
    }
})
```

## Create a main loop

Start with this code: <br>

``||loops:forever||`` <br>
`­ ­` ``||loops:while||`` ``||variables:enabled||``

```blocks
loops.forever(function () {
    while (enabled) {}
})
```

## Do some time machine maths

Add this code: <br>

``||variables:set time to||`` ``||math:270 -||`` ``||player: player orientation||`` <br>
``||variables:set time to||`` ``||math:66.66 x||`` ``||variables:time||`` <br>
``||gameplay:time set||`` ``||math:round||`` ``||variables:time||``

```blocks
loops.forever(function () {
    while (enabled) {
        time = 270 - player.getOrientation()
        time = 66.66 * time
        gameplay.timeSet(Math.round(time))
    }
})
```

## Well done!

<br>

**Right-click** with the **Clock** to enable the time machine. <br><br>

**Turn your head** to **turn time**.