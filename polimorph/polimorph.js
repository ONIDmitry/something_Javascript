/* Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.

Ее первый аргумент должен содержать дату в одном из видов:

    Как объект Date.
    Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
    Как число секунд с 01.01.1970.
    Как массив [гггг, мм, дд], месяц начинается с нуля

Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.

Пример работы:

function formatDate(date) {  ваш код  }

alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14 

function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
}

function getFormDate(date) {
	var dateString = "";
	
	if (date.getDate() < 10) dateString+= '0';
	dateString += date.getDate() + '.';
	if ((date.getMonth() + 1) < 10) dateString += '0';
	dateString += (date.getMonth()+1) + '.';
	var year = "" + date.getFullYear();
	dateString += year.substr(2, 2);
	return dateString;
}

function formatDate(date) {
	
	if (getClass(date) == "String") {
		var arr = date.split('-');
		arr[0] = arr[0].substr(2, 2);
		return arr[2] + '.' + arr[1] + '.' + arr[0];
	}
	if (getClass(date) == "Number") {
		var newDate = new Date(date * 1000);
		return getFormDate(newDate);
	}
	if (getClass(date) == "Array") {
		var newDate = new Date(date[0] , date[1], date[2]);
		return getFormDate(newDate);
	}
	if (getClass(date) == "Date") {
		return getFormDate(date);
	}
}

alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14 */

