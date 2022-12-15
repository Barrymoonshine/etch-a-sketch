const container = document.querySelector('#container');

let htmlString = "";

for (let i = 0; i < 1024; i++) {
    htmlString += `<div class="squares"></div>`;
}

container.innerHTML = htmlString;

let getSquares = document.getElementsByClassName('squares');

let numSquares = getSquares.length;

for (let j = 0; j < numSquares; j++) {
    getSquares[j].addEventListener('mouseover', () => {
        getSquares[j].style.backgroundColor = "grey";
    });
}

window.onload = function getGridSize () {
    let gridSize;
    let el = document.getElementById('gridInput');
    el.onclick = function getUserInput () {
        let gridSize = prompt ('Enter grid size here');
        if(gridSize) alert (gridSize);
        createGrid(gridSize);
    }
}

function createGrid (gridSize) {
    for (let k = 0; k < gridSize; k++) {
        htmlString += `<div class="squares"></div>`;
        getSquares[k].addEventListener('mouseover', () => {
            getSquares[k].style.backgroundColor = "grey";
        });
    }
    container.innerHTML = htmlString;
}
