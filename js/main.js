
let areaContainBoxes = document.getElementById('box_game');
const btnPlay = document.getElementById('play');
const btnSelect = document.getElementById('level_user');
const btnClear = document.getElementById('refresh');


btnPlay.addEventListener('click', function(){
    areaContainBoxes.classList.remove('size')
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
    areaContainBoxes.innerHTML += `<div class="box hard">${i}</div>`   
    }
    colorBox();
}

function clickMedium(){
    areaContainBoxes.innerHTML = '';
    for (let i = 1; i <= 81; i++) {
    areaContainBoxes.innerHTML += `<div class="box medium">${i}</div>`   
    }
    colorBox();
}

function clickEasy(){
    areaContainBoxes.innerHTML = '';
    for (let i = 1; i <= 49; i++) {
    areaContainBoxes.innerHTML += `<div class="box easy">${i}</div>`   
    }
    colorBox();
}

function colorBox() {
    let caselBox = document.querySelectorAll('.box');
    for (let i = 0; i < caselBox.length ; i++) {
        caselBox[i].addEventListener('click', function(){
            caselBox[i].classList.add('select');
        });
    }
}

btnClear.addEventListener('click', function(){
    areaContainBoxes.innerHTML = 'Scegli una difficoltà';
    areaContainBoxes.classList.add('size')
})

