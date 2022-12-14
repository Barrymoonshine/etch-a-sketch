const container = document.querySelector('#container');

let htmlString = "";

for (let i = 0; i < 256; i++) {
    htmlString += `<div class="squares">${i}</div>`;
}

container.innerHTML = htmlString;

let squaresHover = document.getElementsByClassName('squares');

squaresHover[0].addEventListener('mouseover', () => {
    squaresHover[0].style.backgroundColor = "yellow";
});

squaresHover[0].addEventListener('mouseout', () => {
    squaresHover[0].style.backgroundColor = "black";
});

