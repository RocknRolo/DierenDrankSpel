const TIME_LIMIT = 10;

let letter_text = document.querySelector("#letter_text");
let timer_text = document.querySelector("#timer_text");
let word_text = document.querySelector("#word_text");
let input_area = document.querySelector("#input_area");
let drink_banner = document.querySelector("#drink_banner");
let drink_text = document.querySelector("#drink_text");

let timeLeft = TIME_LIMIT;
let timer = null;
let firstWord = true;
let currentWord = "";
let namedWords = [];

function startGame() {
    if (timer == null) {
        resetTimer();
    }
}

function runTimer() {
    if (timeLeft > 0) {
        timer_text.textContent = timeLeft + "s";
        timeLeft--;
    }
    else {
        drink_text.textContent = "Je was te laat";
        if (currentWord.slice(0,1).toLowerCase() == 
            currentWord.slice(-1).toLowerCase() &&
            currentWord.length > 0) {
            drink_text.textContent = "3x drinken!";
        }
        drink();
    }
}

function readText() {
    if (wordList.includes(input_area.value.toLowerCase()) &&
        (input_area.value.charAt(0).toLowerCase() == currentWord.slice(-1) || firstWord)) {
        firstWord = false;
		if (namedWords.includes(capitalizeFirstLetter(input_area.value.toLowerCase()))) {
			drink_text.textContent = "Dat woord is al genoemd";
		    drink();
		}

        currentWord = capitalizeFirstLetter(input_area.value.toLowerCase());
        namedWords.push(currentWord);

        word_text.textContent = currentWord;
        letter_text.textContent = currentWord.slice(-1).toUpperCase();

        input_area.value = "";

        resetTimer();
    }
    if (currentWord.length > 15) {
        word_text.style.fontSize = "2rem";
    } else {
        word_text.style.fontSize = "2.5rem";
    }
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = TIME_LIMIT;
    timer = setInterval(runTimer, 1000);
}

function drink() {
    clearInterval(timer);
    drink_banner.style.display = "block";
    setTimeout(() => {  
        drink_banner.style.display = "none";
        resetTimer();
        timer_text.textContent = timeLeft + "s";
    }, 3000);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}