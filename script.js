const container = document.querySelector('#container');

let htmlString = "";

for (let i = 0; i < 1024; i++) {
    htmlString += `<div class="squares"></div>`;
}

container.innerHTML = htmlString;

let getSquares = document.getElementsByClassName('squares');

let numSquares = getSquares.length;

for (let e = 0; e < numSquares; e++) {
    getSquares[e].addEventListener('mouseover', () => {
        getSquares[e].style.backgroundColor = "grey";
    });
}

