document.body.onload = createGrid(), sizeDivs();

function createGrid (numDivs = 1024) {
    for (i =0; i < numDivs; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "squares";
        newDiv.style.border = "1px solid lightgrey"
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = "grey";
        })
        document.getElementById('container').appendChild(newDiv);
    }
}

function sizeDivs (numDivs = 1024) {
    const allSquares = document.querySelectorAll('.squares')
        for (const squares of allSquares) {
            squares.style.width = (480 / (Math.sqrt(numDivs))) -2  + 'px';
            squares.style.height = (480 / (Math.sqrt(numDivs))) -2  + 'px';
    }   
}

document.getElementById('gridSize').addEventListener("click", resetGridSize)

function resetGridSize () {
    let userInput = prompt ('Enter the number of squares per side for the new grid, please enter a number of 100 or below to stop you computer from blowing up!');
    if (userInput <= 100)  {
        alert ('A grid size of width ' + userInput + ' and height ' + userInput + ' will be populated');
        let numDivs = Math.pow(userInput,2);
        removeDivs();
        createGrid(numDivs);
        sizeDivs (numDivs);
    }
    else {
        alert ('BOOM! You wrecked your computer bro, better call Bill Gates!')
    }
}

function removeDivs () {
    const myNode = document.getElementById('container');
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }
}

document.getElementById('randomColor').addEventListener("click", applyRandomColor);


function applyRandomColor () {
    const allSquares = document.querySelectorAll('.squares');
    removeMouseOver ();
        for (const squares of allSquares) {
            squares.onmouseover = function () {
                squares.style.backgroundColor = randomRgbColor() ;
            }
        }
}

function removeMouseOver() {
    let divs = document.body.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].onmouseover = function() {};
    }
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return `rgb(${r},${g},${b})`;
}

document.getElementById('shader').addEventListener("click", applyShader);


function applyShader () {
    removeMouseOver ();
    const allSquares = document.querySelectorAll('.squares')
        for (const squares of allSquares) {
            squares.onmouseover = function () {
                let opacity = Number((squares.style.opacity));
                squares.style.backgroundColor = "black";
                squares.style.opacity = (parseFloat(squares.style.opacity) || 0) + 0.2;
            }
        }
}

document.getElementById('classic').addEventListener("click", applyGreyColor);

function applyGreyColor () {
   
    const allSquares = document.querySelectorAll('.squares')
        for (const squares of allSquares) {
            squares.onmouseover = function () {
                 squares.style.backgroundColor = "grey";
                }
        }
}

document.getElementById('eraser').addEventListener("click", applyWhiteColor);

function applyWhiteColor () {
    removeMouseOver ();
    const allSquares = document.querySelectorAll('.squares')
        for (const squares of allSquares) {
            squares.onmouseover = function () {
                squares.style.opacity = "initial";
                squares.style.backgroundColor = "white";
                squares.style.border = "1px solid lightgrey";
        }
    }
}

