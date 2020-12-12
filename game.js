let TIME_LIMIT = 10;

// deze stringarray is voor testdoeleinden totdat ik snap hoe ik 'n
// textbestand (csv xml json xml whatever) kan uitlezen.
let wordList = ["hond", "vis", "slang", "giraffe", "egel", "slak", 
"krekel", "lijster", "reiger", "rendier", "regenworm", "paard", "kat", 
"tijger", "reebok","krokodil", "leeuw", "walvis", "schildpad", "dodo", "olifant", "teek"];

let namedWords = [];
//console.log(wordList);

let letter = document.querySelector(".letter");
let timer = document.querySelector(".timer_text");
let input_area = document.querySelector(".input_area");
let drink_banner = document.querySelector(".drink_banner");

let timeLeft = TIME_LIMIT;
let current_word = "";

function processCurrentText() {

    curr_input = input_area.value;
    if (wordList.includes(curr_input)) {
        current_word = curr_input;
        curr_input = "";
        resetValues;
    }
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timer.textContent = timeLeft + "s";
    }
    else {
        drink();
    }
}

function startGame() {

    resetValues();

    clearInterval(timer);
    timer_text = setInterval(updateTimer, 1000);
}

function resetValues() {
    clearInterval(timer);

    timeLeft = TIME_LIMIT;
    
    input_area.value = "";
    timer.textContent = timeLeft + 's';
}

function drink() {
    drink_banner.style.display = "block";

}

/*
TODO:
list.txt inlezen als stringarray
Timer werkt nog niet goed
drinkbanner als overlay (flitsen?)
*/