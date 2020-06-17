function faktorialFor(num) {
	let newNum = 1;
	for (let i = 1; i <= num; i++) {
		newNum *= i;
	}
	return newNum;
}
console.log(faktorialFor(5));


function faktorialWhile(num) {
	let sum = 1;
	while (num) {
		sum *= num--;
	}
	return sum;
}
console.log(faktorialWhile(5));


//2
function toFarengate(num) {
	let sum = (num * 9 / 5) + 32;
	return `${sum} °F`;
}
console.log(toFarengate(5));

function toCelsius(num) {
	let sum = (num - 32) * 5 / 9;
	return `${sum} °C`;

}
console.log(toCelsius(50));


//3
function nod(a, b) {
	if ( ! b) {
	  return a;
	}
	  return nod(b, a % b);
  };
  console.log(nod(25, 15));