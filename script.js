const container = document.querySelector('#container');

let htmlString = "";

let gridDensity = 1024;

for (let i = 0; i < gridDensity; i++) {
    htmlString += `<div class="squares"></div>`;
}

container.innerHTML = htmlString;

let getSquares = document.getElementsByClassName('squares');

for (let j = 0; j < gridDensity; j++) {
    getSquares[j].addEventListener('mouseover', () => {
        getSquares[j].style.backgroundColor = "grey";
    });
}

window.onload = function getGridSize () {
    let gridPerSide;
    let gridDensity;
    let el = document.getElementById('gridInput');
    el.onclick = function getUserInput () {
        let gridPerSide = prompt ('Enter the number of squares per side for the new grid');
        if(gridPerSide) alert (gridPerSide);
        let gridDensity = Math.pow(gridPerSide,2);
        createGrid(gridDensity);
    }
}

function createGrid (gridDensity) {
    for (let k = 0; k < gridDensity; k++) {
        htmlString += `<div class="squares"></div>`;
    }
    container.innerHTML = htmlString;
}
