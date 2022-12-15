document.body.onload = createGrid;

let numDivs = 1024;

function createGrid () {
    for (i =0; i <numDivs; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "squares";
        newDiv.addEventListener('mouseover', () =>{
            newDiv.style.backgroundColor = "grey";
        })
        document.getElementById('container').appendChild(newDiv);
    } 
}

document.getElementById('myBtn').addEventListener("click", resetGridSize);

function resetGridSize (){
    let userInput = prompt ('Enter the number of squares per side for the new grid');
    alert (userInput);
    let numDivs = Math.pow(userInput,2);
    createGrid(numDivs);
}


// window.onload = function getGridSize () {
//     let gridPerSide;
//     let gridDensity;
//     let el = document.getElementById('gridInput');
//     el.onclick = function getUserInput () {
//         let gridPerSide = prompt ('Enter the number of squares per side for the new grid');
//         if(gridPerSide) alert (gridPerSide);
//         let gridDensity = Math.pow(gridPerSide,2);
//         createGrid(gridDensity);
//     }
// }


