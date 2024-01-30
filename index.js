const uppercase = [
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

const lowercase = [
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

// DOM elements
const lowercaseSelector = document.getElementById('lowercases-selector');
const uppercaseSelector = document.getElementById('capitals-selector');
const numbersSelector = document.getElementById('numbers-selector');
const symbolsSelector = document.getElementById('symbols-selector');

const passwordOneEl = document.getElementById('password-one');
const passwordTwoEl = document.getElementById('password-two');
const lengthInput = document.getElementById('password-length');

// adds charecter sets to a target array
function appendCharactersFromSelection(sourceArray, isSelected, targetArray) {
	if (isSelected) {
		for (let i = 0; i < sourceArray.length; i++) {
			targetArray.push(sourceArray[i]);
		}
	}
}

// returns an array of characters to use
function getCharacters() {
	let characters = [];

	// builds the array of character sets to use to make the password
	appendCharactersFromSelection(
		lowercase,
		lowercaseSelector.checked,
		characters
	);
	appendCharactersFromSelection(
		uppercase,
		uppercaseSelector.checked,
		characters
	);
	appendCharactersFromSelection(numbers, numbersSelector.checked, characters);
	appendCharactersFromSelection(symbols, symbolsSelector.checked, characters);

	// case if nothing is selected
	if (characters.length === 0) {
		return null;
	}
	return characters;
}

// generates a password of a given length (specified by the user)
function generatePassword(length) {
	let password = '';
	const charsToUse = getCharacters();
	if (charsToUse === null) {
		// tells the user to select some options if nothing is selected
		return 'Please select options above.';
	} else {
		// generate password using selected characters
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * charsToUse.length);
			password += charsToUse[randomIndex];
		}
	}
	return password;
}

function generatePasswords() {
	const password1 = generatePassword(lengthInput.value);
	const password2 = generatePassword(lengthInput.value);

	// display passwords
	passwordOneEl.textContent = password1;
	passwordTwoEl.textContent = password2;
}

function copyTextToClipboard(textElementId) {
	const text = document.getElementById(textElementId).textContent;
	navigator.clipboard.writeText(text);
	// turn the tooltip on
	const tooltip = document.getElementById('copy-tooltip');
	tooltip.style.display = 'block';
	setTimeout(() => {
		tooltip.style.display = 'none'; // makes the tooltip disappear after two seconds
		// specified in milliseconds so its two seconds
	}, 2000);
}
