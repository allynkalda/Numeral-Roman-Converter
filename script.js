// Number to Roman Numeral Converter

console.log(NumToRomanConverter(1998))

function NumToRomanConverter(number) {
    
const roman = number.toString().split("").map(elem => Number(elem)).reverse()

let romanFull = "";

function digits(index) {
	switch(index) {
		case 0:
		return 1;
		break;
		case 1:
		return 10;
		break;
		case 2:
		return 100;
		break;
		case 3:
		return 1000;
		break;
	}
}


for (var i = roman.length - 1; i >= 0; i--) {
	let num = roman[i] * digits(i)
	console.log(num)
	toLetter(num)
}

function toLetter(number) {
	if (number <= 8) {
		changeToTens(number, single = "I", half = "V", multiply = 1)
	} else if (number <= 80) {
		changeToTens(number, single = "X", half = "L", multiply = 10, nines = 1, prevSingle = "I")
	} else if (number <= 800) {
		changeToTens(number, single = "C", half = "D", multiply = 100, nines = 10, prevSingle = "X")
	} else if (number <= 8000) {
		changeToTens(number, single = "M", half = "", multiply = 1000, nines = 100, prevSingle = "C")
	}
}


function changeToTens(number, single, half, multiply, nines, prevSingle) {

		if (number === 1 * multiply) {
			romanFull += single
		} else if (number === 5 * multiply) {
			romanFull += half
		} else if (number === 4 * multiply) {
			romanFull += single + half
		} else if (number === 9 * nines) {
			romanFull += prevSingle + single;
			return
		} else if (number < 4 * multiply) {
			let singular = number.toString().substr(0, 1)
			for (let i = 0; i < singular; i++) {
				romanFull += single
			}
		} else if (number > 5 * multiply) {
			romanFull += half
			let singular = number.toString().substr(0, 1)
			for (let i = 0; i < singular - 5; i++) {
				romanFull += single
			}
		}
}

return romanFull

}
