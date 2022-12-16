document.body.onload = createGrid;

function createGrid (numDivs = 1024) {
    for (i =0; i <numDivs; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "squares";
        newDiv.addEventListener('mouseover', () =>{
            newDiv.style.backgroundColor = "grey";
        })
        document.getElementById('container').appendChild(newDiv);
    } 
    console.log(numDivs);
}

createGrid ();

document.getElementById('myBtn').addEventListener("click", resetGridSize)

function resetGridSize () {
    let userInput = prompt ('Enter the number of squares per side for the new grid');
    alert (userInput);
    let numDivs = Math.pow(userInput,2);
    document.getElementById('container').reset();
    createGrid(numDivs);
}

