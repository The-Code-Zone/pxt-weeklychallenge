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

``||blocks:place Scaffold at||`` <br>
``||variables:pos||`` <br>
``||positions:+ ~0 ~1 ~0||``

```blocks
while (true) {
    pos = player.position()
    if (blocks.testForBlock(SCAFFOLDING, pos)) {
        blocks.place(SCAFFOLDING, positions.add(
        pos,
        pos(0, 1, 0)
        ))
    }
}
```

## Now try it!

When you **climb a scaffold**, you will be able to keep climbing it until you touch the sky.