const container = document.querySelector('#container');

let htmlString = "";

for (let i = 0; i < 256; i++) {
    htmlString += `<div class="squares">${i}</div>`;
}

container.innerHTML = htmlString;

let squaresHover = document.querySelector(squares);

squaresHover.addEventListener('mouseover', () => {
    squaresHover.style.backgroundColor = "yellow";
});

