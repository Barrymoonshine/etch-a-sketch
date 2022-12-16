document.body.onload = createGrid(), sizeDivs();

function createGrid (numDivs = 1024) {
    for (i =0; i < numDivs; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "squares";
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

document.getElementById('randomColor').addEventListener("click", setRandomColor);

function setRandomColor () {
    for (i =0; i < numDivs; i++) {
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = rgb;
        })
    }
}


const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`;