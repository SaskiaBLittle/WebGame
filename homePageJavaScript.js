let count = 0;
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
        startAutoClicker();
    }
    if (count === 200){
        const prizeElement = document.getElementById("prize")
        prizeElement.textContent = "Auto Clicker 1 Level 2"
        startAutoClicker2();
    }
}

//Figure out a way to make it so when entered the function a second time it is worth 2 clicks
function startAutoClicker(){
    autoClickIntervalId = setInterval(() =>{
        document.querySelector("button").click();
    }, 1000);
} 
function startAutoClicker2(){
    autoClickIntervalId = setInterval(() =>{
        document.querySelector("button").click();
    }, 1000);
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