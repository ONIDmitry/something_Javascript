/*  Есть конструктор со статическими методами и свойствами:

function Article() {
  Article.count++;

  //...
}
Article.count = 0;

Article.showCount = function() {
  alert( this.count ); // (1)
}

// использование
new Article();
new Article();
Article.showCount(); // (2)

Добавить в конструктор Article:

    Подсчёт общего количества созданных объектов.
    Запоминание даты последнего созданного объекта.

Используйте для этого статические свойства.

Пусть вызов Article.showStats() выводит то и другое.

Использование:


function Article() {
  this.created = new Date();
  // ... ваш код ...
}

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата) 

function Article() {
	Article.count++;
	Article.created = new Date();
}

Article.count = 0;

Article.showStats = function () {
	alert("Всего: " + Article.count + ", Последняя: " + Article.created);
}

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата) */

/* Создайте функцию sumArgs(), которая будет суммировать все свои аргументы:

function sumArgs() {
ваш код
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива


function sumArgs() {
if (arguments.length === 0) return false;
var sum = 0;
for (var j = 0; j < arguments.length; j++)
{
sum += arguments[j];
}
return sum;
}

alert (sumArgs(1, 2, 3));
alert (sumArgs());
alert (sumArgs(1, 2, 3, NaN));
alert (sumArgs(1)); */


