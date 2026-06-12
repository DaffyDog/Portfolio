let dupdateListEl = document.getElementById("Updatelist")
let supdateListEl = document.getElementById("SoundUpdatelist")
let tupdateListEl = document.getElementById("TamagotchiUpdatelist")
let door = 0
let sound = 0
let dragon = 0

dupdateListEl.style.display = "none"
supdateListEl.style.display = "none"
tupdateListEl.style.display = "none"

function doorClickerUpdateList() {
    if (door===0) {
        dupdateListEl.style.display = "block"
        door = 1
    }
    else {
        dupdateListEl.style.display = "none"
        door = 0
    }
}
function soundboardUpdateList() {
    if (door===0) {
        supdateListEl.style.display = "block"
        sound = 1
    }
    else {
        supdateListEl.style.display = "none"
        sound = 0
    }
}
function dragonUpdateList() {
    if (dragon===0) {
        tupdateListEl.style.display = "block"
        dragon = 1
    }
    else {
        tupdateListEl.style.display = "none"
        dragon = 0
    }
}
