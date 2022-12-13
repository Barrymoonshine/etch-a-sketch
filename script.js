const container = document.querySelector('#container');

let htmlString = "";

for (let i = 0; i < 16; i++) {
    htmlString += `<div class="squares">${i}</div>`;
}

container.innerHTML = htmlString;


