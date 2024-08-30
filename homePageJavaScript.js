let count = 0;
let level = 0;
let autoClickerAwarded = false;
let autoClickIntervalId;
// Function: creates a new paragraph and appends it to the bottom of the HTML body.

function createParagraph() {
    count++;
    const para = document.createElement("p");
    //para.textContent = `Button clicked ${count} times`;        //if this is added a new text statement will be put on the page causing infinite lines
    document.body.appendChild(para);
    updateCounterDisplay();
    checkForPrize();
}

function updateCounterDisplay(){
    const counterElement = document.getElementById("counter");
    counterElement.textContent = `Button clicked ${count} times`;
}

function checkForPrize(){
    if (count === 100 && !autoClickerAwarded){
        autoClickerAwarded = true;
        const prizeElement = document.getElementById("prize")
        prizeElement.textContent = "Auto Clicker 1 Acquired"
        autoClicker1();
    }
    if (count === 200){
        const prizeElement = document.getElementById("prize")
        prizeElement.textContent = "Auto Clicker 1 Level 2"
        autoClicker1();
    }
    if (count === 400){
        const prizeElement = document.getElementById("prize")
        prizeElement.textContent = "Auto Clicker 1 Level 2"
        autoClicker1();
    }
    if (count === 500){
        const prizeElement = document.getElementById("prize")
        prizeElement.textContent = "Auto Clicker 2 Acquired"
        autoClicker2();
    }
    if (count === 1000){
        const prizeElement = document.getElementById("prize")
        prizeElement.textContent = "Auto Clicker 2 Acquired"
        autoClicker2();
    }
}

//Figure out a way to make it so when entered the function a second time it is worth 2 clicks
function autoClicker1(){
    level++;
    if (level === 1){
        autoClickIntervalId = setInterval(() =>{
            document.querySelector("button").click();
        }, 2000);
    }
    else if (level === 2){
        autoClickIntervalId = setInterval(() =>{
            document.querySelector("button").click();
        }, 2000);
    }
    else if (level === 3){
        autoClickIntervalId = setInterval(() =>{
            document.querySelector("button").click();
        }, 2000);
    }
} 
function autoClicker2(){
    level++;
    if (level === 4){
        autoClickIntervalId = setInterval(() =>{
            document.querySelector("button").click();
        }, 1000);
    }
    else if (level === 5){
        autoClickIntervalId = setInterval(() =>{
            document.querySelector("button").click();
        }, 1000);
    }
}
/*
    1. Get references to all the buttons on the page in an array format.
    2. Loop through all the buttons and add a click event listener to each one.

    When any button is pressed, the createParagraph() function will be run.
*/

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}