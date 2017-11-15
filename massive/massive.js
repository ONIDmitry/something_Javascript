/* Получить последний элемент массива 

function getLastElem (massive) {
	return massive[massive.length - 1];
}


var array1 = ["Яблоко", "Груша", "Апельсин"];
var array2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var array3 = ["Яблоко"];

alert(getLastElem(array1));
alert(getLastElem(array2));
alert(getLastElem(array3)); */

/* Как добавить элемент в конец произвольного массива? 

function setLastElem(massive, elem) {
	massive.push(elem);
}

var array1 = ["Яблоко", "Груша", "Апельсин"];
var array2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var array3 = ["Яблоко"];

setLastElem(array1, "Арбуз");
setLastElem(array2, "11");
setLastElem(array3, "Арбуз"); 

alert(array1);
alert(array2);
alert(array3);  */

/* Напишите код, который:

    Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
    Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
    При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
    Выводит сумму всех значений массива 
	
function calcPrompt() {
	var sum = 0;
	var arr = [];
	do {
		var index = prompt('Введите число');
		if (index === "" || index === null || isNaN(index)) break;
		arr.push(+index);
		}	while (index);

	for (var i = 0; i< arr.length; i++)
	{
		sum+=arr[i];
	}
	return sum;
}

alert(calcPrompt()); */

/* Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено. 

function find(arr, value) {
	for (var i = 0; i < arr.length; i++)
	{
		if (arr[i] === value) return i;
	}
	return -1;
}

var array1 = ["Яблоко", "Груша", "Апельсин"];
var array2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var array3 = ["Яблоко"];


alert(find(array1, "Груша"));
alert(find(array1, "Арбуз"));
alert(find(array2, "10"));
alert(find(array2, "11"));	*/

/* Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа 
из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr. 

function filterRange(arr, a, b){
	var filtered = [];
	for (var i = 0; i < arr.length; i++)
	{
		if ((arr[i] >= a) && (arr[i] <= b)) filtered.push(arr[i]);
	}
	return filtered;
}

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var newNumbers = filterRange(numbers, 5 ,7);
alert(newNumbers);
alert(numbers);   */

/* Целое число, большее 1, называется простым, если оно не делится нацело ни на какое другое, кроме себя и 1.

Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:

    Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
    Пусть p=2, это первое простое число.
    Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
    Поменять значение p на первое не зачеркнутое число после p.
    Повторить шаги 3-4 пока p2 < n.
    Все оставшиеся не зачеркнутыми числа – простые.

Посмотрите также анимацию алгоритма.

Реализуйте «Решето Эратосфена» в JavaScript, используя массив.

Найдите все простые числа до 100 и выведите их сумму.   

function simpleErato(n) {
	var arr = [];
	
	for (var i = 0; i < n -1 ; i ++)
	{
		arr[i] = i + 2;
	}
	
	var p = 2;
	var pos = 0;
	while (p*p < n) {
		
		for (var i = 0; i < arr.length; i++) 
		{
			if ((arr[i] % p === 0) && (arr[i] != p)) 
			{
				arr.splice(i, 1);
				continue;
			}
			if (arr[i] === p) 
			{
				pos = i;
				continue;
			}
			
			
		}
			p = arr[pos+1];
	}	
	return arr;
}

function getSumMas(arr) {
	var sum = 0;
	for (var k = 0; k < arr.length; k++)
	{
		if (arr[k] == undefined) continue;
		sum+= arr[k];
	}
	return sum;
}

var arr = simpleErato(100);
alert(getSumMas(arr));      */

/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].


Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.

Ваша функция должна возвращать только эту сумму.


function getSumRange(arr, a, b) {
	var sumRange = 0;
	for (var i = a; i <= b ; i++)
	{
		sumRange+=arr[i];
	}
	return sumRange;
}

function getMaxSum(arr){
	max = 0;
	for (var i = 0; i < arr.length; i++)
	{
		if (arr[i] > max) max = arr[i];
		
		for (var j = i+1; j < arr.length; j++)
		{
			if (getSumRange(arr, i, j) > max) max = getSumRange(arr, i, j);
		}
	}
	
	return max;
}


