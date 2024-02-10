//% weight=65 color=300 icon="\uf06c"
namespace entities {

    // --- Queries ---

    //% block
    //% group=Queries weight=90
    //% target.shadow=minecraftTarget
    export function positionOf(target: TargetSelector): Position {
        let results = mobs.queryTarget(target)
        if (results.length > 0) {
            let entity = results[0]
            return world(Math.floor(entity.x), Math.floor(entity.y), Math.floor(entity.z))
        } else {
            return world(0, 0, 0)
        }
    }

    // -- Selectors --

    //% block="nearest $type=minecraftAnimal"
    //% group=Selectors weight=60
    export function nearest(type: number) {
        let target = mobs.entitiesByType(type)
        target.addRule("c", "1")
        return target
    }

    //% block="$type=minecraftAnimal with tag $tag"
    //% group=Selectors weight=50
    export function tagged(type: number, tag: string) {
        let target = mobs.entitiesByType(type)
        target.addRule("tag", tag)
        return target
    }

    // --- Tagging ---

    //% block="apply tag $tag to $target=minecraftTarget"
    //% group=Tagging weight=90
    export function tag(target: TargetSelector, tag: string) {
        player.execute(`tag ${target} add ${tag}`)
    }

    //% block="remove tag $tag from $target=minecraftTarget"
    //% group=Tagging weight=80
    export function untag(target: TargetSelector, tag: string) {
        player.execute(`tag ${target} remove ${tag}`)
    }

}