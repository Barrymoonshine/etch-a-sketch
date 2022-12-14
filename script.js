const container = document.querySelector('#container');

let htmlString = "";

for (let i = 0; i < 256; i++) {
    htmlString += `<div class="squares">${i}</div>`;
}

container.innerHTML = htmlString;

let hoverEffect = document.getElementsByClassName('squares');

let numSquares = hoverEffect.length;

for (let e = 0; e < numSquares; e++) {
    hoverEffect[e].addEventListener('mouseover', () => {
        hoverEffect[e].style.backgroundColor = "yellow";
    });
    hoverEffect[e].addEventListener('mouseout', () => {
        hoverEffect[e].style.backgroundColor = "black";
    });
}
