/*  Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.

Временная зона – местная. Выведите его на экран. 

var date = new Date(2012, 1, 20, 3, 12, 0, 0);
alert(date); */
 
/* Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.

Например:

var date = new Date(2012,0,3);  
alert( getWeekDay(date) );       

function getWeekDay(date) {
	var day = date.getDay();
	
	switch (day) {
		case 0: return 'вс';
		case 1: return 'пн';
		case 2: return 'вт';
		case 3: return 'ср';
		case 4: return 'чт';
		case 5: return 'пт';
		case 6: return 'сб';
		break;
	}
}

var date = new Date(2012,0,3);  
alert( getWeekDay(date) );      */

/* Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.

День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

var date = new Date(2012, 0, 3);  
alert( getLocalDay(date) );       

function getLocalDay(date) {
	var day = date.getDay();
	
	switch (day) {
		case 0: 
		{
			day = 7;
			return 'вс';
		}
		case 1: return 'пн';
		case 2: return 'вт';
		case 3: return 'ср';
		case 4: return 'чт';
		case 5: return 'пт';
		case 6: return 'сб';
		break;
	}
}

var date = new Date(2012, 0, 3);  
alert( getLocalDay(date) ); */

/* Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.

Например, для 2 января 2015:

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)

P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date. 

function getDateAgo(date, days) {
	var newDate = new Date(date);
	newDate.setDate(date.getDate() - days);
	return newDate.getDate();
}

var date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1)); // 1, (1 января 2015)
alert(getDateAgo(date, 2)); // 31, (31 декабря 2014)
alert(getDateAgo(date, 365)); // 2, (2 января 2014) */

/* Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.

Параметры:

    year – 4-значный год, например 2012.
    month – месяц от 0 до 11.

Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль). 

function getLastDayOfMonth(year, month) {
	var date = new Date(year, month+1, 1, 0, 0, 0);
	date.setMinutes(date.getMinutes() - 1);
	return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28  */

/* Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.

Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)

Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. 

function getSecondsToday() {
	var date = new Date();
	return date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();
}


alert(getSecondsToday()); */

/* Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600

P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. 

function getSecondsToTomorrow(){
	var date = new Date();
	var result = 0;
	result += (60-date.getSeconds());
	var minutes = date.getMinutes();
	result += (59-minutes)*60;
	var hours = date.getHours();
	result += (23-hours)*3600;
	return result; 
}

alert(getSecondsToTomorrow()); */

/* Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:

Например:

var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'

P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1. 

function formatDate(d) {
	var year = d.getFullYear();
	year = "" + year;
	year = year.substr(year.length - 2, 2);
	var month = d.getMonth() + 1;
	if (month < 10) month = '0' + month;
	var day = d.getDate();
	if (day < 10) day = '0' + day;
	return day + '.' + month + '.' + year;

}

var d = new Date(2017, 11, 31); // 30 января 2014
alert( formatDate(d) ); // '30.01.14' */

/* Напишите функцию formatDate(date), которая форматирует дату date так:


    Если со времени date прошло менее секунды, то возвращает "только что".
    Иначе если со времени date прошло менее минуты, то "n сек. назад".
    Иначе если прошло меньше часа, то "m мин. назад".
    Иначе полная дата в формате "дд.мм.гг чч:мм" 
	

function formatDate(d) {
	var resStr = "";
	var date = new Date();
	if ((date - d)/1000 < 1) resStr = "только что";
	else if ((date - d)/60000 <= 1) resStr = ((date - d)/1000) + " секунд назад";
	else if ((date - d)/(1000*60*60) <= 1) resStr = ((date - d)/(60000)) + " минут назад";
	else
	{
		var year = d.getFullYear();
		year = "" + year;
		year = year.substr(year.length - 2, 2);
		var month = d.getMonth() + 1;
		if (month < 10) month = '0' + month;
		var day = d.getDate();
		if (day < 10) day = '0' + day;
		var hour = d.getHours();
		if (hour < 10) hour = '0' + hour;
		var minute = d.getMinutes();
		if (minute < 10) minute = '0' + minute;
		resStr = day + '.' + month + '.' + year + ' ' + hour + ':' + minute;
	}
	return resStr;

}	
	

alert( formatDate(new Date(new Date - 999)) ); // "только что"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг   */

function makeCounter() {
  var currentCount = 1;

  return function() { // (**)
    return currentCount++;
  };
}

var counter = makeCounter(); // (*)

// каждый вызов увеличивает счётчик и возвращает результат
alert( counter() ); // 1
alert( counter() ); // 2
alert( counter() ); // 3

// создать другой счётчик, он будет независим от первого
var counter2 = makeCounter();
alert( counter2() ); // 1