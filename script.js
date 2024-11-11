const h2 = document.querySelector("h2");
const word = "We Love Programming!";
const inputValue = document.querySelector(".form input");
let speed = 300 / inputValue.value;

h2.innerText = word;
let i = 0;

autoText();

function autoText() {
	h2.innerText = word.slice(0, i);
	i++;

	if (i > word.length) {
		i = 1;
	}
	setTimeout(autoText, speed);
}

inputValue.addEventListener("input", (e) => (speed = 300 / e.target.value));
