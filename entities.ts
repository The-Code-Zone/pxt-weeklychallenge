let position = pos(0, 0, 0)

//% weight=65 color=#764bcc icon="\uf06c"
namespace entities {

    // --- Queries ---

    //% block
    //% group=Queries
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

}
