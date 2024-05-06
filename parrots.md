# Parrot Party

## Parrot Party @showdialog

Let's spawn some guests for Owlbert's party!

```template
{}
```

## Step 1

Find a block called <br>
``||player:on player walk||``. <br>

Click and drag it into your code.

```blocks
player.onTravelled(WALK, function () {})
```

## Step 2

Find a block called <br>
``||mobs:spawn animal 🥚 at ~0 ~0 ~0||``. <br>

Drag it and connect it to <br>
``||player:on player walk||``.

```blocks
player.onTravelled(WALK, function () {
    mobs.spawn(CHICKEN, pos(0, 0, 0))
})
```

## Step 3

In your code, click on ``||mobs:animal 🥚||``. <br>

You'll see a menu with eggs for every different mob. We're going to select ``||mobs:parrot||``.

```blocks
player.onTravelled(WALK, function () {
    mobs.spawn(PARROT, pos(0, 0, 0))
})
```

## Try it!

Click **start**, then walk around the church and see.