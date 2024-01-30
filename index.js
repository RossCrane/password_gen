const capital = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

const lower = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const symbols = [
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
];

// remove spread operator

// const characters = [...capital, ...lower, ...numbers, ...symbols];
let characters = [];
let cleanCharacters = [','];

let numbersValue = document.getElementById('numbers-selector');
let symbolsValue = document.getElementById('symbols-selector');

//characters.push(capital);
characters += capital + lower + numbers + symbols;

for (let i = 0; i < characters.length; i++) {
	if (characters[i] !== ',') {
		cleanCharacters.push(characters[i]);
	}
}

console.log(filterCharacters('numbers'));

function filterCharacters(numberBool, symbolBool) {
	if (!numberBool && !symbolBool) {
		return cleanCharacters.filter((char) => {
			if (numbers.includes(char) || symbols.includes(char)) {
				return false;
			} else {
				return true;
			}
		});
	} else if (!numberBool) {
		return cleanCharacters.filter((char) => {
			if (numbers.includes(char)) {
				return false;
			} else {
				return true;
			}
		});
	} else if (!symbolBool) {
		return cleanCharacters.filter((char) => {
			if (symbols.includes(char)) {
				return false;
			} else {
				return true;
			}
		});
	} else {
		return cleanCharacters;
	}
}

passwordOneEl = document.getElementById('password-one');
passwordTwoEl = document.getElementById('password-two');

const lengthInput = document.getElementById('password-length');

passwordLength = 0;

function generatePassword(length) {
	let password = '';
	for (let i = 0; i < length; i++) {
		let randomIndex = Math.floor(
			Math.random() *
				filterCharacters(numbersValue.checked, symbolsValue.checked).length
		);
		password += filterCharacters(numbersValue.checked, symbolsValue.checked)[
			randomIndex
		];
	}
	return password;
}

function copyTextToClipboard(el) {
	const text = document.getElementById(el).innerText;
	navigator.clipboard.writeText(text);
}

passwordOneEl.addEventListener('click', () => {
	navigator.clipboard.writeText(passwordOneEl.textContent);
});

passwordTwoEl.addEventListener('click', () => {
	navigator.clipboard.writeText(passwordTwoEl.textContent);
});

function generatePasswords() {
	passwordOneEl.textContent = generatePassword(lengthInput.value);
	passwordTwoEl.textContent = generatePassword(lengthInput.value);
}
