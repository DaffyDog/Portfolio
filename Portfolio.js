let dupdateListEl = document.getElementById("Updatelist")
let supdateListEl = document.getElementById("SoundUpdatelist")
let door = 0

dupdateListEl.style.display = "none"
supdateListEl.style.display = "none"

function DoorClickerUpdateList() {
    if (door===0) {
        dupdateListEl.style.display = "block"
        door = 1
    }
    else {
        dupdateListEl.style.display = "none"
        door = 0
    }
}
function SoundboardUpdateList() {
    if (door===0) {
        supdateListEl.style.display = "block"
        door = 1
    }
    else {
        supdateListEl.style.display = "none"
        door = 0
    }
}