alert(getMaxSum([-1, 2, 3, -9]));
alert(getMaxSum([2, -1, 2, 3, -9]));
alert(getMaxSum([-1, 2, 3, -9, 11]));
alert(getMaxSum([-2, -1, 1, 2]));
alert(getMaxSum([100, -9, 2, -3, 5]));
alert(getMaxSum([1, 2, 3])) ;  	 */

/* В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:

var obj = {
  className: 'open menu'
}

Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"

P.S. Ваша функция не должна добавлять лишних пробелов. 

function addClass(obj, cls){
	var arr = obj.className.split(' ');	
	if (arr.indexOf(cls) == -1) arr.push(cls);
	obj.className = arr.join(' ');
}


var obj = {
	className: 'open menu'
}

addClass(obj, 'new'); // obj.className='open menu new'
alert(obj.className);
addClass(obj, 'open'); // без изменений (класс уже существует)
alert(obj.className);
addClass(obj, 'me'); // obj.className='open menu new me'
alert(obj.className); */

/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть, дефисы удаляются, а все слова после них получают заглавную букву.

Например:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

Такая функция полезна при работе с CSS.

P.S. Вам пригодятся методы строк charAt, split и toUpperCase.


function camelize(str){
	var arr = str.split('-');
	var pos = 0;
	for (var i = 1; i < arr.length; i++)
	{		
		arrayStr = arr[i];
		var symbol = arrayStr.charAt(0);
		symbol = symbol.toUpperCase();
		arrayStr = arrayStr.substr(1, arrayStr.length - 1);
		arrayStr = symbol + arrayStr;
		arr.splice(i, 1 , arrayStr);
	}
	
	str = arr.join('');
	return str;
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition")); */

/* У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

var obj = {
  className: 'open menu'
};

Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

obj = {
  className: 'my menu menu'
};
removeClass(obj, 'menu');
alert( obj.className ); // 'my'

Лишних пробелов после функции образовываться не должно. 

function removeClass(obj, cls){
	var arr = obj.className.split(' ');
	for (var i = 0; i < arr.length; i++)
	{
		if (arr[i] == cls) 
		{
			arr.splice(i, 1);
			i--;
		}
	}
	
	obj.className = arr.join(' ');
}


var obj = {
	className: 'open menu'
}

var obj2 = {
	className: 'menu open open open menu'
}

removeClass(obj, 'open');
alert(obj.className);
removeClass(obj, 'lala');
alert(obj.className);
removeClass(obj2, 'open');
alert(obj2.className);  	*/

/* Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b. 

То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна менять сам массив и ничего не возвращать. 


function filterRangeInPlace(arr, a, b) {
	for (var i = 0; i < arr.length; i++) 
	{
		if ((arr[i] < a) || (arr[i] > b))
		{
			arr.splice(i, 1);
			i--;
		}
	}
}

var arr = ["0", "21", "31", "14", "5", "62", "7", "81", "9", "10", "11", "12"];

filterRangeInPlace(arr, 0, 50);
alert(arr);
filterRangeInPlace(arr, 0, 25);
alert(arr); 		*/

/* Как отсортировать массив чисел в обратном порядке?

var arr = [5, 2, 1, -10, 8];

// отсортируйте?

alert( arr ); // 8, 5, 2, 1, -10 

function algSort(a , b) {
	if (a < b) return true;
	return false;
}

var arr = [5, 2, 1, -10, 8];
arr.sort(algSort);
alert(arr);	*/

/* Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.

Исходный массив не должен меняться.

var arr = ["HTML", "JavaScript", "CSS"];

// ... ваш код ...

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений) 

var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.slice().sort();
alert(arrSorted);
alert(arr);	 */

/* Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.
var arr = [1, 2, 3, 4, 5];

arr.sort(ваша функция);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4] 

function sortRandom(a, b) {
	var rand = Math.random();
	if (rand <= 0.5) return true;
	return false;
}

var arr = [1, 2, 3, 4, 5];

arr.sort(sortRandom);
alert( arr ); */

/* Напишите код, который отсортирует массив объектов people по полю age.

Например:

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

... ваш код ...

// теперь people: [vovochka, masha, vasya]
alert(people[0].age) // 6 

function MasSort(peopleA, peopleB) {
	return peopleA.age - peopleB.age;
} 

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(MasSort);

for (var i = 0; i < people.length; i++) 
{
	alert(people[i].age);
}		*/

/* Односвязный список – это структура данных, которая состоит из элементов, каждый из которых хранит ссылку на следующий. 
Последний элемент может не иметь ссылки, либо она равна null.

Например, объект ниже задаёт односвязный список, в next хранится ссылка на следующий элемент:

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


Задачи:

    Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
    Напишите функцию printList(list) при помощи рекурсии.
    Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
    Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл. 
	
function printList(list) {
	while (list) {
		alert(list.value);
		list = list.next;
	}
}

function printListRec(list) {
	if (!list) return;
	alert(list.value);
	printListRec(list.next);
}

function printReverseListRec(list) {
	if (list.next)
	{
		printReverseListRec(list.next);
	}
	alert(list.value);
}

function printReverseList(list) {
	var arr = [];
	while (list)
	{
		arr.unshift(list.value);
		list = list.next;
	}
	for (var i = 0; i < arr.length; i++)
	{
		alert(arr[i]);
	}
}

var list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
}

printList(list);
printListRec(list);
printReverseListRec(list);
printReverseList(list);  */

/* Анаграммы – слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:

воз - зов
киборг - гробик
корсет - костер - сектор

Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"

Из каждой группы анаграмм должно остаться только одно слово, не важно какое

function deleteSymbol (str, pos){
	var newStr = str.slice(0, pos);
	str = str.slice(pos + 1, str.length);
	str = newStr + str;
	return str;
}

function isAnagram(str1, str2) {
	if (str1.length != str2.length) return false;
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	for (var i = 0; i < str1.length; i++)
	{
		if (str2.indexOf(str1.charAt(i)) >= 0)
		{
			str2 = deleteSymbol(str2, str2.indexOf(str1.charAt(i)));
			str1 = deleteSymbol(str1, i);
			i--;
		}
	}
	
	if ((str1 == "") && (str2 == "")) return true;
	return false;
}

function aclean(arr) {
	for (var i = 0; i < arr.length; i++)
	{
		for (var j = 1; j < arr.length; j++)
		{
			if (isAnagram(arr[i], arr[j]) && (i != j))
			{	
				arr.splice(j, 1);
				j--;
				
			}
		}
	}
	
	return arr;
}

//var arr = ["воз",  "ЗОВ"];

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор", "зво", "малыш", "малышь", "ростек"];
aclean(arr);
alert(arr);   */

/* Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:  function unique(arr) {
  //ваш код
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-() 

function unique(arr) {
	var newArr = [];
	newArr.push(arr[0]);
	for (var i = 1; i < arr.length; i++)
	{
		if (newArr.indexOf(arr[i]) >= 0)
		{
			arr.splice(i, 1);
			i--;
		}
		else newArr.push(arr[i]);
	}
	
	return arr;
}

var strings = ["кришна", "кришна", "харе", "харе", 
  "харе", "харе", "кришна", "кришна", "8-()"];
alert( unique(strings) );  */

/* Код ниже получает из массива строк новый массив, содержащий их длины:

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5

Перепишите выделенный участок: уберите цикл, используйте вместо него метод map 


var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(number) {
	return number.length;
});

alert( arrLength ); // 4,5,2,5   */

/* На входе массив чисел, например: arr = [1,2,3,4,5].

Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма 
элементов arr до этой позиции включительно.

То есть:

для arr = [ 1, 2, 3, 4, 5 ]
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]

Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].

    Функция не должна модифицировать входной массив.
    В решении используйте метод arr.reduce. 

	
function getSums(arr) {
  var result = [];
  if (!arr.length) return result;

  arr.reduce(function(sum, item) {
    result.push(sum);
    return sum + item;
  });

  return result;
}

alert(getSums([1,2,3,4,5])) */

/* Как в функции отличить отсутствующий аргумент от undefined?

function f(x) {
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
}

f(undefined); // 1
f(); // 0 

function f(x) {
  if (arguments.length) return 1;
  return 0;
}

alert(f(undefined)); // 1
alert(f()); // 0 */

/* Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6 

function getSum() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++)
	{
		sum += arguments[i];
	}
	return sum;
}

alert(getSum());
alert(getSum(1));
alert(getSum(1, 2));
alert(getSum(1, 2, 3));
alert(getSum(1, 2, 3, 4));
alert(getSum(1, 2, 3, 4, 5));
alert(getSum(1, 2, 3, 4, 5, 6)); */

