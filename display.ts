//% weight=60 color=#FEC000 icon="\uf075"
namespace display {

    //% block
    //% message.defl="Hello"
    export function showMessage(message: string): void {
        player.execute(`title @s actionbar §6${message}`)
    }
}
