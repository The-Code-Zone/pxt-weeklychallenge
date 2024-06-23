# Super Scaffolder

## Super Scaffolder @showdialog

This hack will let us climb scaffolds infinitely high!

![Hint](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/hint.png)

```template
{}
```

## Step 1

Create a new variable named ``||variables:pos||``.

## Step 2

Find ``||loops:on start||`` and ``||loops:while true||``. Connect them together.

```blocks
while(true) {}
```

## Step 3

Inside of your ``||loops:while true||`` loop, add this: <br>

``||variables:set pos to||`` <br>
``||player:player world position||``

```blocks
while(true) {
    pos = player.position()
}
```

## Step 4

Add this inside your loop: <br>

``||logic:if||`` ``||blocks:test for Scaffold at||`` ``||variables:pos||`` ``||logic:then||``

```blocks
while (true) {
    pos = player.position()
    if (blocks.testForBlock(SCAFFOLDING, pos)) {}
}
```

## Step 5

Add this inside of your ``||logic:if||`` statement: <br>

``||variables:set pos to||`` <br>
``||variables:pos||`` ``||positions:+ ~0 ~1 ~0||``

```blocks
while (true) {
    pos = player.position()
    if (blocks.testForBlock(SCAFFOLDING, pos)) {
        pos = positions.add(pos, pos(0, 1, 0))
    }
}
```

## Step 6

Add this inside of your ``||logic:if||`` statement: <br>

``||blocks:replace with Scaffold||`` <br>
``||blocks:when block is Air||`` <br>
``||blocks:from||`` ``||variables:pos||`` <br>
``||blocks:to||`` ``||variables:pos||``

```blocks
while (true) {
    pos = player.position()
    if (blocks.testForBlock(SCAFFOLDING, pos)) {
        pos = positions.add(pos, pos(0, 1, 0))
        blocks.replace(SCAFFOLDING, AIR, pos, pos)
    }
}
```

## Now try it!

When you **climb a scaffold**, you will be able to keep climbing it until you touch the sky.