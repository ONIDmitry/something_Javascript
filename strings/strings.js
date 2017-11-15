/*  Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом

function ucFirst(str) {
	var firstSymb = str[0];
	firstSymb = firstSymb.toUpperCase();
	str = str.substr(1, str.length - 1);
	str = firstSymb + str;
	return str;
}



alert(ucFirst("мама"));
alert(ucFirst("пама"));
alert(ucFirst("Мама"));
alert(ucFirst("Папа"));
alert(ucFirst("_мама"));
alert(ucFirst("-мама"));  */

/* Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.

function checkSpam(str) {
	var newStr = str.toLowerCase();
	
	if ((newStr.indexOf("viagra") >= 0) || (newStr.indexOf("xxx") >= 0)) return true;
	return false;
}

alert(checkSpam("viAgRa"));
alert(checkSpam("XXX"));
alert(checkSpam("VIAGRA"));
alert(checkSpam("viagra"));
alert(checkSpam("xxx"));
alert(checkSpam("okey"));  

Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – 
заменяет конец str на "...", так чтобы ее длина стала равна maxlength.

function truncate(str, maxlength) {
	if (maxlength <= 0) return "";
	if (str.length > maxlength)
	{
		str = str.substr(0, maxlength);
		str = str + '...';
	}
	return str;

}

alert(truncate('Мама мыла раму', 0));
alert(truncate('Мама мыла раму', 11)); */


/* Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять 
число-значение, в данном случае 120. 

function extractCurrencyValue(str) {
	return +str.slice(1);
}

alert(extractCurrencyValue("Р505"));
alert(extractCurrencyValue("$3")); */


