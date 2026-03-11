const MAX_NUMBERS = 6;
const MIN = 1;
const MAX = 49;

let drawnNumbers = [];

const drawBtn = document.getElementById("drawBtn");
const resetBtn = document.getElementById("resetBtn");
const numbersDiv = document.getElementById("numbers");
const remainingSpan = document.getElementById("remaining");
const message = document.getElementById("message");

function updateCounter(){
    remainingSpan.textContent = MAX_NUMBERS - drawnNumbers.length;
}

function getRandomNumber(){
    let num;

    do{
        num = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    }
    while(drawnNumbers.includes(num));

    return num;
}

function drawNumber(){
    if(drawnNumbers.length >= MAX_NUMBERS){
        return;
    }

    const number = getRandomNumber();

    drawnNumbers.push(number);

    const tile = document.createElement("div");
    tile.classList.add("number");
    tile.textContent = number;

    numbersDiv.appendChild(tile);

    updateCounter();

    if(drawnNumbers.length === MAX_NUMBERS){

        drawBtn.disabled = true;
        message.textContent = "Wylosowano komplet liczb";

    }

}

function reset(){

    drawnNumbers = [];

    numbersDiv.innerHTML = "";

    drawBtn.disabled = false;

    message.textContent = "";

    updateCounter();

}

drawBtn.addEventListener("click", drawNumber);
resetBtn.addEventListener("click", reset);

updateCounter();