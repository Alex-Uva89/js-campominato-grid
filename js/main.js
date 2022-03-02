
let areaContainBoxes = document.getElementById('box_game');
const checkBox = document.querySelectorAll('.box');
const btnPlay = document.getElementById('play');
const btnSelect = document.getElementById('level_user');


btnPlay.addEventListener('click', function(){
    if (btnSelect.value == 'easy'){
        clickEasy();
    } else if (btnSelect.value == 'medium'){
        clickMedium();
    } else if (btnSelect.value == 'hard'){
        clickHard();
    } else {
        areaContainBoxes.innerHTML = 'Scegli la difficoltà'
    }
})

function clickHard(){
    areaContainBoxes.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
    areaContainBoxes.innerHTML += `<div class="box">${i}</div>`   
    }
    
}

function clickMedium(){
    areaContainBoxes.innerHTML = '';
    for (let i = 1; i <= 81; i++) {
    areaContainBoxes.innerHTML += `<div class="box">${i}</div>`   
    }
}

function clickEasy(){
    areaContainBoxes.innerHTML = '';
    for (let i = 1; i <= 49; i++) {
    areaContainBoxes.innerHTML += `<div class="box">${i}</div>`   
    }
}


for (let i = 0; i < checkBox.length ; i++) {
    checkBox.addEventListener('click', function(){
        checkBox[i].classList.add('select');
    });
}

