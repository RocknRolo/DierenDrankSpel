let TIME_LIMIT = 10;

// deze stringarray is voor testdoeleinden totdat ik snap hoe ik 'n
// textbestand (csv xml json xml whatever) kan uitlezen.
let wordList = ["hond", "vis", "slang", "giraffe", "egel", "slak", 
"krekel", "lijster", "reiger", "rendier", "regenworm", "paard", "kat", 
"tijger", "reebok", "krokodil", "leeuw", "walvis", "schildpad", "dodo", 
"olifant", "teek", "armadillo"];

let namedWords = [];

let letter_text = document.querySelector(".letter_text");
let timer_text = document.querySelector(".timer_text");
let word_text = document.querySelector(".word_text");
let input_area = document.querySelector(".input_area");
let drink_banner = document.querySelector(".drink_banner");

let timeLeft = TIME_LIMIT;
let timer = null;

function startGame() {
    if (timer == null) {
        timer = setInterval(runTimer, 1000);
    }
}

function readText() {

    if (wordList.includes(input_area.value)) {
        current_word = input_area.value;
        namedWords.push(current_word);
        word_text.textContent = current_word;
        letter_text.textContent = current_word.slice(-1).toUpperCase();
        input_area.value = "";
        resetTimer();
    }
}

function runTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timer_text.textContent = timeLeft + "s";
    }
    else {
        drink();
    }
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = TIME_LIMIT;
    timer_text.textContent = timeLeft + 's';
    timer = setInterval(runTimer, 1000);
}

function drink() {
    drink_banner.style.display = "block"; 
    setTimeout(() => {  
        drink_banner.style.display = "none";
        resetTimer();
    }, 2000);

}

/*
TODO:
list.txt inlezen als stringarray
(bug) timer pauseert na weergeven banner
spelregels implementeren
text in word_box altijd met hoofdletter weergeven

dingen
*/