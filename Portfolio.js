let updateListEl = document.getElementById("Updatelist")
let door = 0

updateListEl.style.display = "none"

function DoorClickerUpdateList() {
    if (door===0) {
        updateListEl.style.display = "block"
        door = 1
    }
    else {
        updateListEl.style.display = "none"
        door = 0
    }
}