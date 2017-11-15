/* Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, 
которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, 
с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, 
тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8  

function sequence(start, step) {
	var currentNumber = start;
	var currentStep = step;
	var count = 0;
	if (!currentNumber) currentNumber = 0;
	if (!currentStep) currentStep = 1;
	
	function generator() {
		count++;
		if (count === 1) return currentNumber;
		currentNumber = currentNumber + currentStep;
		return currentNumber;
	}
	
	return generator;
}

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);
var generator2 = sequence(7);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8   */

/* Также, нужна функция take(fn, count) которая вызвает функцию fn заданное число (count) раз и возвращает массив с результатами вызовов. Она нам пригодится для отладки:

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ] 


function take(fn, count) {
	var arr = [];
	
	for (var i = 0; i < count; i++) {
		arr[i] = fn();
	}
	
	return arr;
} 	*/

/* Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает 
каждый элемент массива этой функцией, возвращая новый массив. Пример:

function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

Обрати внимание: функция не должна изменять переданный ей массив:

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3] 

function square(x) { return x * x; }

function map(fn, array) {
	var newArray = [];
	for (var i = 0; i < array.length; i++)
	{
		newArray[i] = fn(array[i]);
	}
	return newArray;
}

var arr = [1, 2, 3];
console.log(map(square, arr));
console.log(arr);   */

/* Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen, где gen — функция-генератор вроде той, 
что была в первом задании. fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее значение из gen и 
пропускает его через функцию a. Пример:

var gen = sequence(1, 1);
function square(x) { return x * x; }
var squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16

При этом, необходимо сделать так, чтобы в качестве gen можно было указать функцию с аргументами, и при вызове

function add(a, b) { 
  return a + b; 
}

// Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2

Эти аргументы бы передавались функции gen. Аргументов может быть любое количество. 

function fmap(a, gen) {
	function filter() {
		if (arguments.length === 0) return a(gen());
		var newArray = [];
		for (var i = 0; i < arguments.length; i++)
		{
			newArray[i] = arguments[i];
		}
		return a(gen.apply(null, newArray));
	}
	
	
	return filter;
}

function add(a, b) { 
  return a + b; 
}

function sequence(start, step) {
	var currentNumber = start;
	var currentStep = step;
	var count = 0;
	if (!currentNumber) currentNumber = 0;
	if (!currentStep) currentStep = 1;
	
	function generator() {
		count++;
		if (count === 1) return currentNumber;
		currentNumber = currentNumber + currentStep;
		return currentNumber;
	}
	
	return generator;
}

var gen = sequence(1, 1);
function square(x) { return x * x; }
var squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16



var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2   */