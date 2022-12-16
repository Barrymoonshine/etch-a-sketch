document.body.onload = createGrid(), sizeDivs();

function createGrid (numDivs = 1024) {
    for (i =0; i <numDivs; i++) {
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
            squares.style.width = (480 / (Math.sqrt(numDivs)-2)) + 'px';
            squares.style.height = (480 / (Math.sqrt(numDivs)-2)) + 'px';
    }   
}

document.getElementById('myBtn').addEventListener("click", resetGridSize)

function resetGridSize () {
    let userInput = prompt ('Enter the number of squares per side for the new grid');
    alert ('A grid size of ' + userInput + ' will be populated');
    let numDivs = Math.pow(userInput,2);
    removeDivs();
    createGrid(numDivs);
    sizeDivs (numDivs);
}

function removeDivs () {
    const myNode = document.getElementById('container');
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }
}


