/* var person = {
name: "Dmitry",
surname: "Chekalin",
age: 25, 

facult: {
    name: "K",
    age: 50	
	}
}
person.age = 25;

var key = 'age';

alert( person[key] );

alert(person.facult.name);

for (var key in person) {
  // ���� ��� ����� ������ ��� ������� �������� �������
  // ..� ������� ��� �������� � ��� ��������

  alert( "Key: " + key + " Value: " + person[key] );
} 

var car = {};

 �������� ������� isEmpty(obj), ������� ���������� true, ���� � ������� ��� ������� � false � 
���� ���� ���� �������� ����. 

function isEmpty(obj) {	
	for (var key in obj)
	{
		return true;
	}
	return false;
}

alert(isEmpty(person));
alert(isEmpty(car)); */

/* ���� ������ salaries � ����������. �������� ���, ������� ������� ����� ���� �������.
���� ������ ������, �� ��������� ������ ���� 0. 
   ���� ������ salaries � ����������. �������� ���, ������� ������� ��� ����������, � �������� ����� ������� ��������.
���� ������ ������, �� ����� �� ������� ���� �����������. 
   �������� ������� multiplyNumeric, ������� �������� ������ � �������� ��� ��������� �������� �� 2 

function getSumSal(obj)
{
	var sum = 0;
	if (!isEmpty(obj)) return sum = "No members";
	for (var key in salaries)
	{
		sum +=	obj[key];
	}
	return sum;
}

function isEmpty(obj) {	
	for (var key in obj)
	{
		return true;
	}
	return false;
}

function getMaxSal(obj)
{
	var max = 0;
	if (!isEmpty(obj)) return max = "No members";
	for (var key in salaries)
	{
		if (obj[key] > max) max = obj[key];
	}
	return max;
}

function multiplyNumeric(obj) {
	if (!isEmpty(obj)) return;
	for (var key in obj)
	{
		if (!isNaN(parseFloat(obj[key])) && isFinite(obj[key])) (obj[key]) *= 2;
	}
}

var salaries = {
    "Dima": 500,
    "Nikita": 1000,
    "Severin": 750,
    "Maxim" : 350
};


var empty = {};

alert(getSumSal(salaries));
alert(getSumSal(empty));
alert(getMaxSal(salaries));
alert(getMaxSal(empty)); 
multiplyNumeric(salaries);
multiplyNumeric(empty);


for (var key in salaries) {
  // ���� ��� ����� ������ ��� ������� �������� �������
  // ..� ������� ��� �������� � ��� ��������

  alert( "Key: " + key + " Value: " + salaries[key] );
} 

for (var key in empty) {
  // ���� ��� ����� ������ ��� ������� �������� �������
  // ..� ������� ��� �������� � ��� ��������

  alert( "Key: " + key + " Value: " + empty[key] );
}  */

