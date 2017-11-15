/* Создайте объект calculator с тремя методами:

    read() запрашивает prompt два значения и сохраняет их как свойства объекта
    sum() возвращает сумму этих двух значений
    mul() возвращает произведение этих двух значений

var calculator = {
  ...ваш код...
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); 

var calculator = {
	
	firstValue: 0,
	secondValue: 0,
	
	read: function() {
		this.firstValue = +prompt('Введите первое число');
		this.secondValue = +prompt('Введите второе число');
	},
	
	sum: function() {
		return this.firstValue + this.secondValue;
	},
	
	mul: function() {
		return this.firstValue* this.secondValue;
	}
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */ 

/* Есть объект «лестница» ladder:

var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
  },
  down: function() { // вниз по лестнице
    this.step--;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
  }
};

Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так:

ladder.up().up().down().up().down().showStep(); // 1

Как видно, такая запись содержит «меньше букв» и может быть более наглядной.

Такой подход называется «чейнинг» (chaining) и используется, например, во фреймворке jQuery. 

var ladder = {
	step: 0,
	
	up: function () {
		this.step++;
		return this;
	},
	
	down: function () {
		this.step--;
		return this;
	},
	
	showStep: function () {
		alert(this.step);
	}
};

ladder.up().up().down().up().down().up().showStep();   */

/* Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

    Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
    Метод sum() возвращает сумму запомненных свойств.
    Метод mul() возвращает произведение запомненных свойств.

Пример использования:

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() ); 

function Calculator() {
	
	this.firstNumber = 0;
	this.secondNumber = 0;
	
	this.read = function () {
		this.firstNumber = +prompt("Введите первое число");
		this.secondNumber = +prompt("Введите второе число");
	}
	
	this.sum = function () {
		return this.firstNumber + this.secondNumber;
	}
	
	this.mul = function () {
		return this.firstNumber * this.secondNumber;
	}
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() ); */

/* Напишите функцию-конструктор Accumulator(startingValue). Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то,
 что вводит посетитель.

Более формально, объект должен:

    Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
    Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.

Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение 


function Accumulator(startingValue) {
	
	this.value = startingValue;
	
	this.read = function() {
		var newValue = +prompt("Введие число");
		this.value += newValue;
	}	
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение  */

/* Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

Эта задача состоит из двух частей, которые можно решать одна за другой.

    Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.

    Пример использования:

    var calc = new Calculator;

    alert( calc.calculate("3 + 7") ); // 10

Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и 
функцию от двух аргументов func(a,b), которая должна её реализовывать.

Например, добавим операции умножить *, поделить / и возвести в степень **:

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

    Поддержка скобок и сложных математических выражений в этой задаче не требуется.
    Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
    Предусмотрите обработку ошибок. Какая она должна быть – решите сами. 
	
function Calculator() {
	
	this.firstNumber = 0;
	this.secondNumber = 0;
	this.currentOperation = "";
	this.operations = {
		'+': function (a, b) {
			return a + b;
		}
	}
	
	this.getFirstNumber = function (str) {
		this.firstNumber = +str.substr(0, str.indexOf(" "));
	}
	
	this.getSecondNumber = function (str) {
		str = str.substr(str.indexOf(" ") + 1, str.length - str.indexOf(" "));
		this.secondNumber = +str.substr(str.indexOf(" ") + 1 , str.length - str.indexOf(" "));
	}
	
	this.getOperation = function (str) {
		str = str.substr(str.indexOf(" ") + 1, str.length - str.indexOf(" ")); 
		this.currentOperation = str.substr(0, str.indexOf(" "));
		if (!(this.currentOperation in this.operations)) return false;
	}
	
	this.calculate = function(str) {
		this.getFirstNumber(str);
		this.getSecondNumber(str);
		if (this.getOperation(str) == false) {
			alert("Такой операции еще нет");
			return false;
		}
		for (var key in this.operations)
		{
			if (key == this.currentOperation) 
			{
				return this.operations[key](this.firstNumber, this.secondNumber);
			}
		}
	}
	
	this.addMethod = function (oper, f) {
		this.operations[oper] = f;
	}
}


var powerCalc = new Calculator();

powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});
powerCalc.addMethod("-", function (a, b) {
	return a - b;
});

alert(powerCalc.calculate("1 - 255"));   */

/* Выполнить предыдущее задание без конструкторов, используя split для парсинга строки 

function makeCalculator() {
	
	var operations = {
		'+': function (a, b) {
			return a + b;
		}
	}
	
	function calculator(str) {
		var members = str.split(" ");
		if (!operations[members[1]]) return false;
		if (isNaN(members[0]) || (isNaN(members[2]))) return NaN;
		return operations[members[1]](+members[0], +members[2]);
	}
	
	calculator.addMethod = function (oper, f) {
		operations[oper] = f;
	}
	
	return calculator;
}

var calculator = makeCalculator();

calculator.addMethod("*", function(a, b) {
  return a * b;
});
calculator.addMethod("/", function(a, b) {
  return a / b;
});
calculator.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});
calculator.addMethod("-", function (a, b) {
	return a - b;
});

alert(calculator("1 - 255"));

alert(calculator("1 + 2")); */

/* Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:

function User(fullName) {
  this.fullName = fullName;
}

var vasya = new User("Василий Попкин");

Имя и фамилия всегда разделяются пробелом.

Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:

var vasya = new User("Василий Попкин");

// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров

Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName – реализованы через get/set. Лишнее дублирование здесь ни к чем 


function User(fullName) {
  this.fullName = fullName;

  Object.defineProperties(this, {

    firstName: {

      get: function() {
        return this.fullName.split(' ')[0];
      },

      set: function(newFirstName) {
        this.fullName = newFirstName + ' ' + this.lastName;
      }

    },

    lastName: {

      get: function() {
        return this.fullName.split(' ')[1];
      },

      set: function(newLastName) {
        this.fullName = this.firstName + ' ' + newLastName;
      }

    }

  });
}

var vasya = new User("Василий Попкин");

// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров		*/


