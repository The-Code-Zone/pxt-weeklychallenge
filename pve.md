# PVE

## Hello

```template
function setup_world () {
    monsters = mobs.target(ALL_ENTITIES)
    monsters.withinRadius(20)
    monsters.addRule("family", "monster")
    mobs.kill(
    monsters
    )
    for (let room of room_locations) {
        blocks.place(REDSTONE_TORCH, room)
    }
    for (let lever of lever_locations) {
        blocks.place(AIR, lever)
    }
    player.execute(
    "replaceitem block " + chest_location + " slot.container 0 lever 2"
    )
    player.execute(
    "clear @s lever"
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    LEVER,
    1
    )
}
function spawn_boss () {
    mobs.spawn(mobs.monster(WITHER_SKELETON), boss_location)
    entities.replaceItem(GOLDEN_HELMET, Slot.Head, mobs.entitiesByType(mobs.monster(WITHER_SKELETON)))
    entities.replaceItem(NETHERITE_CHESTPLATE, Slot.Chest, mobs.entitiesByType(mobs.monster(WITHER_SKELETON)))
    entities.replaceItem(NETHERITE_LEGGINGS, Slot.Legs, mobs.entitiesByType(mobs.monster(WITHER_SKELETON)))
    entities.replaceItem(NETHERITE_BOOTS, Slot.Feet, mobs.entitiesByType(mobs.monster(WITHER_SKELETON)))
    entities.replaceItem(SHIELD, Slot.Offhand, mobs.entitiesByType(mobs.monster(WITHER_SKELETON)))
    mobs.enchant(
    mobs.entitiesByType(mobs.monster(WITHER_SKELETON)),
    "fire_aspect",
    2
    )
    mobs.applyEffect(HEALTH_BOOST, mobs.entitiesByType(mobs.monster(WITHER_SKELETON)), 600, 3)
    player.execute(
    "effect @e[type=wither_skeleton] instant_damage 1 255"
    )
}
player.onChat("start", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    setup_world()
    spawn_boss()
    for (let room2 of room_locations) {
        spawn_enemy(room2)
    }
})
loops.forever(function () {
    loops.pause(2000)
    position = world(0, 0, 0)
    while (!(blocks.testForBlock(REDSTONE_TORCH, position))) {
        position = room_locations._pickRandom()
    }
    spawn_enemy(position)
})
function spawn_enemy (position: Position) {
    if (blocks.testForBlock(REDSTONE_TORCH, position)) {
        mobs.spawn(monster_pool._pickRandom(), position)
    }
}
function setup_constants () {
    room_locations = [
    world(370, 97, -377),
    world(370, 97, -392),
    world(370, 97, -397),
    world(376, 97, -397),
    world(370, 97, -382)
    ]
    boss_location = world(376, 97, -392)
    chest_location = world(378, 97, -382)
    lever_locations = [
    world(376, 98, -381),
    world(376, 98, -395),
    world(374, 98, -386),
    world(0, 0, 0)
    ]
    monster_pool = [mobs.monster(ZOMBIE), mobs.monster(SKELETON), mobs.monster(CAVE_SPIDER)]
}
setup_constants()
```