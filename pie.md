# Pie Farm

## Pie Farm @showdialog

Let's make our Agent farm ingredients for a pumpkin pie!

![Hint](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/hint.png)

![Code](https://raw.githubusercontent.com/amg-12/pxt-tutorial/main/docs/static/pie.png)

## Create a harvest function

``||functions:function harvest||`` <br>
`­ ­` ``||agent:agent turn right||`` <br>
`­ ­` ``||agent:agent move forward by 2||`` <br>

``||functions:Functions||`` are inside the **Advanced** tab.

```blocks
function harvest () {
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 2)
}
```

## Add to harvest function

``||loops:repeat||`` `5` ``||loops:times||`` <br>
`­ ­` ``||agent:agent destroy left||`` <br>
`­ ­` ``||agent:agent destroy right||`` <br>
`­ ­` ``||agent:agent collect all||`` <br>
`­ ­` ``||agent:agent move forward by||`` `1` <br>
``||loops:­ ­ ­ ­||``

```blocks
function harvest () {
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 2)
    for (let index = 0; index < 5; index++) {
        agent.destroy(LEFT)
        agent.destroy(RIGHT)
        agent.collectAll()
        agent.move(FORWARD, 1)
    }
}
```

## Add to harvest function

``||agent:agent move forward by||`` `1` <br>
``||agent:agent collect all||`` <br>

```blocks
function harvest () {
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 2)
    for (let index = 0; index < 5; index++) {
        agent.destroy(LEFT)
        agent.destroy(RIGHT)
        agent.collectAll()
        agent.move(FORWARD, 1)
    }
    agent.move(FORWARD, 1)
    agent.collectAll()
}
```

## Create main loop

``||loops:on start||`` <br>
`­ ­` ``||agent:agent teleport to||`` <br>
`­ ­ ­ ­` ``||positions:world||`` ``||positions:0||`` ``||positions:250||`` ``||positions:0||`` <br>
`­ ­` ``||loops:while||`` ``||logic:true||`` <br>
`­ ­ ­ ­` ``||loops:repeat||`` `4` ``||loops:times||`` <br>
`­ ­ ­ ­ ­ ­` ``||functions:call harvest||`` <br>
`­ ­ ­ ­` ``||loops:­ ­ ­ ­||`` <br>
`­ ­ ­ ­` ``||agent:agent drop all forward||`` <br>
`­ ­` ``||loops:­ ­ ­ ­||`` <br>
``||loops:­ ­ ­ ­||``

```blocks
agent.teleport(world(0, 250, 0), WEST)
while (true) {
    for (let index = 0; index < 4; index++) {
        call_harvest
    }
    agent.dropAll(FORWARD)
}
```

## Well done!

Go and bake some pies.