const container = document.getElementById('container');
const allSquares = document.getElementsByClassName('squares');
const ctrlBtns = document.getElementsByClassName('controlBtns');
const getUserChoice = function (e) {
    applyUserChoice(e.target.id);
}

createGrid();
sizeSquares();

function createGrid(numSquares = 1024) {
    for (i = 0; i < numSquares; i++) {
        let newSquare = document.createElement('div');
        newSquare.className = "squares";
        newSquare.style.border = "1px solid lightgrey"
        newSquare.style.backgroundColor = "white"
        newSquare.addEventListener('mouseover', () => {
            newSquare.style.backgroundColor = "grey";
        })
        document.getElementById('container').appendChild(newSquare);
    }
}

function sizeSquares(numSquares = 1024) {
    for (const squares of allSquares) {
        squares.style.width = (480 / (Math.sqrt(numSquares))) - 2 + 'px';
        squares.style.height = (480 / (Math.sqrt(numSquares))) - 2 + 'px';
    }
}

for (i of ctrlBtns) {
    i.addEventListener('click', getUserChoice);
}

function applyUserChoice(userChoice) {
    removeMouseOver();
    if (userChoice == 'gridSize') {
        resetGridSize();
    } else if (userChoice == 'randomColor') {
        applyRandomColor();
    } else if (userChoice == 'shader') {
        applyShader();
    } else if (userChoice == 'classic') {
        applyGreyColor();
    } else if (userChoice == 'eraser') {
        applyWhiteColor();
    } else if (userChoice == 'reset') {
        resetGrid();
    }
}

function resetGridSize() {
    const userInput = prompt('Enter the number of squares per side for the new grid, please enter a positive number of 100 or below to stop your computer from blowing up!');
    if (userInput <= 100 && userInput >= 1 && userInput !== '') {
        alert(`A grid size of width  ${userInput} and height ${userInput} will be populated`);
        let numDivs = Math.pow(userInput, 2);
        removeDivs();
        createGrid(numDivs);
        sizeSquares(numDivs);
    } else {
        alert('As you have not entered a number of 100 or below, the grid will be reset to it\'s original 32x32 size');
        resetGrid();
    }
}

function resetGrid() {
    let numSquares = document.getElementsByClassName('squares').length;
    removeDivs();
    createGrid(numSquares);
    sizeSquares(numSquares);
}

function removeDivs() {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

function applyRandomColor() {
    for (const squares of allSquares) {
        squares.onmouseover = function () {
            squares.style.opacity = "initial";
            squares.style.backgroundColor = randomRgbColor();
        }
    }
}

function removeMouseOver() {
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].onmouseover = function () { };
    }
}

function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
    const r = randomInteger(255);
    const g = randomInteger(255);
    const b = randomInteger(255);
    return `rgb(${r},${g},${b})`;
}

function applyShader() {
    for (const squares of allSquares) {
        squares.onmouseover = function () {
            squares.style.backgroundColor = "black";
            squares.style.opacity = (parseFloat(squares.style.opacity) || 0) + 0.1;
        }
    }
}

function applyGreyColor() {
    for (const squares of allSquares) {
        squares.onmouseover = function () {
            squares.style.opacity = "initial";
            squares.style.backgroundColor = "grey";
        }
    }
}

function applyWhiteColor() {
    for (const squares of allSquares) {
        squares.onmouseover = function () {
            squares.style.opacity = "initial";
            squares.style.backgroundColor = "white";
            squares.style.border = "1px solid lightgrey";
        }
    }
}