# PVE

## Hello

```template
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
    lever_locations = [world(376, 98, -381), world(376, 98, -395)]
    monster_pool = [mobs.monster(ZOMBIE), mobs.monster(SKELETON), mobs.monster(CAVE_SPIDER)]
}

function setup_world () {
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

function spawn_enemy (position: Position) {
    if (blocks.testForBlock(REDSTONE_TORCH, position)) {
        mobs.spawn(monster_pool._pickRandom(), position)
    }
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
}

loops.forever(function () {
    for (let room of room_locations) {
    	spawn_enemy(room)
    }
    loops.pause(10000)
})

setup_constants()
setup_world()
spawn_boss()
```