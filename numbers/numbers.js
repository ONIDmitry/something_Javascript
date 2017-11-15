/* Создайте страницу, которая предлагает ввести два числа и выводит их сумму. 

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n); //parseFloat - пытается преобразить строку  в дробное число;  isFinit- проверяет, что это не infinity/NaN
}

function getSum () {
	var firstNum = prompt('Введите первое число');
	var secondNum = prompt('Введите второе число');
	
	if (!isNumeric(+firstNum) || (!isNumeric(+secondNum))) { return alert ('Некорректный ввод'); 
	} else { return alert ("Сумма равна: " + (+firstNum + +secondNum)); }
}

getSum();  */

/* Напишите функцию getDecimal(num), которая возвращает десятичную часть числа: 

function getDecimal(n) {
	
	if (n < 0) return Math.ceil(n)-n;
	else return n-Math.floor(n);
}


alert(getDecimal(1.34));
alert(getDecimal(-7.51717));
alert(getDecimal(0)); 	*/

/* Существует формула Бине, согласно которой Fn равно ближайшему целому для ϕn/√5, где ϕ=(1+√5)/2 – золотое сечение. 
Напишите функцию fibBinet(n), которая будет вычислять Fn, используя эту формулу. Проверьте её для значения F77 
(должно получиться fibBinet(77) = 5527939700884757).

function fibNet(n) {
	var fi = (1+Math.pow(5, 0.5))/2;
	return Math.round(Math.pow(fi, n)/Math.pow(5, 0.5));
}

alert(fibNet(1));
alert(fibNet(2));
alert(fibNet(3));
alert(fibNet(4));
alert(fibNet(5));
alert(fibNet(6)); */

/* Напишите функцию randomMinMax(min, max) для генерации случайного ЦЕЛОГО числа между min и max, включая min,max как возможные значения.

Любое число из интервала min..max должно иметь одинаковую вероятность. 

function randomMinMax(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;	
}


alert(randomMinMax(7, 14));
alert(randomMinMax(7, 14));
alert(randomMinMax(7, 14));
alert(randomMinMax(7, 14));
alert(randomMinMax(7, 14));
alert(randomMinMax(7, 14));
alert(randomMinMax(7, 14)); */