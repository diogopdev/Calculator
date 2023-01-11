const displayTop = document.getElementById('displayTop');
const displayBottom = document.getElementById('displayBottom');
let firstOperand = '';
let secondOperand = '';
let currentOperator;

function sum (number1, number2){
	return number1 + number2;
}

function subtract(number1, number2){
	return number1 - number2;
}

function divide(number1, number2){
	return number1 / number2;
}

function multiply(number1, number2){
	return number1 * number2;
}

function operate (operator, firstOperand, secondOperand){
	switch (operator) {
		case '+':
			console.log('Entrei no +');
		  return sum(firstOperand, secondOperand);
		case '-':
			console.log('Entrei no -');
		  return subtract(firstOperand, secondOperand)
		case 'x':
			console.log('Entrei no *');
		  return multiply(firstOperand, secondOperand)
		case '/':
			console.log('Entrei no /');
		  if (secondOperand === 0){
			return null
		} else {
			return divide(firstOperand, secondOperand)
		}
		default:
			console.log('Não entrei');
		  return null
		}
}

function insertOperator (operator) {
	if (displayTop != ''){
		console.log('entrei')
		firstOperand = Number(displayTop.textContent);
	}
	firstOperand = Number(displayBottom.textContent);
	displayBottom.textContent = '';
	currentOperator = operator;
	displayTop.textContent = firstOperand + ' ' + currentOperator;
	console.log(firstOperand, currentOperator);
}

function total (){
	secondOperand = Number(displayBottom.textContent);
	displayTop.textContent = displayTop.textContent + ' ' + secondOperand + ' =';
	displayBottom.textContent = (operate(currentOperator, firstOperand, secondOperand));
}

function insert (number) {
	return displayBottom.textContent = displayBottom.textContent + number;
}

function deleteNumber() {
	displayBottom.textContent = displayBottom.textContent
	  .toString()
	  .slice(0, -1)
  }

function clearAll(){
	displayTop.textContent = '';
	displayBottom.textContent = '';
}
