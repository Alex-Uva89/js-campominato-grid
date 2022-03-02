
let areaContainBoxes = document.getElementById('box_game');

for (let i = 1; i <= 100; i++) {
    areaContainBoxes.innerHTML += `<div class="box">${i}</div>`   
}