# Piggy Pilots

## Piggy Pilots @showdialog

Farmer John wants us to make his pigs fly.

```template
{}
```

## Step 1

Find a block called <br>
``||loops:on start||``. <br>

Click and drag it into your code.

```blocks
'
```

## Step 2

Find a block called <br>
``||mobs:apply 🥾 to nearest player||``. <br>

Drag it and connect it to <br>
``||loops:on start||``.

```blocks
mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 10, 1)
```

## Step 3

In your code, click on ``||mobs:🥾||``. <br>

You'll see a menu with icons for each potions effect. We're going to select ``||mobs:☁ Levitation||``.

```blocks
mobs.applyEffect(LEVITATION, mobs.target(NEAREST_PLAYER), 10, 1)
```

## Step 4

Find a block called <br>
``||mobs:all animal 🥚||``. <br>

Drag it into your code, and **replace** ``||mobs:nearest player||``.

```blocks
mobs.applyEffect(LEVITATION, mobs.entitiesByType(CHICKEN), 10, 1)
```

## Step 5

In your code, click on ``||mobs: animal 🥚||``. <br>

Select ``||mobs:pig||``.

```blocks
mobs.applyEffect(LEVITATION, mobs.entitiesByType(PIG), 10, 1)
```

## Step 6

The first number in your code is called **duration**, which is how long the pigs will fly.

Click on the **number 10**, then **drag the slider** all the way up.

```blocks
mobs.applyEffect(LEVITATION, mobs.entitiesByType(PIG), 600, 1)
```

## Try it!

Click **start**, and watch the piggies fly away.