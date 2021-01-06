let TIME_LIMIT = 10;

let namedWords = [];

let letter_text = document.querySelector(".letter_text");
let timer_text = document.querySelector(".timer_text");
let word_text = document.querySelector(".word_text");
let input_area = document.querySelector(".input_area");
let drink_banner = document.querySelector(".drink_banner");
let drink_text = document.querySelector(".drink_text");

let timeLeft = TIME_LIMIT;
let timer = null;
let firstWord = true;
let current_word = "";

function startGame() {
    if (timer == null) {
        timer = setInterval(runTimer, 1000);
    }
}

function readText() {
    if (wordList.includes(input_area.value.toLowerCase()) &&
        (input_area.value.charAt(0).toLowerCase() == 
        	current_word.slice(-1) || firstWord)) {
		if (namedWords.includes(capitalizeFirstLetter(input_area.value.toLowerCase()))) {
			drink_text.textContent = "Dat woord is al genoemd";
		    drink();
		}
        firstWord = false;
        
        current_word = capitalizeFirstLetter(input_area.value.toLowerCase());
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
		drink_text.textContent = "Je was te laat";
    	if (current_word.slice(0,1).toLowerCase() == 
    		current_word.slice(-1).toLowerCase() &&
    		current_word.length > 0) {
    		drink_text.textContent = "3x drinken!";
    	}
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
    }, 3000);

}